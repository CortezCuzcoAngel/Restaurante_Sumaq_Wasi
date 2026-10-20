
    const CLAVE_COMENTARIOS = "sumaqwasi_comentarios";

    // Lee los comentarios guardados en este navegador.
    function leerComentarios() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE_COMENTARIOS)) || [];
    } catch {
        return [];
    }
    }

    // Guarda la lista actual.
    function guardarComentarios(comentarios) {
    localStorage.setItem(CLAVE_COMENTARIOS, JSON.stringify(comentarios));
    }

    // Escapa texto para que un comentario no pueda insertar HTML.
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

    // Configura las estrellas de cada categoría.
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
        campo.value = seleccion;
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

    // Presenta las opiniones y el promedio de cada aspecto.
    function mostrarComentarios() {
    const comentarios = leerComentarios();
    const lista = document.getElementById("lista-comentarios");
    const resumen = document.getElementById("resumen-calificaciones");

    if (!lista || !resumen) return;

    if (comentarios.length === 0) {
        resumen.textContent = "Todavía no hay calificaciones.";
        lista.innerHTML = "<p>Sé el primero en compartir tu experiencia.</p>";
        return;
    }

    const promedio = (aspecto) => {
        const total = comentarios.reduce((suma, c) => suma + c[aspecto], 0);
        return (total / comentarios.length).toFixed(1);
    };

    resumen.innerHTML = `
        <p><strong>${comentarios.length}</strong> opinión(es)</p>
        <p>Atención: ⭐ ${promedio("atencion")} / 5</p>
        <p>Comida: ⭐ ${promedio("comida")} / 5</p>
        <p>Ambiente: ⭐ ${promedio("ambiente")} / 5</p>
    `;

    lista.innerHTML = comentarios
        .slice()
        .reverse()
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

        <button class="btn-eliminar-comentario"
            type="button" data-eliminar="${escaparHTML(c.id)}">
            Eliminar
        </button>
        </article>
    `,
        )
        .join("");

    // El botón de eliminar se habilita solo en modo administrador.
    lista.querySelectorAll("[data-eliminar]").forEach((boton) => {
        boton.hidden = !modoAdministrador;

        boton.addEventListener("click", () => {
        if (!modoAdministrador) return;

        const id = boton.dataset.eliminar;
        const confirmar = window.confirm("¿Deseas eliminar este comentario?");
        if (!confirmar) return;

        guardarComentarios(leerComentarios().filter((c) => c.id !== id));
        mostrarComentarios();
        });
    });
    }

    // Publicar una opinión.
    document
    .getElementById("form-comentario")
    ?.addEventListener("submit", (evento) => {
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
        ![atencion, comida, ambiente].every((n) => n >= 1 && n <= 5)
        ) {
        mensaje.textContent =
            "Completa tu nombre, comentario y las tres calificaciones.";
        return;
        }

        const nuevoComentario = {
        id: crypto.randomUUID(),
        nombre,
        comentario,
        atencion,
        comida,
        ambiente,
        fecha: new Date().toLocaleDateString("es-PE"),
        };

        const comentarios = leerComentarios();
        comentarios.push(nuevoComentario);
        guardarComentarios(comentarios);

        formulario.reset();
        formulario.querySelectorAll(".estrellas").forEach((grupo) => {
        grupo
            .querySelectorAll("button")
            .forEach((b) => b.classList.remove("seleccionada"));
        });

        mensaje.textContent =
        "¡Gracias! Tu comentario se publicó en este navegador.";
        mostrarComentarios();
    });

    // Modo administrador de demostración.

    let modoAdministrador = false;

    document.addEventListener("keydown", (evento) => {
    // Ctrl + Shift + A permite activar el modo administrador.
    if (evento.ctrlKey && evento.shiftKey && evento.key.toLowerCase() === "a") {
        const clave = prompt("Introduce la clave de administrador:");

        // Clave
        if (clave === "237890sumaqwasi") {
        modoAdministrador = !modoAdministrador;
        alert(
            modoAdministrador
            ? "Modo administrador activado."
            : "Modo administrador desactivado.",
        );
        mostrarComentarios();
        } else {
        alert("Clave incorrecta.");
        }
    }
    });

    mostrarComentarios();
