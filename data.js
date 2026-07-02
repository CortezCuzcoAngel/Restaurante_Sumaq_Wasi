// ============================================================
// SUMAQ WASI — Datos de los platos
// Para agregar o editar un plato, solo modifica este arreglo.
// La foto de cada plato se busca en: images/[imagen]
// Si el archivo no existe, se muestra un marco decorativo
// (ver GUIA-DE-IMAGENES.txt para saber cómo reemplazarlas).
// ============================================================

const PLATOS = [
  // =====================
  // DESAYUNOS
  // =====================
  {
    id: "chicharron-mote-cafe",
    categoria: "Desayunos",
    nombre: "Chicharrón con Mote + Café",
    precio: "S/ 20",
    imagen: "images/chicharron-mote-cafe.jpg",
    resumen:
      "Crujiente chicharrón de cerdo acompañado de mote y café cajamarquino.",
    descripcion:
      "Exquisito chicharrón preparado con carne de cerdo seleccionada, cocido lentamente hasta quedar crocante por fuera y jugoso por dentro. Se sirve con mote pelado y una taza de café cajamarquino recién preparado, logrando una combinación tradicional muy apreciada en la región.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "350 g de cerdo" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Tiempo de preparación", valor: "1 hora" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Incluye", valor: "Mote y café" },
    ],
    ingredientes: [
      "350 g de panceta de cerdo",
      "1 taza de agua",
      "Sal al gusto",
      "Mote pelado",
      "Café cajamarquino recién pasado",
    ],
    preparacion: [
      "Cortar la carne de cerdo en trozos medianos.",
      "Colocarla en una olla con agua y sal.",
      "Cocinar hasta que el agua se evapore completamente.",
      "Dejar que el cerdo se dore en su propia grasa hasta quedar crocante.",
      "Calentar el mote previamente cocido.",
      "Servir el chicharrón acompañado del mote.",
      "Preparar una taza de café cajamarquino recién pasado y servir junto al plato.",
    ],
  },
  {
    id: "trucha-frita-yuca-cafe",
    categoria: "Desayunos",
    nombre: "Trucha Frita con Yuca + Café",
    precio: "S/ 18",
    imagen: "images/trucha-yuca-cafe.jpg",
    resumen:
      "Trucha frita acompañada de yuca sancochada y una taza de café cajamarquino.",
    descripcion:
      "Deliciosa trucha fresca frita hasta quedar dorada y crujiente, servida con yuca sancochada y una aromática taza de café producido en las montañas de Cajamarca. Un plato tradicional que combina el sabor de la trucha con uno de los mejores cafés del Perú.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 trucha entera" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Tiempo de preparación", valor: "35 minutos" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Incluye", valor: "Yuca sancochada y café" },
    ],
    ingredientes: [
      "1 trucha fresca",
      "2 yucas medianas",
      "2 dientes de ajo",
      "2 limones",
      "Sal y pimienta al gusto",
      "Aceite vegetal",
      "Café cajamarquino recién pasado",
    ],
    preparacion: [
      "Limpiar y sazonar la trucha con ajo, limón, sal y pimienta.",
      "Dejar reposar durante 15 minutos.",
      "Sancochar la yuca hasta que esté suave.",
      "Freír la trucha en aceite caliente hasta que quede dorada por ambos lados.",
      "Escurrir el exceso de aceite.",
      "Servir la trucha acompañada de la yuca sancochada.",
      "Preparar una taza de café cajamarquino recién pasado y servir junto al plato.",
    ],
  },

  // =====================
  // Caldos
  // =====================
  {
    id: "caldo-verde",
    categoria: "Caldos",
    nombre: "Caldo Verde Cajamarquino",
    precio: "S/ 13",
    imagen: "images/caldo-verde.jpg",
    resumen: "Caldo de papa con paico y culantro, con huevo y queso fresco.",
    descripcion:
      "Sopa reconfortante a base de papa, paico y culantro molidos, que le dan su característico color verde y aroma herbal. Se le agrega un huevo escalfado y trozos de queso fresco cajamarquino. El desayuno tradicional de las mañanas frías de la sierra.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 tazón (400 ml)" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Tiempo de preparación", valor: "35 min" },
      { etiqueta: "Origen", valor: "Desayuno tradicional serrano" },
      {
        etiqueta: "Acompañado de",
        valor: "Huevo escalfado y queso fresco",
      },
    ],
    ingredientes: [
      "4 papas medianas",
      "1 manojo de paico",
      "1 manojo de culantro",
      "2 huevos",
      "150 g de queso fresco",
      "1 litro de caldo de gallina",
      "Sal al gusto",
    ],
    preparacion: [
      "Licuar el paico y el culantro con un poco de caldo hasta obtener una pasta verde.",
      "Cocinar las papas peladas y cortadas en el caldo de gallina hasta que estén suaves.",
      "Incorporar la pasta de hierbas al caldo y cocinar 5 minutos más.",
      "Agregar los huevos enteros al caldo caliente y dejar escalfar 3-4 minutos.",
      "Servir con trozos de queso fresco encima.",
    ],
  },

  {
    id: "caldo-de-gallina",
    categoria: "Caldos",
    nombre: "Caldo de Gallina",
    precio: "S/ 18",
    imagen: "images/caldo-gallina.jpg",
    resumen:
      "Reconfortante caldo de gallina criolla con fideos, papa, huevo y hierbas aromáticas.",
    descripcion:
      "Tradicional caldo preparado con gallina criolla cocida lentamente para obtener un caldo lleno de sabor. Se acompaña con papa amarilla, fideos, huevo sancochado y cebolla china picada. Es uno de los platos favoritos para combatir el frío de las mañanas cajamarquinas y recuperar energías.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 tazón grande (600 ml)" },
      { etiqueta: "Nivel picante", valor: "Ninguno (ají aparte)" },
      { etiqueta: "Tiempo de preparación", valor: "2 horas" },
      { etiqueta: "Origen", valor: "Cocina tradicional peruana" },
      {
        etiqueta: "Acompañado de",
        valor: "Papa, fideos, huevo y cebolla china",
      },
    ],
    ingredientes: [
      "1 presa de gallina criolla",
      "2 litros de agua",
      "2 papas amarillas",
      "100 g de fideos largos",
      "1 huevo",
      "1 trozo de kion",
      "2 ramas de apio",
      "Cebolla china picada",
      "Sal al gusto",
    ],
    preparacion: [
      "Lavar bien la gallina y colocarla en una olla con agua, apio y kion.",
      "Cocinar a fuego lento durante aproximadamente 1 hora y media hasta que la carne esté suave.",
      "Agregar las papas peladas y cocinar hasta que estén tiernas.",
      "Incorporar los fideos y cocinar durante 8 a 10 minutos.",
      "Sancochar el huevo por separado y cortarlo por la mitad.",
      "Rectificar la sal del caldo.",
      "Servir bien caliente con una presa de gallina, papa, fideos, medio huevo y cebolla china picada encima.",
    ],
  },

  {
    id: "caldo-de-cabeza",
    categoria: "Caldos",
    nombre: "Caldo de Cabeza",
    precio: "S/ 20",
    imagen: "images/caldo-de-cabeza.jpg",
    resumen:
      "Tradicional caldo de cabeza de carnero, servido con papa, mote y hierbas aromáticas.",
    descripcion:
      "El caldo de cabeza es uno de los platos más tradicionales de la sierra peruana. Se prepara con cabeza de carnero cocida lentamente hasta obtener un caldo concentrado y lleno de sabor. Se sirve bien caliente con papa, mote, cebolla china y hierbabuena, siendo muy apreciado por su sabor y por brindar energía en los días fríos de Cajamarca.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 tazón grande (650 ml)" },
      { etiqueta: "Nivel picante", valor: "Ninguno (ají aparte)" },
      { etiqueta: "Tiempo de preparación", valor: "3 horas" },
      { etiqueta: "Origen", valor: "Tradición andina cajamarquina" },
      { etiqueta: "Acompañado de", valor: "Papa, mote y hierbabuena" },
    ],
    ingredientes: [
      "1 cabeza de carnero limpia",
      "2 litros de agua",
      "3 papas amarillas",
      "1 taza de mote cocido",
      "1 rama de hierbabuena",
      "1 rama de apio",
      "Kion al gusto",
      "Cebolla china picada",
      "Sal al gusto",
    ],
    preparacion: [
      "Lavar cuidadosamente la cabeza de carnero y colocarla en una olla con abundante agua.",
      "Agregar el apio, el kion y una rama de hierbabuena.",
      "Cocinar a fuego lento durante aproximadamente 2 horas y media hasta que la carne esté muy suave.",
      "Retirar las impurezas que se formen en la superficie del caldo.",
      "Agregar las papas peladas y cocinar hasta que estén tiernas.",
      "Incorporar el mote cocido y dejar hervir durante unos minutos más.",
      "Rectificar la sal al gusto.",
      "Servir bien caliente con una porción de carne de la cabeza, papa, mote y cebolla china picada. Acompañar con ají criollo y limón al gusto.",
    ],
  },

  // =====================
  // Jugos
  // =====================
  {
    id: "jugo-papaya",
    categoria: "Jugos",
    nombre: "Jugo de Papaya",
    precio: "S/ 8",
    imagen: "images/jugo-papaya.webp",
    resumen: "Refrescante jugo natural de papaya preparado al instante.",
    descripcion:
      "Delicioso jugo elaborado con papaya fresca cuidadosamente seleccionada. Es una bebida suave, nutritiva y rica en vitaminas, ideal para acompañar cualquier desayuno o almuerzo.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 vaso (400 ml)" },
      { etiqueta: "Preparación", valor: "Al instante" },
      { etiqueta: "Endulzante", valor: "Azúcar al gusto" },
      { etiqueta: "Origen", valor: "Fruta fresca" },
      { etiqueta: "Se sirve", valor: "Bien frío" },
    ],
    ingredientes: ["Papaya fresca", "Agua", "Azúcar al gusto", "Hielo"],
    preparacion: [
      "Pelar y cortar la papaya.",
      "Licuar con agua y azúcar.",
      "Agregar hielo.",
      "Servir inmediatamente.",
    ],
  },

  {
    id: "jugo-pina",
    categoria: "Jugos",
    nombre: "Jugo de Piña",
    precio: "S/ 8",
    imagen: "images/jugo-pina.webp",
    resumen: "Jugo natural de piña fresca, dulce y refrescante.",
    descripcion:
      "Preparado con piña fresca, ofreciendo un sabor tropical y refrescante.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 vaso (400 ml)" },
      { etiqueta: "Preparación", valor: "Al instante" },
      { etiqueta: "Endulzante", valor: "Azúcar al gusto" },
      { etiqueta: "Origen", valor: "Fruta fresca" },
      { etiqueta: "Se sirve", valor: "Frío" },
    ],
    ingredientes: ["Piña fresca", "Agua", "Azúcar", "Hielo"],
    preparacion: [
      "Pelar la piña.",
      "Licuar con agua y azúcar.",
      "Agregar hielo.",
      "Servir.",
    ],
  },

  {
    id: "jugo-surtido",
    categoria: "Jugos",
    nombre: "Jugo Surtido",
    precio: "S/ 8",
    imagen: "images/jugo-surtido.webp",
    resumen: "Combinación de frutas frescas de temporada.",
    descripcion:
      "Una mezcla de frutas naturales que brinda un sabor único y una excelente fuente de vitaminas.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 vaso (450 ml)" },
      { etiqueta: "Preparación", valor: "Al instante" },
      { etiqueta: "Frutas", valor: "Variadas" },
      { etiqueta: "Origen", valor: "Frutas frescas" },
      { etiqueta: "Se sirve", valor: "Frío" },
    ],
    ingredientes: [
      "Papaya",
      "Piña",
      "Plátano",
      "Naranja",
      "Agua",
      "Azúcar",
      "Hielo",
    ],
    preparacion: [
      "Lavar y cortar las frutas.",
      "Licuarlas con agua y azúcar.",
      "Agregar hielo.",
      "Servir.",
    ],
  },

  {
    id: "jugo-especial",
    categoria: "Jugos",
    nombre: "Jugo Especial",
    precio: "S/ 12",
    imagen: "images/jugo-especial.webp",
    resumen: "Exquisita combinación de frutas con leche.",
    descripcion:
      "Nuestro jugo especial combina frutas seleccionadas con leche fresca para ofrecer un sabor cremoso y nutritivo.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 vaso (500 ml)" },
      { etiqueta: "Preparación", valor: "Al instante" },
      { etiqueta: "Base", valor: "Leche" },
      { etiqueta: "Origen", valor: "Receta de la casa" },
      { etiqueta: "Se sirve", valor: "Frío" },
    ],
    ingredientes: ["Papaya", "Plátano", "Fresa", "Leche", "Azúcar", "Hielo"],
    preparacion: [
      "Licuar todas las frutas con leche.",
      "Agregar azúcar al gusto.",
      "Añadir hielo.",
      "Servir.",
    ],
  },

  {
    id: "ponche",
    categoria: "Jugos",
    nombre: "Ponche",
    precio: "S/ 18",
    imagen: "images/ponche.jpg",
    resumen: "Bebida cremosa preparada con leche y huevo.",
    descripcion:
      "Tradicional ponche preparado con leche fresca, huevo y canela, ideal para empezar el día con energía.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 vaso" },
      { etiqueta: "Preparación", valor: "Al instante" },
      { etiqueta: "Base", valor: "Leche" },
      { etiqueta: "Sabor", valor: "Dulce" },
      { etiqueta: "Se sirve", valor: "Frío" },
    ],
    ingredientes: ["Leche", "Huevo", "Canela", "Azúcar", "Vainilla"],
    preparacion: [
      "Licuar todos los ingredientes.",
      "Agregar hielo.",
      "Servir inmediatamente.",
    ],
  },

  {
    id: "jugo-arandano",
    categoria: "Jugos",
    nombre: "Jugo de Arándano",
    precio: "S/ 12",
    imagen: "images/jugo-arandano.jpeg",
    resumen: "Jugo natural elaborado con arándanos frescos.",
    descripcion:
      "Bebida rica en antioxidantes y de sabor ligeramente ácido, preparada al instante.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 vaso" },
      { etiqueta: "Preparación", valor: "Al instante" },
      { etiqueta: "Origen", valor: "Arándanos frescos" },
      { etiqueta: "Se sirve", valor: "Frío" },
      { etiqueta: "Beneficio", valor: "Rico en antioxidantes" },
    ],
    ingredientes: ["Arándanos", "Agua", "Azúcar", "Hielo"],
    preparacion: [
      "Licuar los arándanos con agua.",
      "Endulzar al gusto.",
      "Agregar hielo.",
      "Servir.",
    ],
  },

  {
    id: "platano-leche",
    categoria: "Jugos",
    nombre: "Plátano con Leche",
    precio: "S/ 12",
    imagen: "images/platano-leche.jpg",
    resumen: "Batido cremoso de plátano con leche fresca.",
    descripcion:
      "Delicioso batido preparado con plátanos maduros y leche fresca, ideal para cualquier momento del día.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 vaso" },
      { etiqueta: "Base", valor: "Leche" },
      { etiqueta: "Preparación", valor: "Al instante" },
      { etiqueta: "Se sirve", valor: "Frío" },
      { etiqueta: "Beneficio", valor: "Energético" },
    ],
    ingredientes: ["Plátano", "Leche", "Azúcar", "Hielo"],
    preparacion: [
      "Licuar el plátano con la leche.",
      "Agregar azúcar.",
      "Añadir hielo.",
      "Servir.",
    ],
  },

  {
    id: "fresa-leche",
    categoria: "Jugos",
    nombre: "Fresa con Leche",
    precio: "S/ 12",
    imagen: "images/fresa-leche.jpeg",
    resumen: "Batido de fresas frescas con leche.",
    descripcion:
      "Preparado con fresas naturales y leche fresca, de textura cremosa y sabor dulce.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 vaso" },
      { etiqueta: "Base", valor: "Leche" },
      { etiqueta: "Preparación", valor: "Al instante" },
      { etiqueta: "Se sirve", valor: "Frío" },
      { etiqueta: "Beneficio", valor: "Rico en vitamina C" },
    ],
    ingredientes: ["Fresas", "Leche", "Azúcar", "Hielo"],
    preparacion: [
      "Licuar las fresas con leche.",
      "Agregar azúcar.",
      "Añadir hielo.",
      "Servir.",
    ],
  },

  {
    id: "jugo-naranja",
    categoria: "Jugos",
    nombre: "Jugo de Naranja",
    precio: "S/ 12",
    imagen: "images/jugo-naranja.jpg",
    resumen: "Jugo natural de naranja recién exprimida.",
    descripcion:
      "Bebida preparada con naranjas frescas, rica en vitamina C y perfecta para acompañar cualquier comida.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 vaso" },
      { etiqueta: "Preparación", valor: "Al instante" },
      { etiqueta: "Origen", valor: "Naranja fresca" },
      { etiqueta: "Se sirve", valor: "Frío" },
      { etiqueta: "Beneficio", valor: "Rico en vitamina C" },
    ],
    ingredientes: ["Naranjas frescas", "Azúcar (opcional)", "Hielo"],
    preparacion: [
      "Exprimir las naranjas.",
      "Agregar azúcar si se desea.",
      "Añadir hielo.",
      "Servir inmediatamente.",
    ],
  },

  // =====================
  // Sanduiches
  // =====================

  {
    id: "sandwich-chicharron",
    categoria: "Sanduiches",
    nombre: "Sándwich de Chicharrón de Cerdo",
    precio: "S/ 10",
    imagen: "images/sandwich-chicharron.jpg",
    resumen:
      "Pan francés relleno de chicharrón de cerdo, camote y salsa criolla.",
    descripcion:
      "Crujiente chicharrón de cerdo servido en pan francés recién horneado, acompañado de camote frito y salsa criolla. Un clásico desayuno peruano lleno de sabor.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 unidad" },
      { etiqueta: "Tiempo de preparación", valor: "15 minutos" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Acompañado de", valor: "Camote y salsa criolla" },
    ],
    ingredientes: [
      "Pan francés",
      "Chicharrón de cerdo",
      "Camote frito",
      "Salsa criolla",
    ],
    preparacion: [
      "Abrir el pan francés.",
      "Agregar el chicharrón caliente.",
      "Incorporar el camote y la salsa criolla.",
      "Servir inmediatamente.",
    ],
  },

  {
    id: "sandwich-pollo",
    categoria: "Sanduiches",
    nombre: "Sándwich de Pollo",
    precio: "S/ 6",
    imagen: "images/sandwich-pollo.jpg",
    resumen: "Pan francés con pollo deshilachado y mayonesa casera.",
    descripcion:
      "Delicioso sándwich preparado con pollo cocido y deshilachado, mezclado con mayonesa y acompañado de lechuga fresca.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 unidad" },
      { etiqueta: "Tiempo de preparación", valor: "10 minutos" },
      { etiqueta: "Origen", valor: "Receta casera" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Se sirve", valor: "Recién preparado" },
    ],
    ingredientes: ["Pan francés", "Pollo deshilachado", "Mayonesa", "Lechuga"],
    preparacion: [
      "Abrir el pan.",
      "Agregar el pollo con mayonesa.",
      "Añadir lechuga.",
      "Servir.",
    ],
  },

  {
    id: "sandwich-chorizo",
    categoria: "Sanduiches",
    nombre: "Sándwich de Chorizo",
    precio: "S/ 6",
    imagen: "images/sandwich-chorizo.jpg",
    resumen: "Pan francés con chorizo artesanal a la plancha.",
    descripcion:
      "Preparado con chorizo artesanal dorado a la plancha, acompañado de salsa criolla.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 unidad" },
      { etiqueta: "Tiempo de preparación", valor: "12 minutos" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Nivel picante", valor: "Suave" },
      { etiqueta: "Se sirve", valor: "Caliente" },
    ],
    ingredientes: ["Pan francés", "Chorizo", "Salsa criolla"],
    preparacion: [
      "Freír el chorizo.",
      "Colocarlo dentro del pan.",
      "Agregar salsa criolla.",
      "Servir.",
    ],
  },

  {
    id: "sandwich-salchicha",
    categoria: "Sanduiches",
    nombre: "Sándwich de Salchicha",
    precio: "S/ 6",
    imagen: "images/sandwich-salchicha.jpg",
    resumen: "Pan francés con salchicha dorada y preparada al momento.",
    descripcion:
      "Delicioso sándwich elaborado con salchicha dorada a la plancha, servida en pan francés recién horneado. Es una opción práctica, sabrosa y perfecta para el desayuno o una merienda, acompañado de salsas al gusto.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 unidad" },
      { etiqueta: "Tiempo de preparación", valor: "8 minutos" },
      { etiqueta: "Origen", valor: "Receta tradicional" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Se sirve", valor: "Caliente" },
    ],
    ingredientes: [
      "Pan francés",
      "Salchicha",
      "Mantequilla",
      "Salsas al gusto (opcional)",
    ],
    preparacion: [
      "Calentar una sartén y dorar la salchicha hasta que esté bien cocida.",
      "Abrir el pan francés y untar ligeramente con mantequilla.",
      "Colocar la salchicha dentro del pan.",
      "Agregar salsas al gusto si el cliente lo desea.",
      "Servir inmediatamente mientras está caliente.",
    ],
  },
  {
    id: "sandwich-queso-suizo",
    categoria: "Sanduiches",
    nombre: "Sándwich de Queso Suizo",
    precio: "S/ 4",
    imagen: "images/sandwich-queso-suizo.jpg",
    resumen: "Pan francés con queso suizo fundido.",
    descripcion:
      "Preparado con queso suizo de excelente calidad, ligeramente fundido para resaltar su sabor y textura cremosa.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 unidad" },
      { etiqueta: "Tiempo de preparación", valor: "5 minutos" },
      { etiqueta: "Origen", valor: "Lácteos seleccionados" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Se sirve", valor: "Caliente" },
    ],
    ingredientes: ["Pan francés", "Queso suizo"],
    preparacion: [
      "Abrir el pan francés.",
      "Colocar las láminas de queso suizo.",
      "Calentar ligeramente hasta fundir.",
      "Servir caliente.",
    ],
  },

  {
    id: "sandwich-queso-mantecoso",
    categoria: "Sanduiches",
    nombre: "Sándwich de Queso Mantecoso",
    precio: "S/ 4",
    imagen: "images/sandwich-queso-mantecoso.jpg",
    resumen: "Pan francés con tradicional queso mantecoso cajamarquino.",
    descripcion:
      "Elaborado con queso mantecoso de Cajamarca, reconocido por su sabor suave y textura cremosa.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 unidad" },
      { etiqueta: "Tiempo de preparación", valor: "5 minutos" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Se sirve", valor: "Fresco" },
    ],
    ingredientes: ["Pan francés", "Queso mantecoso"],
    preparacion: [
      "Abrir el pan.",
      "Agregar el queso mantecoso.",
      "Cerrar el pan.",
      "Servir.",
    ],
  },

  {
    id: "sandwich-huevo",
    categoria: "Sanduiches",
    nombre: "Sándwich de Huevo",
    precio: "S/ 4",
    imagen: "images/sandwich-huevo.jpg",
    resumen: "Pan francés con huevo preparado al momento.",
    descripcion:
      "Un desayuno clásico preparado con huevo fresco cocinado al instante y servido en pan francés.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 unidad" },
      { etiqueta: "Tiempo de preparación", valor: "7 minutos" },
      { etiqueta: "Origen", valor: "Desayuno tradicional" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Se sirve", valor: "Caliente" },
    ],
    ingredientes: ["Pan francés", "Huevo", "Sal"],
    preparacion: [
      "Preparar el huevo a la plancha o revuelto.",
      "Colocarlo dentro del pan.",
      "Agregar una pizca de sal.",
      "Servir caliente.",
    ],
  },

  {
    id: "sandwich-mantequilla",
    categoria: "Sanduiches",
    nombre: "Sándwich de Mantequilla",
    precio: "S/ 4",
    imagen: "images/sandwich-mantequilla.jpg",
    resumen: "Pan francés untado con mantequilla fresca.",
    descripcion:
      "Una opción sencilla y deliciosa, ideal para acompañar café, leche o chocolate caliente.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 unidad" },
      { etiqueta: "Tiempo de preparación", valor: "2 minutos" },
      { etiqueta: "Origen", valor: "Desayuno tradicional" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Se sirve", valor: "Fresco" },
    ],
    ingredientes: ["Pan francés", "Mantequilla"],
    preparacion: [
      "Abrir el pan.",
      "Untar la mantequilla uniformemente.",
      "Cerrar el pan.",
      "Servir.",
    ],
  },

  {
    id: "sandwich-mermelada",
    categoria: "Sanduiches",
    nombre: "Sándwich de Mermelada",
    precio: "S/ 4",
    imagen: "images/sandwich-mermelada.jpg",
    resumen: "Pan francés con mermelada de fruta.",
    descripcion:
      "Pan recién horneado acompañado de una generosa porción de mermelada artesanal de frutas.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 unidad" },
      { etiqueta: "Tiempo de preparación", valor: "2 minutos" },
      { etiqueta: "Origen", valor: "Receta casera" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Se sirve", valor: "Fresco" },
    ],
    ingredientes: ["Pan francés", "Mermelada de fruta"],
    preparacion: [
      "Abrir el pan.",
      "Untar la mermelada.",
      "Cerrar el pan.",
      "Servir.",
    ],
  },

  // =====================
  // Adicionales
  // =====================

  {
    id: "huevo-frito",
    categoria: "Adicionales",
    nombre: "Huevo Frito",
    precio: "S/ 3",
    imagen: "images/huevo-frito.jpg",
    resumen:
      "Huevo frito preparado al momento, ideal como adicional para cualquier desayuno o plato.",
    descripcion:
      "Huevo fresco frito al instante hasta obtener una clara bien cocida y una yema suave o cocida, según la preferencia del cliente. Un complemento perfecto para sándwiches, caldos y platos típicos.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 unidad" },
      { etiqueta: "Tiempo de preparación", valor: "5 minutos" },
      { etiqueta: "Origen", valor: "Producto fresco" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Ideal para", valor: "Acompañar cualquier plato" },
    ],
    ingredientes: ["1 huevo fresco", "Aceite vegetal", "Sal al gusto"],
    preparacion: [
      "Calentar una sartén con un poco de aceite.",
      "Romper el huevo cuidadosamente sobre la sartén.",
      "Freír hasta alcanzar el punto de cocción deseado.",
      "Agregar sal al gusto.",
      "Servir inmediatamente.",
    ],
  },

  {
    id: "huevo-revuelto",
    categoria: "Adicionales",
    nombre: "Huevo Revuelto",
    precio: "S/ 6",
    imagen: "images/huevo-revuelto.jpg",
    resumen: "Huevos revueltos cremosos preparados al instante.",
    descripcion:
      "Huevos frescos batidos y cocinados lentamente hasta obtener una textura suave y cremosa. Una excelente opción para complementar desayunos y sándwiches.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "2 huevos" },
      { etiqueta: "Tiempo de preparación", valor: "5 minutos" },
      { etiqueta: "Origen", valor: "Producto fresco" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Ideal para", valor: "Desayunos y sándwiches" },
    ],
    ingredientes: ["2 huevos frescos", "Mantequilla", "Sal al gusto"],
    preparacion: [
      "Batir los huevos con una pizca de sal.",
      "Derretir la mantequilla en una sartén.",
      "Agregar los huevos y remover constantemente.",
      "Cocinar hasta obtener una textura cremosa.",
      "Servir caliente.",
    ],
  },
  // =====================
  // Entradas
  // =====================

  {
    id: "humita",
    categoria: "Entradas",
    nombre: "Humita",
    precio: "S/ 4",
    imagen: "images/humita.jpg",
    resumen: "Tradicional humita cajamarquina preparada con choclo fresco.",
    descripcion:
      "Deliciosa humita elaborada con choclo tierno molido, queso fresco y especias, envuelta en pancas de maíz y cocida al vapor. Un clásico de la gastronomía andina.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 unidad" },
      { etiqueta: "Tiempo de preparación", valor: "40 minutos" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Tipo", valor: "Entrada tradicional" },
      { etiqueta: "Temperatura", valor: "Caliente" },
    ],
    ingredientes: [
      "Choclo tierno",
      "Queso fresco",
      "Leche",
      "Mantequilla",
      "Sal",
      "Pancas de choclo",
    ],
    preparacion: [
      "Moler el choclo.",
      "Mezclar con queso, leche y mantequilla.",
      "Envolver en pancas.",
      "Cocinar al vapor hasta que esté firme.",
    ],
  },

  {
    id: "tamales",
    categoria: "Entradas",
    nombre: "Tamales",
    precio: "S/ 4",
    imagen: "images/tamales.jpg",
    resumen: "Tamales caseros preparados con maíz y relleno tradicional.",
    descripcion:
      "Tradicional tamal peruano elaborado con masa de maíz, relleno de carne de cerdo o pollo, aceituna y huevo, envuelto en hojas de plátano y cocido al vapor.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 unidad" },
      { etiqueta: "Tiempo de preparación", valor: "1 hora" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Tipo", valor: "Entrada" },
      { etiqueta: "Temperatura", valor: "Caliente" },
    ],
    ingredientes: [
      "Harina de maíz",
      "Carne de cerdo o pollo",
      "Ají panca",
      "Huevo",
      "Aceituna",
      "Hojas de plátano",
    ],
    preparacion: [
      "Preparar la masa de maíz.",
      "Agregar el relleno.",
      "Envolver en hojas de plátano.",
      "Cocinar al vapor hasta que esté listo.",
    ],
  },

  {
    id: "choclo-queso",
    categoria: "Entradas",
    nombre: "Choclo con Queso",
    precio: "S/ 5",
    imagen: "images/choclo-queso.jpg",
    resumen: "Choclo cajamarquino acompañado de queso fresco artesanal.",
    descripcion:
      "Tierno choclo cocido servido con queso fresco artesanal de Cajamarca, una combinación sencilla pero muy representativa de la gastronomía regional.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Tiempo de preparación", valor: "15 minutos" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Tipo", valor: "Entrada" },
      { etiqueta: "Temperatura", valor: "Caliente" },
    ],
    ingredientes: ["Choclo", "Queso fresco"],
    preparacion: ["Cocer el choclo.", "Servir acompañado de queso fresco."],
  },

  {
    id: "papa-huancaina",
    categoria: "Entradas",
    nombre: "Papa a la Huancaína",
    precio: "S/ 10",
    imagen: "images/papa-huancaina.jpg",
    resumen: "Papas sancochadas bañadas en cremosa salsa huancaína.",
    descripcion:
      "Tradicional entrada peruana preparada con papas sancochadas cubiertas con una deliciosa salsa de queso fresco, ají amarillo y leche. Decorada con huevo y aceitunas.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Tiempo de preparación", valor: "20 minutos" },
      { etiqueta: "Origen", valor: "Huancayo - Perú" },
      { etiqueta: "Tipo", valor: "Entrada" },
      { etiqueta: "Nivel picante", valor: "Suave" },
    ],
    ingredientes: [
      "Papa",
      "Queso fresco",
      "Ají amarillo",
      "Leche",
      "Galletas de soda",
      "Huevo",
      "Aceitunas",
    ],
    preparacion: [
      "Sancochar las papas.",
      "Preparar la salsa huancaína.",
      "Cubrir las papas con la salsa.",
      "Decorar con huevo y aceitunas.",
    ],
  },

  {
    id: "higados-cuy-mote",
    categoria: "Entradas",
    nombre: "Hígados de Cuy con Mote",
    precio: "S/ 10",
    imagen: "images/higados-cuy-mote.jpg",
    resumen: "Hígados de cuy salteados acompañados de mote.",
    descripcion:
      "Especialidad cajamarquina preparada con hígados de cuy cuidadosamente sazonados y salteados, acompañados de mote cocido y ají casero.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Tiempo de preparación", valor: "20 minutos" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Tipo", valor: "Entrada típica" },
      { etiqueta: "Acompañado de", valor: "Mote" },
    ],
    ingredientes: [
      "Hígados de cuy",
      "Mote",
      "Cebolla",
      "Ajo",
      "Comino",
      "Aceite",
      "Sal",
    ],
    preparacion: [
      "Limpiar los hígados.",
      "Sazonar con ajo y comino.",
      "Saltear hasta cocinar completamente.",
      "Servir con mote caliente.",
    ],
  },

  {
    id: "ensalada-fresca",
    categoria: "Entradas",
    nombre: "Ensalada Fresca",
    precio: "S/ 6",
    imagen: "images/ensalada-fresca.jpg",
    resumen: "Ensalada preparada con verduras frescas de temporada.",
    descripcion:
      "Combinación de lechuga, tomate, pepino, zanahoria y cebolla, aderezada con limón y aceite de oliva. Ideal como entrada o acompañamiento.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Tiempo de preparación", valor: "10 minutos" },
      { etiqueta: "Origen", valor: "Preparación casera" },
      { etiqueta: "Tipo", valor: "Entrada saludable" },
      { etiqueta: "Temperatura", valor: "Fría" },
    ],
    ingredientes: [
      "Lechuga",
      "Tomate",
      "Pepino",
      "Zanahoria",
      "Cebolla",
      "Limón",
      "Aceite de oliva",
      "Sal",
    ],
    preparacion: [
      "Lavar y desinfectar las verduras.",
      "Cortarlas en trozos.",
      "Mezclar todos los ingredientes.",
      "Aliñar con limón, aceite y sal.",
      "Servir inmediatamente.",
    ],
  },

  // =====================
  // Platos tipicos
  // =====================
  {
    id: "cuarto-cuy-frito",
    categoria: "Platos_Tipicos",
    nombre: "1/4 Cuy Frito",
    precio: "S/ 22",
    imagen: "images/cuarto-cuy-frito.jpg",
    resumen:
      "Un cuarto de cuy frito acompañado de papa dorada, mote y ensalada.",
    descripcion:
      "Porción de un cuarto de cuy cajamarquino, marinado con especias tradicionales y frito hasta obtener una piel dorada y crocante. Se acompaña con papas doradas, mote y ensalada fresca.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1/4 de cuy" },
      { etiqueta: "Nivel picante", valor: "Suave (ají aparte)" },
      { etiqueta: "Tiempo de preparación", valor: "45 minutos" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Acompañado de", valor: "Papa dorada, mote y ensalada" },
    ],
    ingredientes: [
      "1/4 de cuy",
      "Ajo",
      "Ají panca",
      "Comino",
      "Sal",
      "Papas",
      "Mote",
      "Ensalada",
    ],
    preparacion: [
      "Marinar el cuy con ajo, comino y ají panca.",
      "Freír hasta que quede dorado y crocante.",
      "Freír las papas.",
      "Servir con mote y ensalada.",
    ],
  },

  {
    id: "cuarto-cuy-estofado",
    categoria: "Platos_Tipicos",
    nombre: "1/4 Cuy Estofado",
    precio: "S/ 25",
    imagen: "images/cuarto-cuy-estofado.jpg",
    resumen: "Cuy cocido lentamente en un delicioso aderezo tradicional.",
    descripcion:
      "Un cuarto de cuy preparado en un sabroso estofado con ají panca, cebolla, tomate y especias. Se acompaña con arroz y papas sancochadas.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1/4 de cuy" },
      { etiqueta: "Nivel picante", valor: "Suave" },
      { etiqueta: "Tiempo de preparación", valor: "1 hora" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Acompañado de", valor: "Arroz y papas" },
    ],
    ingredientes: [
      "1/4 de cuy",
      "Cebolla",
      "Tomate",
      "Ají panca",
      "Ajo",
      "Arroz",
      "Papa",
    ],
    preparacion: [
      "Preparar el aderezo.",
      "Agregar el cuy.",
      "Cocinar lentamente hasta que esté tierno.",
      "Servir con arroz y papas.",
    ],
  },

  {
    id: "pato-cerveza",
    categoria: "Platos_Tipicos",
    nombre: "Pato a la Cerveza",
    precio: "S/ 25",
    imagen: "images/pato-cerveza.jpg",
    resumen: "Jugoso pato cocinado lentamente en cerveza negra y especias.",
    descripcion:
      "Tradicional pato preparado con cerveza negra, verduras y especias, logrando una carne suave y llena de sabor. Se acompaña con arroz y yuca.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 presa" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Tiempo de preparación", valor: "1 hora 30 minutos" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Acompañado de", valor: "Arroz y yuca" },
    ],
    ingredientes: [
      "Pato",
      "Cerveza negra",
      "Cebolla",
      "Ajo",
      "Ají panca",
      "Arroz",
      "Yuca",
    ],
    preparacion: [
      "Sellar el pato.",
      "Preparar el aderezo.",
      "Agregar cerveza.",
      "Cocinar hasta que la carne esté tierna.",
      "Servir con arroz y yuca.",
    ],
  },

  {
    id: "arroz-con-pato",
    categoria: "Platos_Tipicos",
    nombre: "Arroz con Pato",
    precio: "S/ 25",
    imagen: "images/arroz-con-pato.jpg",
    resumen: "Arroz verde acompañado de una jugosa presa de pato.",
    descripcion:
      "Plato tradicional preparado con arroz cocido en culantro y cerveza, acompañado de una presa de pato cocinada lentamente hasta quedar muy suave.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Tiempo de preparación", valor: "1 hora 30 minutos" },
      { etiqueta: "Origen", valor: "Costa norte del Perú" },
      { etiqueta: "Acompañado de", valor: "Salsa criolla" },
    ],
    ingredientes: [
      "Pato",
      "Arroz",
      "Culantro",
      "Cerveza",
      "Arvejas",
      "Ají amarillo",
    ],
    preparacion: [
      "Preparar el aderezo.",
      "Cocinar el pato.",
      "Preparar el arroz con culantro.",
      "Servir el pato sobre el arroz.",
    ],
  },

  {
    id: "cabrito",
    categoria: "Platos_Tipicos",
    nombre: "Cabrito",
    precio: "S/ 25",
    imagen: "images/cabrito.jpg",
    resumen: "Cabrito tierno guisado con chicha de jora y especias.",
    descripcion:
      "Tradicional cabrito preparado con chicha de jora, culantro y ajíes peruanos. Su cocción lenta permite obtener una carne muy suave y de excelente sabor. Se acompaña con arroz y frejoles.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Nivel picante", valor: "Suave" },
      { etiqueta: "Tiempo de preparación", valor: "2 horas" },
      { etiqueta: "Origen", valor: "Norte del Perú" },
      { etiqueta: "Acompañado de", valor: "Arroz y frejoles" },
    ],
    ingredientes: [
      "Carne de cabrito",
      "Chicha de jora",
      "Culantro",
      "Ají amarillo",
      "Cebolla",
      "Ajo",
      "Arroz",
      "Frejoles",
    ],
    preparacion: [
      "Marinar el cabrito.",
      "Preparar el aderezo.",
      "Agregar la chicha de jora.",
      "Cocinar lentamente hasta que la carne esté suave.",
      "Servir con arroz y frejoles.",
    ],
  },

  {
    id: "chicharron-cajamarquino",
    categoria: "Platos_Tipicos",
    nombre: "Chicharrón Con Mote ",
    precio: "S/ 25",
    imagen: "images/chicharron.jpg",
    resumen:
      "Trozos de cerdo dorados en su propia grasa, servidos con mote y cancha.",
    descripcion:
      "Trozos de panceta y costilla de cerdo cocidos lentamente en su propia grasa hasta quedar dorados y crocantes por fuera y tiernos por dentro. Es uno de los desayunos y almuerzos más queridos de Cajamarca, tradicionalmente servido bien caliente con mote, cancha serrana y una salsa criolla fresca.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "350 g de cerdo" },
      {
        etiqueta: "Nivel picante",
        valor: "Ninguno (salsa criolla aparte)",
      },
      { etiqueta: "Tiempo de preparación", valor: "1 hora 30 min" },
      { etiqueta: "Origen", valor: "Cocina campesina cajamarquina" },
      {
        etiqueta: "Acompañado de",
        valor: "Mote, cancha y salsa criolla",
      },
    ],
    ingredientes: [
      "1 kg de panceta y costilla de cerdo",
      "1 taza de agua",
      "Sal al gusto",
      "1 cebolla para la salsa criolla",
      "2 limones",
      "Mote pelado",
      "Cancha serrana",
    ],
    preparacion: [
      "Cortar el cerdo en trozos medianos y colocarlo en una olla con agua y sal.",
      "Cocinar a fuego medio hasta que el agua se consuma por completo.",
      "Dejar que el cerdo se dore en su propia grasa, moviendo ocasionalmente, hasta quedar crocante.",
      "Preparar la salsa criolla con cebolla en pluma, limón, sal y culantro picado.",
      "Servir el chicharrón caliente acompañado de mote, cancha y la salsa criolla.",
    ],
  },

  {
    id: "trucha-frita",
    categoria: "Platos_Tipicos",
    nombre: "Trucha Frita",
    precio: "S/ 22",
    imagen: "images/trucha-frita.jpg",
    resumen:
      "Trucha fresca frita acompañada de arroz, papas doradas y ensalada fresca.",
    descripcion:
      "Trucha fresca cuidadosamente seleccionada y marinada con ajo, limón y especias. Se fríe hasta lograr una piel dorada y crujiente, manteniendo la carne suave y jugosa. Se acompaña con arroz, papas doradas y ensalada fresca.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 trucha entera" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Tiempo de preparación", valor: "30 minutos" },
      { etiqueta: "Origen", valor: "Piscigranjas de Cajamarca" },
      { etiqueta: "Acompañado de", valor: "Arroz, papas y ensalada" },
    ],
    ingredientes: [
      "1 trucha fresca",
      "Ajo",
      "Limón",
      "Sal",
      "Pimienta",
      "Harina",
      "Aceite",
      "Arroz",
      "Papas",
      "Ensalada",
    ],
    preparacion: [
      "Limpiar y sazonar la trucha con ajo, limón, sal y pimienta.",
      "Reposar durante 15 minutos.",
      "Enharinar ligeramente.",
      "Freír hasta que ambos lados estén dorados.",
      "Servir con arroz, papas doradas y ensalada fresca.",
    ],
  },

  {
    id: "cecina-shilpida",
    categoria: "Platos_Tipicos",
    nombre: "Cecina Shilpida",
    precio: "S/ 26",
    imagen: "images/cecina-shilpida.jpg",
    resumen:
      "Tradicional cecina cajamarquina acompañada de yuca, mote y salsa criolla.",
    descripcion:
      "La cecina shilpida es carne de cerdo curada, salada y ligeramente ahumada, preparada siguiendo la tradición cajamarquina. Se sirve frita hasta quedar dorada, acompañada de yuca sancochada, mote y una fresca salsa criolla.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "300 g de cecina" },
      { etiqueta: "Nivel picante", valor: "Suave (ají aparte)" },
      { etiqueta: "Tiempo de preparación", valor: "25 minutos" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Acompañado de", valor: "Yuca, mote y salsa criolla" },
    ],
    ingredientes: [
      "300 g de cecina shilpida",
      "Yuca",
      "Mote",
      "Cebolla",
      "Limón",
      "Culantro",
      "Aceite",
    ],
    preparacion: [
      "Freír la cecina hasta que quede dorada.",
      "Sancochar la yuca hasta que esté suave.",
      "Calentar el mote.",
      "Preparar una salsa criolla con cebolla, limón y culantro.",
      "Servir la cecina acompañada de yuca, mote y salsa criolla.",
    ],
  },
  // =====================
  // Platos A la carta
  // =====================

  {
    id: "milanesa-pollo",
    categoria: "Platos_a_la_carta",
    nombre: "Milanesa de Pollo",
    precio: "S/ 26",
    imagen: "images/milanesa-pollo.jpg",
    resumen:
      "Pechuga de pollo empanizada y dorada, acompañada de arroz, papas fritas y ensalada.",
    descripcion:
      "Jugosa pechuga de pollo empanizada con pan rallado y frita hasta obtener un acabado dorado y crujiente. Se sirve con arroz blanco, papas fritas y ensalada fresca.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 pechuga" },
      { etiqueta: "Tiempo de preparación", valor: "25 minutos" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Origen", valor: "Cocina peruana" },
      { etiqueta: "Acompañado de", valor: "Arroz, papas y ensalada" },
    ],
    ingredientes: [
      "Pechuga de pollo",
      "Pan rallado",
      "Huevo",
      "Harina",
      "Aceite",
      "Arroz",
      "Papas",
      "Ensalada",
    ],
    preparacion: [
      "Sazonar la pechuga.",
      "Empanizar con harina, huevo y pan rallado.",
      "Freír hasta dorar.",
      "Servir con arroz, papas fritas y ensalada.",
    ],
  },

  {
    id: "milanesa-pobre",
    categoria: "Platos_a_la_carta",
    nombre: "Milanesa a lo Pobre",
    precio: "S/28",
    imagen: "images/milanesa-pobre.jpg",
    resumen:
      "Milanesa de pollo con huevo frito, plátano, arroz y papas fritas.",
    descripcion:
      "Una deliciosa milanesa de pollo acompañada con huevo frito, plátano maduro frito, arroz blanco y papas fritas.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Tiempo de preparación", valor: "30 minutos" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Especialidad", valor: "A lo pobre" },
    ],
    ingredientes: [
      "Milanesa de pollo",
      "Huevo",
      "Plátano",
      "Arroz",
      "Papas fritas",
    ],
    preparacion: [
      "Preparar la milanesa.",
      "Freír el huevo y el plátano.",
      "Servir con arroz y papas.",
    ],
  },

  {
    id: "bistec-simple",
    categoria: "Platos_a_la_carta",
    nombre: "Bistec Simple",
    precio: "S/ 25",
    imagen: "images/bistec-simple.jpg",
    resumen: "Jugoso bistec acompañado de arroz, papas fritas y ensalada.",
    descripcion:
      "Bistec de res preparado a la plancha y acompañado de arroz blanco, papas fritas y ensalada fresca.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "250 g" },
      { etiqueta: "Tiempo de preparación", valor: "20 minutos" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Acompañado de", valor: "Arroz y papas" },
    ],
    ingredientes: ["Carne de res", "Arroz", "Papas", "Ensalada"],
    preparacion: [
      "Sazonar el bistec.",
      "Cocinar a la plancha.",
      "Servir con arroz, papas y ensalada.",
    ],
  },

  {
    id: "bistec-pobre",
    categoria: "Platos_a_la_carta",
    nombre: "Bistec a lo Pobre",
    precio: "S/ 27",
    imagen: "images/bistec-pobre.jpg",
    resumen: "Bistec acompañado de huevo, plátano, arroz y papas fritas.",
    descripcion:
      "Clásico bistec de res servido con huevo frito, plátano maduro, arroz blanco y papas fritas.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "300 g" },
      { etiqueta: "Tiempo de preparación", valor: "30 minutos" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Especialidad", valor: "A lo pobre" },
    ],
    ingredientes: ["Carne de res", "Huevo", "Plátano", "Arroz", "Papas"],
    preparacion: [
      "Preparar el bistec.",
      "Freír huevo y plátano.",
      "Servir con arroz y papas.",
    ],
  },

  {
    id: "lomo-saltado",
    categoria: "Platos_a_la_carta",
    nombre: "Lomo Saltado",
    precio: "S/ 25",
    imagen: "images/lomo-saltado.jpg",
    resumen:
      "Tradicional lomo saltado con carne, cebolla, tomate y papas fritas.",
    descripcion:
      "Uno de los platos más representativos del Perú, preparado con carne salteada al wok, cebolla, tomate, sillao y acompañado de arroz y papas fritas.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Tiempo de preparación", valor: "20 minutos" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Nivel picante", valor: "Suave" },
      { etiqueta: "Acompañado de", valor: "Arroz y papas fritas" },
    ],
    ingredientes: [
      "Lomo de res",
      "Cebolla",
      "Tomate",
      "Sillao",
      "Vinagre",
      "Papas fritas",
      "Arroz",
    ],
    preparacion: [
      "Saltear la carne.",
      "Agregar cebolla, tomate y sillao.",
      "Incorporar las papas fritas.",
      "Servir con arroz.",
    ],
  },

  {
    id: "chuleta-chancho",
    categoria: "Platos_a_la_carta",
    nombre: "Chuleta de Chancho",
    precio: "S/ 25",
    imagen: "images/chuleta-chancho.jpg",
    resumen:
      "Chuleta de cerdo dorada acompañada de arroz, papas fritas y ensalada.",
    descripcion:
      "Chuleta de cerdo sazonada con especias y cocinada hasta quedar jugosa, acompañada de arroz blanco, papas fritas y ensalada fresca.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 chuleta" },
      { etiqueta: "Tiempo de preparación", valor: "25 minutos" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Acompañado de", valor: "Arroz, papas y ensalada" },
    ],
    ingredientes: [
      "Chuleta de cerdo",
      "Ajo",
      "Comino",
      "Arroz",
      "Papas",
      "Ensalada",
    ],
    preparacion: [
      "Sazonar la chuleta.",
      "Cocinar a la plancha.",
      "Servir con arroz, papas y ensalada.",
    ],
  },

  {
    id: "tallarin-saltado-pollo",
    categoria: "Platos_a_la_carta",
    nombre: "Tallarín Saltado de Pollo",
    precio: "S/ 26",
    imagen: "images/tallarin-saltado-pollo.jpg",
    resumen:
      "Tallarines salteados al wok con jugosos trozos de pollo y verduras frescas.",
    descripcion:
      "Delicioso plato preparado con tallarines salteados al estilo oriental junto con pollo, cebolla, tomate y sillao, logrando un sabor intenso y característico de la cocina peruana.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Tiempo de preparación", valor: "20 minutos" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Nivel picante", valor: "Suave" },
      { etiqueta: "Preparación", valor: "Salteado al wok" },
    ],
    ingredientes: [
      "Tallarines",
      "Pechuga de pollo",
      "Cebolla",
      "Tomate",
      "Sillao",
      "Vinagre",
      "Aceite",
      "Culantro",
    ],
    preparacion: [
      "Cocinar los tallarines.",
      "Saltear el pollo con cebolla y tomate.",
      "Agregar sillao y vinagre.",
      "Incorporar los tallarines.",
      "Servir caliente.",
    ],
  },

  {
    id: "tallarin-saltado-carne",
    categoria: "Platos_a_la_carta",
    nombre: "Tallarín Saltado de Carne",
    precio: "S/ 28",
    imagen: "images/tallarin-saltado-carne.jpg",
    resumen: "Tallarines salteados con jugosa carne de res y verduras frescas.",
    descripcion:
      "Plato preparado con finos cortes de carne de res salteados al wok junto con tallarines, cebolla, tomate y sillao, conservando todo su sabor y jugosidad.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Tiempo de preparación", valor: "20 minutos" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Nivel picante", valor: "Suave" },
      { etiqueta: "Preparación", valor: "Salteado al wok" },
    ],
    ingredientes: [
      "Carne de res",
      "Tallarines",
      "Cebolla",
      "Tomate",
      "Sillao",
      "Vinagre",
      "Aceite",
    ],
    preparacion: [
      "Cocinar los tallarines.",
      "Saltear la carne.",
      "Agregar verduras y sillao.",
      "Incorporar los tallarines.",
      "Servir inmediatamente.",
    ],
  },

  {
    id: "arroz-cubana",
    categoria: "Platos_a_la_carta",
    nombre: "Arroz a la Cubana",
    precio: "S/ 16",
    imagen: "images/arroz-cubana.jpg",
    resumen:
      "Arroz blanco acompañado de huevo frito, plátano maduro y papas fritas.",
    descripcion:
      "Clásico plato casero preparado con arroz blanco, huevo frito, plátano maduro frito y papas fritas, ideal para cualquier momento del día.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Tiempo de preparación", valor: "15 minutos" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Ideal para", valor: "Almuerzo o cena" },
    ],
    ingredientes: [
      "Arroz blanco",
      "Huevo",
      "Plátano maduro",
      "Papas",
      "Aceite",
      "Sal",
    ],
    preparacion: [
      "Preparar el arroz.",
      "Freír las papas.",
      "Freír el huevo y el plátano.",
      "Servir todo junto.",
    ],
  },

  {
    id: "chaufa-pollo",
    categoria: "Platos_a_la_carta",
    nombre: "Chaufa de Pollo",
    precio: "S/ 20",
    imagen: "images/chaufa-pollo.jpg",
    resumen: "Arroz chaufa preparado con pollo, huevo y verduras salteadas.",
    descripcion:
      "Tradicional arroz chaufa elaborado al wok con trozos de pollo, huevo, cebolla china, sillao y verduras, conservando el auténtico sabor de la cocina chifa peruana.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Tiempo de preparación", valor: "20 minutos" },
      { etiqueta: "Origen", valor: "Chifa Peruano" },
      { etiqueta: "Nivel picante", valor: "Ninguno" },
      { etiqueta: "Preparación", valor: "Salteado al wok" },
    ],
    ingredientes: [
      "Arroz",
      "Pollo",
      "Huevo",
      "Cebolla china",
      "Sillao",
      "Aceite",
      "Kion",
    ],
    preparacion: [
      "Saltear el pollo.",
      "Agregar el huevo.",
      "Incorporar el arroz.",
      "Añadir sillao y cebolla china.",
      "Servir caliente.",
    ],
  },

  {
    id: "chancho-caja-china",
    categoria: "Platos_a_la_carta",
    nombre: "Chancho a la Caja China",
    precio: "S/ 35",
    imagen: "images/chancho-caja-china.jpg",
    resumen:
      "Crujiente chancho cocinado en caja china. Disponible solo sábados y domingos.",
    descripcion:
      "Exquisita carne de cerdo preparada lentamente en caja china, logrando una piel crocante y una carne muy jugosa. Se sirve con camote, salsa criolla y papas doradas. Disponible únicamente los sábados y domingos.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Disponibilidad", valor: "Sábados y Domingos" },
      { etiqueta: "Tiempo de cocción", valor: "3 horas" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Acompañado de", valor: "Camote, papas y salsa criolla" },
    ],
    ingredientes: [
      "Carne de cerdo",
      "Ajo",
      "Comino",
      "Sal",
      "Camote",
      "Papa",
      "Cebolla",
      "Limón",
    ],
    preparacion: [
      "Marinar el cerdo durante varias horas.",
      "Cocinar lentamente en caja china.",
      "Dorarlo hasta obtener piel crocante.",
      "Servir con camote, papas y salsa criolla.",
    ],
  },

  // =====================
  // Ceviches
  // =====================

  {
    id: "ceviche-tollo",
    categoria: "Ceviches",
    nombre: "Ceviche de Tollo",
    precio: "S/ 27",
    imagen: "images/ceviche-tollo.jpg",
    resumen:
      "Tradicional ceviche preparado con tollo fresco, marinado en limón y acompañado de camote, choclo y cancha.",
    descripcion:
      "Delicioso ceviche elaborado con tollo fresco cuidadosamente seleccionado, marinado en jugo de limón recién exprimido y sazonado con ají, cebolla y culantro. Se acompaña con camote, choclo y cancha serrana, ofreciendo un equilibrio perfecto entre frescura y sabor.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Tiempo de preparación", valor: "20 minutos" },
      { etiqueta: "Nivel picante", valor: "Moderado" },
      { etiqueta: "Origen", valor: "Costa peruana" },
      { etiqueta: "Acompañado de", valor: "Camote, choclo y cancha" },
    ],
    ingredientes: [
      "Tollo fresco",
      "Limón",
      "Cebolla roja",
      "Ají limo",
      "Culantro",
      "Sal",
      "Camote",
      "Choclo",
      "Cancha serrana",
    ],
    preparacion: [
      "Cortar el tollo en cubos.",
      "Marinar con jugo de limón.",
      "Agregar cebolla, ají, culantro y sal.",
      "Reposar unos minutos.",
      "Servir acompañado de camote, choclo y cancha.",
    ],
  },

  {
    id: "ceviche-trucha",
    categoria: "Ceviches",
    nombre: "Ceviche de Trucha",
    precio: "S/ 26",
    imagen: "images/ceviche-trucha.jpg",
    resumen: "Trucha fresca marinada en limón con cebolla, culantro y ají.",
    descripcion:
      "Exquisito ceviche preparado con trucha fresca de piscigranja, marinada en limón y condimentada con ingredientes frescos que resaltan su sabor natural.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Tiempo de preparación", valor: "20 minutos" },
      { etiqueta: "Nivel picante", valor: "Moderado" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Acompañado de", valor: "Camote, choclo y cancha" },
    ],
    ingredientes: [
      "Trucha fresca",
      "Limón",
      "Cebolla roja",
      "Ají limo",
      "Culantro",
      "Sal",
      "Camote",
      "Choclo",
      "Cancha",
    ],
    preparacion: [
      "Cortar la trucha en cubos.",
      "Marinar con limón.",
      "Agregar cebolla, ají, culantro y sal.",
      "Mezclar cuidadosamente.",
      "Servir con camote, choclo y cancha.",
    ],
  },

  {
    id: "leche-tigre",
    categoria: "Ceviches",
    nombre: "Leche de Tigre",
    precio: "S/ 16",
    imagen: "images/leche-tigre.jpg",
    resumen: "Concentrado del ceviche servido con pescado, mariscos y choclo.",
    descripcion:
      "Refrescante leche de tigre preparada con jugo de limón, pescado fresco, ají, culantro y el tradicional caldo del ceviche. Reconocida por su intenso sabor y como uno de los aperitivos más populares del Perú.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 copa" },
      { etiqueta: "Tiempo de preparación", valor: "15 minutos" },
      { etiqueta: "Nivel picante", valor: "Al gusto" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Acompañado de", valor: "Choclo y cancha" },
    ],
    ingredientes: [
      "Jugo de limón",
      "Pescado fresco",
      "Caldo de pescado",
      "Ají limo",
      "Cebolla",
      "Culantro",
      "Choclo",
      "Cancha",
    ],
    preparacion: [
      "Preparar el concentrado con limón y caldo.",
      "Agregar pescado en cubos.",
      "Incorporar cebolla, ají y culantro.",
      "Servir frío con choclo y cancha.",
    ],
  },

  {
    id: "frito-con-ceviche",
    categoria: "Ceviches",
    nombre: "Frito con Ceviche",
    precio: "S/ 28",
    imagen: "images/frito-con-ceviche.jpg",
    resumen: "Combinación de pescado frito con una porción de ceviche fresco.",
    descripcion:
      "Una de las combinaciones favoritas de la gastronomía peruana. Incluye un filete de pescado frito, acompañado de una porción de ceviche fresco, camote, choclo y cancha serrana.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Tiempo de preparación", valor: "30 minutos" },
      { etiqueta: "Nivel picante", valor: "Moderado" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Acompañado de", valor: "Camote, choclo y cancha" },
    ],
    ingredientes: [
      "Filete de pescado",
      "Pescado para ceviche",
      "Limón",
      "Cebolla",
      "Ají limo",
      "Harina",
      "Aceite",
      "Camote",
      "Choclo",
      "Cancha",
    ],
    preparacion: [
      "Preparar el ceviche con pescado fresco.",
      "Empanizar ligeramente el filete.",
      "Freír hasta dorar.",
      "Servir el pescado junto al ceviche.",
      "Acompañar con camote, choclo y cancha.",
    ],
  },

  // =====================
  // Bebidas calientes
  // =====================
  {
    id: "cafe-pasado",
    categoria: "Bebidas_Calientes",
    nombre: "Café Pasado",
    precio: "S/ 5",
    imagen: "images/cafe-pasado.jpg",
    resumen:
      "Aromático café cajamarquino preparado mediante el tradicional método de filtrado.",
    descripcion:
      "Nuestro café pasado se elabora con granos de café seleccionados de Cajamarca, tostados y molidos cuidadosamente para ofrecer un sabor intenso, aroma agradable y una experiencia auténtica en cada taza.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 taza (250 ml)" },
      { etiqueta: "Temperatura", valor: "Caliente" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Preparación", valor: "Filtrado tradicional" },
      { etiqueta: "Ideal para", valor: "Desayunos y tardes" },
    ],
    ingredientes: ["Café molido", "Agua caliente"],
    preparacion: [
      "Calentar el agua.",
      "Colocar el café en el filtro.",
      "Verter lentamente el agua caliente.",
      "Servir inmediatamente.",
    ],
  },

  {
    id: "cafe-leche",
    categoria: "Bebidas_Calientes",
    nombre: "Café con Leche",
    precio: "S/ 6",
    imagen: "images/cafe-leche.jpg",
    resumen: "Café pasado mezclado con leche fresca caliente.",
    descripcion:
      "Deliciosa combinación de café cajamarquino recién preparado con leche fresca, logrando una bebida cremosa y de sabor equilibrado.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 taza (300 ml)" },
      { etiqueta: "Temperatura", valor: "Caliente" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Preparación", valor: "Al instante" },
      { etiqueta: "Ideal para", valor: "Desayunos" },
    ],
    ingredientes: ["Café pasado", "Leche fresca", "Azúcar (opcional)"],
    preparacion: [
      "Preparar el café pasado.",
      "Calentar la leche.",
      "Mezclar ambas bebidas.",
      "Servir caliente.",
    ],
  },

  {
    id: "leche-vaca",
    categoria: "Bebidas_Calientes",
    nombre: "Leche de Vaca",
    precio: "S/ 5",
    imagen: "images/leche-vaca.jpg",
    resumen: "Leche fresca de vaca servida caliente.",
    descripcion:
      "Leche fresca proveniente de productores locales de Cajamarca, calentada al momento para conservar su sabor y propiedades nutricionales.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 taza (300 ml)" },
      { etiqueta: "Temperatura", valor: "Caliente" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Preparación", valor: "Al instante" },
      { etiqueta: "Ideal para", valor: "Toda la familia" },
    ],
    ingredientes: ["Leche fresca de vaca"],
    preparacion: ["Calentar la leche.", "Servir caliente."],
  },

  {
    id: "filtrante",
    categoria: "Bebidas_Calientes",
    nombre: "Filtrante(Aniz, Manzanilla u otras hierbas)",
    precio: "S/ 5",
    imagen: "images/filtrante.jpg",
    resumen: "Infusión caliente de anís, manzanilla u otras hierbas naturales.",
    descripcion:
      "Bebida preparada con hierbas aromáticas naturales como manzanilla, anís o mezclas tradicionales, ideal para relajarse y favorecer la digestión.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 taza" },
      { etiqueta: "Temperatura", valor: "Caliente" },
      { etiqueta: "Variedades", valor: "Anís, Manzanilla y más" },
      { etiqueta: "Preparación", valor: "Infusión" },
      { etiqueta: "Ideal para", valor: "Después de las comidas" },
    ],
    ingredientes: ["Hierbas filtrantes", "Agua caliente"],
    preparacion: [
      "Hervir agua.",
      "Agregar el filtrante.",
      "Reposar de 3 a 5 minutos.",
      "Servir caliente.",
    ],
  },

  {
    id: "mate-coca",
    categoria: "Bebidas_Calientes",
    nombre: "Mate de Coca",
    precio: "S/ 5",
    imagen: "images/mate-coca.jpg",
    resumen: "Infusión tradicional preparada con hojas naturales de coca.",
    descripcion:
      "Bebida andina muy apreciada por sus propiedades digestivas y energizantes, preparada con hojas de coca seleccionadas.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 taza" },
      { etiqueta: "Temperatura", valor: "Caliente" },
      { etiqueta: "Origen", valor: "Andes peruanos" },
      { etiqueta: "Preparación", valor: "Infusión" },
      { etiqueta: "Ideal para", valor: "Frío y altura" },
    ],
    ingredientes: ["Hojas de coca", "Agua caliente"],
    preparacion: [
      "Hervir agua.",
      "Agregar las hojas de coca.",
      "Reposar unos minutos.",
      "Servir caliente.",
    ],
  },

  {
    id: "hierba-luisa",
    categoria: "Bebidas_Calientes",
    nombre: "Hierba Luisa",
    precio: "S/ 5",
    imagen: "images/hierba-luisa.jpg",
    resumen: "Infusión aromática de hierba luisa.",
    descripcion:
      "Bebida caliente elaborada con hojas frescas de hierba luisa, reconocida por su agradable aroma y propiedades relajantes.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 taza" },
      { etiqueta: "Temperatura", valor: "Caliente" },
      { etiqueta: "Preparación", valor: "Infusión" },
      { etiqueta: "Origen", valor: "Hierbas naturales" },
      { etiqueta: "Ideal para", valor: "Relajación" },
    ],
    ingredientes: ["Hierba luisa", "Agua caliente"],
    preparacion: [
      "Hervir agua.",
      "Agregar las hojas.",
      "Reposar 5 minutos.",
      "Servir.",
    ],
  },

  {
    id: "cedron",
    categoria: "Bebidas_Calientes",
    nombre: "Cedrón",
    precio: "S/ 5",
    imagen: "images/cedron.jpg",
    resumen: "Infusión natural de cedrón.",
    descripcion:
      "Tradicional bebida preparada con hojas de cedrón, conocida por su agradable aroma y sus propiedades digestivas.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 taza" },
      { etiqueta: "Temperatura", valor: "Caliente" },
      { etiqueta: "Preparación", valor: "Infusión" },
      { etiqueta: "Origen", valor: "Hierbas naturales" },
      { etiqueta: "Ideal para", valor: "Digestión" },
    ],
    ingredientes: ["Hojas de cedrón", "Agua caliente"],
    preparacion: [
      "Hervir agua.",
      "Agregar el cedrón.",
      "Reposar unos minutos.",
      "Servir caliente.",
    ],
  },

  {
    id: "romero",
    categoria: "Bebidas_Calientes",
    nombre: "Romero",
    precio: "S/ 5",
    imagen: "images/romero.jpg",
    resumen: "Infusión caliente de romero natural.",
    descripcion:
      "Infusión preparada con romero fresco, apreciada por su intenso aroma y propiedades naturales.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 taza" },
      { etiqueta: "Temperatura", valor: "Caliente" },
      { etiqueta: "Preparación", valor: "Infusión" },
      { etiqueta: "Origen", valor: "Hierbas naturales" },
      { etiqueta: "Ideal para", valor: "Bienestar general" },
    ],
    ingredientes: ["Romero fresco", "Agua caliente"],
    preparacion: [
      "Hervir agua.",
      "Agregar el romero.",
      "Reposar 5 minutos.",
      "Servir.",
    ],
  },

  {
    id: "muna",
    categoria: "Bebidas_Calientes",
    nombre: "Muña",
    precio: "S/ 5",
    imagen: "images/muna.jpg",
    resumen: "Tradicional infusión andina de muña.",
    descripcion:
      "La muña es una planta andina muy utilizada por sus propiedades digestivas y su agradable aroma. Se sirve caliente y recién preparada.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 taza" },
      { etiqueta: "Temperatura", valor: "Caliente" },
      { etiqueta: "Origen", valor: "Andes peruanos" },
      { etiqueta: "Preparación", valor: "Infusión" },
      { etiqueta: "Ideal para", valor: "Digestión y frío" },
    ],
    ingredientes: ["Hojas de muña", "Agua caliente"],
    preparacion: [
      "Hervir agua.",
      "Agregar las hojas de muña.",
      "Reposar durante 5 minutos.",
      "Servir caliente.",
    ],
  },
  // =====================
  // Tragos
  // =====================

  {
    id: "pisco-sour",
    categoria: "Tragos",
    nombre: "Pisco Sour (Copa)",
    precio: "S/ 15",
    imagen: "images/pisco-sour.jpg",
    resumen:
      "El cóctel bandera del Perú, preparado con pisco, limón y clara de huevo.",
    descripcion:
      "Tradicional Pisco Sour elaborado con pisco peruano, jugo de limón recién exprimido, jarabe de goma, clara de huevo y unas gotas de amargo de angostura. Una bebida equilibrada, refrescante y de sabor inconfundible.",
    caracteristicas: [
      { etiqueta: "Presentación", valor: "Copa" },
      { etiqueta: "Contenido", valor: "250 ml" },
      { etiqueta: "Alcohol", valor: "Sí" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Preparación", valor: "Al instante" },
    ],
    ingredientes: [
      "Pisco peruano",
      "Jugo de limón",
      "Jarabe de goma",
      "Clara de huevo",
      "Amargo de angostura",
      "Hielo",
    ],
    preparacion: [
      "Colocar todos los ingredientes en una coctelera.",
      "Agitar vigorosamente con hielo.",
      "Servir en una copa.",
      "Decorar con gotas de amargo de angostura.",
    ],
  },

  {
    id: "pisco-sour-maracuya",
    categoria: "Tragos",
    nombre: "Pisco Sour Maracuyá",
    precio: "S/ 15",
    imagen: "images/pisco-sour-maracuya.jpg",
    resumen: "Variante del clásico Pisco Sour con pulpa natural de maracuyá.",
    descripcion:
      "Una deliciosa combinación del tradicional Pisco Sour con el sabor tropical del maracuyá, logrando una bebida refrescante y ligeramente dulce.",
    caracteristicas: [
      { etiqueta: "Presentación", valor: "Copa" },
      { etiqueta: "Contenido", valor: "250 ml" },
      { etiqueta: "Alcohol", valor: "Sí" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Sabor", valor: "Dulce y tropical" },
    ],
    ingredientes: [
      "Pisco peruano",
      "Pulpa de maracuyá",
      "Jarabe de goma",
      "Clara de huevo",
      "Hielo",
    ],
    preparacion: [
      "Agregar todos los ingredientes en una coctelera.",
      "Agitar hasta obtener espuma.",
      "Servir en una copa fría.",
      "Decorar con pulpa de maracuyá.",
    ],
  },

  {
    id: "pina-colada",
    categoria: "Tragos",
    nombre: "Piña Colada",
    precio: "S/ 15",
    imagen: "images/pina-colada.jpg",
    resumen: "Cóctel tropical preparado con piña, crema de coco y ron.",
    descripcion:
      "Refrescante bebida tropical elaborada con jugo de piña, crema de coco, ron blanco y hielo, perfecta para disfrutar en cualquier ocasión.",
    caracteristicas: [
      { etiqueta: "Presentación", valor: "Copa" },
      { etiqueta: "Contenido", valor: "300 ml" },
      { etiqueta: "Alcohol", valor: "Sí" },
      { etiqueta: "Origen", valor: "Caribe" },
      { etiqueta: "Preparación", valor: "Licuada" },
    ],
    ingredientes: ["Ron blanco", "Jugo de piña", "Crema de coco", "Hielo"],
    preparacion: [
      "Licuar todos los ingredientes.",
      "Servir en una copa.",
      "Decorar con una rodaja de piña.",
    ],
  },

  {
    id: "sangria-1-litro",
    categoria: "Tragos",
    nombre: "Sangría (1 Litro)",
    precio: "S/ 30",
    imagen: "images/sangria.jpg",
    resumen:
      "Jarra de sangría preparada con vino tinto, frutas frescas y hielo.",
    descripcion:
      "Tradicional sangría elaborada con vino tinto, frutas de temporada, jugo natural y hielo. Ideal para compartir entre amigos y familiares.",
    caracteristicas: [
      { etiqueta: "Presentación", valor: "Jarra de 1 litro" },
      { etiqueta: "Alcohol", valor: "Sí" },
      { etiqueta: "Ideal para", valor: "Compartir" },
      { etiqueta: "Origen", valor: "España" },
      { etiqueta: "Rinde", valor: "4 a 5 vasos" },
    ],
    ingredientes: [
      "Vino tinto",
      "Naranja",
      "Manzana",
      "Durazno",
      "Jugo de naranja",
      "Azúcar",
      "Hielo",
    ],
    preparacion: [
      "Cortar las frutas.",
      "Mezclarlas con el vino y el jugo.",
      "Agregar azúcar y hielo.",
      "Refrigerar unos minutos antes de servir.",
    ],
  },

  {
    id: "machu-picchu",
    categoria: "Tragos",
    nombre: "Cóctel Machu Picchu",
    precio: "S/ 22",
    imagen: "images/machu-picchu.jpg",
    resumen:
      "Cóctel peruano de tres capas elaborado con pisco, granadina y crema de menta.",
    descripcion:
      "Uno de los cócteles más representativos del Perú, famoso por sus tres colores inspirados en la bandera del Imperio Inca. Se prepara cuidadosamente para mantener sus capas bien definidas.",
    caracteristicas: [
      { etiqueta: "Presentación", valor: "Copa" },
      { etiqueta: "Contenido", valor: "250 ml" },
      { etiqueta: "Alcohol", valor: "Sí" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Especialidad", valor: "Tres capas de color" },
    ],
    ingredientes: [
      "Pisco",
      "Jugo de naranja",
      "Granadina",
      "Crema de menta",
      "Hielo",
    ],
    preparacion: [
      "Preparar la base con pisco y jugo de naranja.",
      "Servir cuidadosamente en la copa.",
      "Agregar lentamente la granadina y luego la crema de menta para formar las capas.",
      "Servir inmediatamente.",
    ],
  },

  // =====================
  // Guardiciones
  // =====================

  {
    id: "arroz-blanco",
    categoria: "Guardiciones",
    nombre: "Arroz Blanco",
    precio: "S/ 5",
    imagen: "images/arroz-blanco.jpg",
    resumen: "Porción de arroz blanco recién preparado.",
    descripcion:
      "Arroz blanco cocido al punto perfecto, ideal para acompañar cualquier plato de nuestra carta.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Preparación", valor: "Al momento" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Ideal para", valor: "Acompañamientos" },
      { etiqueta: "Temperatura", valor: "Caliente" },
    ],
    ingredientes: ["Arroz", "Agua", "Sal", "Aceite"],
    preparacion: [
      "Lavar el arroz.",
      "Cocinar con agua y sal.",
      "Servir caliente.",
    ],
  },

  {
    id: "papas-fritas",
    categoria: "Guardiciones",
    nombre: "Papas Fritas",
    precio: "S/ 10",
    imagen: "images/papas-fritas.jpg",
    resumen: "Papas fritas crocantes y doradas.",
    descripcion:
      "Papas frescas cortadas en bastones y fritas hasta obtener una textura crocante por fuera y suave por dentro.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 plato" },
      { etiqueta: "Preparación", valor: "Al momento" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Ideal para", valor: "Acompañamientos" },
      { etiqueta: "Temperatura", valor: "Caliente" },
    ],
    ingredientes: ["Papa", "Aceite", "Sal"],
    preparacion: [
      "Cortar las papas.",
      "Freír hasta dorar.",
      "Escurrir el aceite.",
      "Servir calientes.",
    ],
  },

  // =====================
  // Dietas
  // =====================

  {
    id: "pollo-plancha",
    categoria: "Dietas",
    nombre: "Pollo a la Plancha",
    precio: "S/ 25",
    imagen: "images/pollo-plancha.jpg",
    resumen: "Pechuga de pollo a la plancha acompañada de ensalada fresca.",
    descripcion:
      "Pechuga de pollo preparada a la plancha con una ligera sazón, ideal para quienes buscan una alimentación saludable.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 pechuga" },
      { etiqueta: "Tiempo de preparación", valor: "20 minutos" },
      { etiqueta: "Tipo", valor: "Dieta saludable" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Acompañado de", valor: "Ensalada fresca" },
    ],
    ingredientes: [
      "Pechuga de pollo",
      "Sal",
      "Pimienta",
      "Aceite de oliva",
      "Ensalada",
    ],
    preparacion: [
      "Sazonar el pollo.",
      "Cocinar a la plancha.",
      "Servir con ensalada fresca.",
    ],
  },

  {
    id: "trucha-vapor",
    categoria: "Dietas",
    nombre: "Trucha al Vapor",
    precio: "S/ 25",
    imagen: "images/trucha-vapor.jpg",
    resumen: "Trucha cocida al vapor con verduras frescas.",
    descripcion:
      "Trucha fresca cocinada al vapor para conservar todo su sabor y propiedades nutritivas. Se acompaña con verduras frescas.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 trucha" },
      { etiqueta: "Tiempo de preparación", valor: "25 minutos" },
      { etiqueta: "Tipo", valor: "Dieta saludable" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Acompañado de", valor: "Verduras frescas" },
    ],
    ingredientes: ["Trucha", "Sal", "Limón", "Verduras"],
    preparacion: [
      "Sazonar la trucha.",
      "Cocinar al vapor.",
      "Servir con verduras.",
    ],
  },

  // =====================
  // Postres
  // =====================

  {
    id: "quesillo-miel",
    categoria: "Postres",
    nombre: "Quesillo con Miel",
    precio: "S/ 5",
    imagen: "images/quesillo-miel.jpg",
    resumen: "Tradicional quesillo cajamarquino acompañado de miel de abeja.",
    descripcion:
      "Delicioso quesillo artesanal elaborado con leche fresca y servido con miel natural.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 unidad" },
      { etiqueta: "Origen", valor: "Cajamarca" },
      { etiqueta: "Tipo", valor: "Postre" },
      { etiqueta: "Temperatura", valor: "Frío" },
      { etiqueta: "Ideal para", valor: "Después del almuerzo" },
    ],
    ingredientes: ["Quesillo", "Miel de abeja"],
    preparacion: ["Servir el quesillo.", "Agregar miel al gusto."],
  },

  {
    id: "ensalada-frutas",
    categoria: "Postres",
    nombre: "Ensalada de Frutas",
    precio: "S/ 6",
    imagen: "images/ensalada-frutas.jpg",
    resumen: "Combinación de frutas frescas de temporada.",
    descripcion: "Selección de frutas frescas cortadas y servidas al momento.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 copa" },
      { etiqueta: "Tipo", valor: "Postre" },
      { etiqueta: "Temperatura", valor: "Fría" },
      { etiqueta: "Origen", valor: "Frutas frescas" },
      { etiqueta: "Ideal para", valor: "Toda la familia" },
    ],
    ingredientes: ["Papaya", "Manzana", "Plátano", "Fresa", "Uva"],
    preparacion: ["Lavar las frutas.", "Cortarlas.", "Servir inmediatamente."],
  },

  {
    id: "gelatina",
    categoria: "Postres",
    nombre: "Gelatina",
    precio: "S/ 3",
    imagen: "images/gelatina.jpg",
    resumen: "Gelatina de sabores servida fría.",
    descripcion:
      "Refrescante gelatina preparada diariamente en diferentes sabores.",
    caracteristicas: [
      { etiqueta: "Porción", valor: "1 copa" },
      { etiqueta: "Tipo", valor: "Postre" },
      { etiqueta: "Temperatura", valor: "Fría" },
      { etiqueta: "Ideal para", valor: "Niños y adultos" },
      { etiqueta: "Sabores", valor: "Variados" },
    ],
    ingredientes: ["Gelatina", "Agua"],
    preparacion: ["Preparar la gelatina.", "Refrigerar.", "Servir fría."],
  },

  // =====================
  // Bebidas frias
  // =====================

  {
    id: "chicha-morada-litro",
    categoria: "Bebidas_frias",
    nombre: "Chicha Morada (1 Litro)",
    precio: "S/ 15",
    imagen: "images/chicha-morada-litro.jpg",
    resumen: "Refrescante chicha morada preparada con maíz morado.",
    descripcion:
      "Bebida tradicional peruana elaborada con maíz morado, frutas y especias naturales.",
    caracteristicas: [
      { etiqueta: "Presentación", valor: "1 litro" },
      { etiqueta: "Temperatura", valor: "Fría" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Ideal para", valor: "Compartir" },
      { etiqueta: "Rinde", valor: "4 vasos" },
    ],
    ingredientes: ["Maíz morado", "Piña", "Canela", "Clavo de olor", "Azúcar"],
    preparacion: [
      "Hervir el maíz con las frutas.",
      "Colar.",
      "Enfriar.",
      "Servir con hielo.",
    ],
  },

  {
    id: "maracuya-litro",
    categoria: "Bebidas_frias",
    nombre: "Maracuyá (1 Litro)",
    precio: "S/ 18",
    imagen: "images/maracuya-litro.jpg",
    resumen: "Jugo natural de maracuyá preparado al momento.",
    descripcion: "Refrescante bebida elaborada con pulpa natural de maracuyá.",
    caracteristicas: [
      { etiqueta: "Presentación", valor: "1 litro" },
      { etiqueta: "Temperatura", valor: "Fría" },
      { etiqueta: "Ideal para", valor: "Compartir" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Rinde", valor: "4 vasos" },
    ],
    ingredientes: ["Pulpa de maracuyá", "Agua", "Azúcar"],
    preparacion: ["Licuar los ingredientes.", "Colar.", "Servir con hielo."],
  },

  {
    id: "limonada-litro",
    categoria: "Bebidas_frias",
    nombre: "Limonada (1 Litro)",
    precio: "S/ 18",
    imagen: "images/limonada-litro.jpg",
    resumen: "Limonada natural preparada con limones frescos.",
    descripcion:
      "Bebida refrescante elaborada con limón recién exprimido y hielo.",
    caracteristicas: [
      { etiqueta: "Presentación", valor: "1 litro" },
      { etiqueta: "Temperatura", valor: "Fría" },
      { etiqueta: "Ideal para", valor: "Compartir" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Rinde", valor: "4 vasos" },
    ],
    ingredientes: ["Limón", "Agua", "Azúcar", "Hielo"],
    preparacion: [
      "Exprimir los limones.",
      "Mezclar con agua y azúcar.",
      "Servir con hielo.",
    ],
  },

  {
    id: "naranjada-litro",
    categoria: "Bebidas_frias",
    nombre: "Naranjada (1 Litro)",
    precio: "S/ 22",
    imagen: "images/naranjada-litro.jpg",
    resumen: "Jugo natural de naranja recién exprimida.",
    descripcion:
      "Refrescante bebida preparada con naranjas frescas y servida bien fría.",
    caracteristicas: [
      { etiqueta: "Presentación", valor: "1 litro" },
      { etiqueta: "Temperatura", valor: "Fría" },
      { etiqueta: "Ideal para", valor: "Compartir" },
      { etiqueta: "Origen", valor: "Perú" },
      { etiqueta: "Rinde", valor: "4 vasos" },
    ],
    ingredientes: ["Naranja", "Agua", "Azúcar", "Hielo"],
    preparacion: [
      "Exprimir las naranjas.",
      "Mezclar con agua y azúcar.",
      "Servir con hielo.",
    ],
  },
];
function obtenerPlatoPorId(id) {
  return PLATOS.find((p) => p.id === id);
}
