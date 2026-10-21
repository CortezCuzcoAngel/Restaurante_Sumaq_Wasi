    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

    import {
    getFirestore,
    collection,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    orderBy,
    } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

    import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    browserSessionPersistence,
    setPersistence,
    } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

    // 1. Pega aquí la configuración de tu aplicación web Firebase.
    const firebaseConfig = {
    apiKey: "AIzaSyBPpkjAIk9e9lqUPfAG_5jVJU3y6Ha79BU",
    authDomain: "sumaq-wasi-comentarios.firebaseapp.com",
    projectId: "sumaq-wasi-comentarios",
    storageBucket: "sumaq-wasi-comentarios.firebasestorage.app",
    messagingSenderId: "903559074396",
    appId: "1:903559074396:web:b65858b4c502ea97010c99",
    measurementId: "G-SFK6JE42C3",
    };

    // 2. Inicializar Firebase, Firestore y Authentication.
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    const UID_ADMIN = "G8FTAJ0KFBfOhOpCABGaj1bpSRh2";

    const comentariosRef = collection(db, "comentarios");

    let modoAdministrador = false;

    // Mantener la sesión de administrador solo en esta sesión del navegador.
    setPersistence(auth, browserSessionPersistence).catch((error) => {
    console.error("No se pudo configurar la sesión:", error);
    });

    // Escapar texto para evitar que un comentario inserte HTML.
    function escaparHTML(texto) {
    return String(texto).replace(
        /[&<>"']/g,
        (caracter) =>
        ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        })[caracter],
    );
    }

    // Preparar y mostrar las estrellas.
    document.querySelectorAll(".estrellas").forEach((grupo) => {
    const botones = grupo.querySelectorAll("button");
    const campo = grupo.querySelector("input");
    let seleccion = 0;

    function pintarEstrellas(valor) {
        botones.forEach((boton) => {
        const numero = Number(boton.dataset.valor);
        boton.classList.toggle("seleccionada", numero <= valor);
        });
    }

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
        seleccion = Number(boton.dataset.valor);

        if (campo) {
            campo.value = seleccion;
        }

        pintarEstrellas(seleccion);
        });

        boton.addEventListener("mouseenter", () => {
        pintarEstrellas(Number(boton.dataset.valor));
        });
    });

    grupo.addEventListener("mouseleave", () => {
        pintarEstrellas(seleccion);
    });
    });

    // Mostrar comentarios y promedios.
    function mostrarComentarios(comentarios) {
    const lista = document.getElementById("lista-comentarios");
    const resumen = document.getElementById("resumen-calificaciones");

    if (!lista || !resumen) return;

    if (comentarios.length === 0) {
        resumen.textContent = "Todavía no hay calificaciones.";
        lista.innerHTML = "<p>Sé el primero en compartir tu experiencia.</p>";
        return;
    }

    const promedio = (aspecto) => {
        const total = comentarios.reduce(
        (suma, comentario) => suma + Number(comentario[aspecto] || 0),
        0,
        );

        return (total / comentarios.length).toFixed(1);
    };

    resumen.innerHTML = `
            <p><strong>${comentarios.length}</strong> opinión(es)</p>
            <p>Atención: ⭐ ${promedio("atencion")} / 5</p>
            <p>Comida: ⭐ ${promedio("comida")} / 5</p>
            <p>Ambiente: ⭐ ${promedio("ambiente")} / 5</p>
        `;

    lista.innerHTML = comentarios
        .map(
        (c) => `
            <article class="comentario-card">
                <div class="comentario-card-cabecera">
                    <strong>${escaparHTML(c.nombre)}</strong>
                    <small>${escaparHTML(c.fecha)}</small>
                </div>

                <p>Atención: ${"★".repeat(c.atencion)}${"☆".repeat(5 - c.atencion)}</p>
                <p>Comida: ${"★".repeat(c.comida)}${"☆".repeat(5 - c.comida)}</p>
                <p>Ambiente: ${"★".repeat(c.ambiente)}${"☆".repeat(5 - c.ambiente)}</p>

                <p class="comentario-texto">${escaparHTML(c.comentario)}</p>

                <button
                    class="btn-eliminar-comentario"
                    type="button"
                    data-eliminar="${escaparHTML(c.id)}"
                    ${modoAdministrador ? "" : "hidden"}
                >
                    Eliminar
                </button>
            </article>
        `,
        )
        .join("");

    // El botón solo aparece en la interfaz del administrador.
    // Firestore también verifica los permisos al intentar borrar.
    lista.querySelectorAll("[data-eliminar]").forEach((boton) => {
        boton.addEventListener("click", async () => {
        if (!modoAdministrador || auth.currentUser?.uid !== UID_ADMIN) {
            return;
        }

        const id = boton.dataset.eliminar;

        if (!window.confirm("¿Deseas eliminar este comentario?")) {
            return;
        }

        try {
            await deleteDoc(doc(db, "comentarios", id));
        } catch (error) {
            console.error("Error al eliminar:", error);
            alert(
            "No se pudo eliminar. Verifica que tu cuenta sea administradora.",
            );
        }
        });
    });
    }

    // 3. Escuchar la colección de Firestore en tiempo real.
    // Los comentarios nuevos aparecerán también en otros dispositivos.
    const consultaComentarios = query(comentariosRef, orderBy("fecha"));

    onSnapshot(
    consultaComentarios,
    (snapshot) => {
        const comentarios = snapshot.docs.map((documento) => ({
        id: documento.id,
        ...documento.data(),
        }));

        mostrarComentarios(comentarios);
    },
    (error) => {
        console.error("Error al leer comentarios:", error);

        const lista = document.getElementById("lista-comentarios");

        if (lista) {
        lista.textContent =
            "No se pudieron cargar las opiniones. Intenta nuevamente más tarde.";
        }
    },
    );

    // 4. Publicar una opinión en Firestore.
    document
    .getElementById("form-comentario")
    ?.addEventListener("submit", async (evento) => {
        evento.preventDefault();

        const formulario = evento.currentTarget;
        const datos = new FormData(formulario);

        const nombre = String(datos.get("nombre") || "").trim();
        const comentario = String(datos.get("comentario") || "").trim();
        const atencion = Number(datos.get("atencion"));
        const comida = Number(datos.get("comida"));
        const ambiente = Number(datos.get("ambiente"));

        const mensaje = document.getElementById("mensaje-formulario");

        if (
        !nombre ||
        !comentario ||
        nombre.length > 60 ||
        comentario.length > 500 ||
        ![atencion, comida, ambiente].every(
            (n) => Number.isInteger(n) && n >= 1 && n <= 5,
        )
        ) {
        mensaje.textContent =
            "Completa tu nombre, comentario y las tres calificaciones.";
        return;
        }

        try {
        await addDoc(comentariosRef, {
            nombre,
            comentario,
            atencion,
            comida,
            ambiente,
            fecha: new Date().toLocaleDateString("es-PE"),
        });

        formulario.reset();

        formulario.querySelectorAll(".estrellas").forEach((grupo) => {
            grupo.querySelectorAll("button").forEach((boton) => {
            boton.classList.remove("seleccionada");
            });
        });

        mensaje.textContent = "¡Gracias! Tu opinión se publicó correctamente.";
        } catch (error) {
        console.error("Error al publicar:", error);
        mensaje.textContent =
            "No se pudo publicar la opinión. Revisa la conexión con Firebase.";
        }
    });

    // 5. Acceso administrativo mediante Ctrl + Shift + A.
    // No hay una clave fija escrita en el código.
    document.addEventListener("keydown", async (evento) => {
    if (evento.ctrlKey && evento.shiftKey && evento.key.toLowerCase() === "a") {
        evento.preventDefault();

        // Si el administrador ya inició sesión, el atajo cierra sesión.
        if (auth.currentUser?.uid === UID_ADMIN) {
        await signOut(auth);
        return;
        }

        const email = window.prompt("Correo de administrador:");

        if (!email) return;

        const password = window.prompt("Contraseña de administrador:");

        if (!password) return;

        try {
        await signInWithEmailAndPassword(auth, email.trim(), password);
        } catch (error) {
        console.error("Error de inicio de sesión:", error);
        alert("No se pudo iniciar sesión. Revisa el correo y la contraseña.");
        }
    }
    });

    // 6. Activar la opción de eliminar solo para el UID autorizado.
    onAuthStateChanged(auth, (usuario) => {
    modoAdministrador = usuario?.uid === UID_ADMIN;

    // Volver a dibujar los comentarios para mostrar/ocultar los botones.
    // La siguiente actualización de Firestore también los renderizará.
    const lista = document.getElementById("lista-comentarios");

    if (lista) {
        lista.querySelectorAll("[data-eliminar]").forEach((boton) => {
        boton.hidden = !modoAdministrador;
        });
    }

    if (modoAdministrador) {
        console.info("Sesión de administrador iniciada.");
    } else {
        console.info("Sesión de administrador cerrada.");
    }
    });
