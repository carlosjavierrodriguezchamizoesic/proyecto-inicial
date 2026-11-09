// ===== Datos de ejemplo (equipos y noticias ficticios) =====
const ICONOS = {
  futbol: "⚽",
  baloncesto: "🏀",
  tenis: "🎾",
  motor: "🏎️",
  ciclismo: "🚴",
};

const NOMBRES_CATEGORIA = {
  futbol: "Fútbol",
  baloncesto: "Baloncesto",
  tenis: "Tenis",
  motor: "Motor",
  ciclismo: "Ciclismo",
};

const noticias = [
  {
    id: 1,
    categoria: "futbol",
    titulo: "El Atlético Ribera remonta en el descuento y se coloca líder en solitario",
    resumen: "Un doblete de Marcos Vidal en los últimos diez minutos culmina una noche épica en el Estadio del Puerto.",
    texto: [
      "El Atlético Ribera firmó una de las remontadas de la temporada ante el Real Montesur (3-2). Los locales llegaron al minuto 80 perdiendo por dos goles, pero la entrada de Marcos Vidal cambió por completo el partido.",
      "El delantero marcó primero de cabeza tras un saque de esquina y, ya en el tiempo añadido, definió con la zurda un contragolpe que hizo estallar a la grada.",
      "Con esta victoria, el conjunto ribereño suma 31 puntos y aventaja en dos a su inmediato perseguidor.",
    ],
    autor: "Laura Benítez",
    fecha: "Hace 1 hora",
    lecturas: 15400,
    destacada: true,
  },
  {
    id: 2,
    categoria: "baloncesto",
    titulo: "Los Halcones de Valdemar encadenan su décima victoria consecutiva",
    resumen: "El base Tomás Ortega firmó un triple-doble para sellar el triunfo ante Basket Costa Azul.",
    texto: [
      "Los Halcones de Valdemar siguen imparables. Su victoria por 94-81 ante Basket Costa Azul les permite igualar la mejor racha de la historia del club.",
      "Tomás Ortega terminó con 18 puntos, 11 rebotes y 12 asistencias, liderando a un equipo que dominó el rebote ofensivo durante todo el encuentro.",
    ],
    autor: "Sergio Muñoz",
    fecha: "Hace 2 horas",
    lecturas: 8200,
  },
  {
    id: 3,
    categoria: "tenis",
    titulo: "Elena Sanz conquista el Open de Primavera sin ceder un solo set",
    resumen: "La tenista de 21 años logra el título más importante de su carrera tras un torneo impecable.",
    texto: [
      "Elena Sanz se impuso en la final por 6-3 y 7-5 en un partido en el que su servicio volvió a ser decisivo.",
      "Con este título, la joven escala hasta el puesto 12 del ranking mundial, su mejor clasificación hasta la fecha.",
    ],
    autor: "Ana Prieto",
    fecha: "Hace 3 horas",
    lecturas: 11050,
  },
  {
    id: 4,
    categoria: "motor",
    titulo: "Pole sorpresa bajo la lluvia en el Gran Premio de Montaña Alta",
    resumen: "El novato del equipo Veloce aprovechó una pista mojada para lograr su primera pole position.",
    texto: [
      "Las condiciones cambiantes convirtieron la clasificación en una lotería que supo leer mejor que nadie el debutante del equipo Veloce.",
      "La carrera del domingo arrancará con una previsión de lluvia del 60%, lo que abre la puerta a todo tipo de estrategias.",
    ],
    autor: "Javier Ruiz",
    fecha: "Hace 4 horas",
    lecturas: 6900,
  },
  {
    id: 5,
    categoria: "ciclismo",
    titulo: "Escapada histórica en la etapa reina de la Vuelta del Norte",
    resumen: "Un ataque a 80 kilómetros de meta revoluciona la general a falta de tres etapas.",
    texto: [
      "La etapa reina, con tres puertos de primera categoría, dejó una jornada para el recuerdo. El corredor del equipo Montaña Verde atacó lejos y llegó en solitario a la cima.",
      "El nuevo líder aventaja en 48 segundos al segundo clasificado antes de la contrarreloj final.",
    ],
    autor: "Pablo Herrera",
    fecha: "Hace 5 horas",
    lecturas: 5300,
  },
  {
    id: 6,
    categoria: "futbol",
    titulo: "El Deportivo Llanura presenta a su nuevo entrenador",
    resumen: "El técnico firma por dos temporadas con el objetivo de devolver al club a puestos europeos.",
    texto: [
      "En su presentación, el nuevo entrenador apostó por un estilo de juego ofensivo y por dar oportunidades a los jóvenes de la cantera.",
      "Su debut será el próximo sábado en un exigente desplazamiento al campo del Unión Sierra.",
    ],
    autor: "Laura Benítez",
    fecha: "Hace 6 horas",
    lecturas: 9700,
  },
  {
    id: 7,
    categoria: "baloncesto",
    titulo: "La selección anuncia su lista para la ventana de clasificación",
    resumen: "Tres debutantes figuran en una convocatoria marcada por las lesiones.",
    texto: [
      "El seleccionador ha apostado por la juventud ante las bajas de varios habituales.",
      "El combinado nacional disputará dos partidos decisivos en apenas cuatro días.",
    ],
    autor: "Sergio Muñoz",
    fecha: "Hace 8 horas",
    lecturas: 4100,
  },
  {
    id: 8,
    categoria: "tenis",
    titulo: "Batalla de cinco horas en la Copa de Naciones",
    resumen: "El partido más largo del año se decidió en un ajustado tie-break del quinto set.",
    texto: [
      "Ambos jugadores dejaron todo sobre la pista en un encuentro que terminó pasada la medianoche.",
      "La victoria permite a su equipo avanzar a semifinales de la competición.",
    ],
    autor: "Ana Prieto",
    fecha: "Ayer",
    lecturas: 7600,
  },
  {
    id: 9,
    categoria: "futbol",
    titulo: "El Unión Sierra blinda a su joven promesa hasta 2031",
    resumen: "El centrocampista de 18 años renueva con una cláusula de rescisión récord para el club.",
    texto: [
      "El club ha cerrado la renovación de su perla de la cantera tras semanas de negociaciones.",
      "El jugador, que debutó esta temporada, ya suma tres goles y cuatro asistencias en liga.",
    ],
    autor: "Carlos Domínguez",
    fecha: "Ayer",
    lecturas: 12300,
  },
];

const partidos = [
  { local: "At. Ribera", visitante: "R. Montesur", gl: 3, gv: 2, min: "Final" },
  { local: "Unión Sierra", visitante: "Dep. Llanura", gl: 1, gv: 1, min: 67 },
  { local: "CF Bahía", visitante: "Racing Pinar", gl: 0, gv: 2, min: 54 },
  { local: "Halcones", visitante: "Costa Azul", gl: 94, gv: 81, min: "Final" },
  { local: "Sp. Altamira", visitante: "CD Vega", gl: 2, gv: 0, min: 23 },
];

const clasificacion = [
  { equipo: "At. Ribera", pj: 13, pts: 31 },
  { equipo: "Unión Sierra", pj: 13, pts: 29 },
  { equipo: "R. Montesur", pj: 13, pts: 27 },
  { equipo: "Racing Pinar", pj: 13, pts: 24 },
  { equipo: "Sp. Altamira", pj: 13, pts: 21 },
  { equipo: "Dep. Llanura", pj: 13, pts: 18 },
  { equipo: "CD Vega", pj: 13, pts: 12 },
  { equipo: "CF Bahía", pj: 13, pts: 9 },
];

// ===== Referencias al DOM =====
const $ = (sel) => document.querySelector(sel);
const contNoticias = $("#noticias");
const contDestacada = $("#destacada");
const tituloSeccion = $("#titulo-seccion");
const sinResultados = $("#sin-resultados");
const inputBuscar = $("#buscar");

let categoriaActual = "todas";

// ===== Utilidades =====
function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function formatearLecturas(n) {
  return n.toLocaleString("es-ES");
}

// ===== Render: noticia destacada =====
function renderDestacada() {
  const n = noticias.find((x) => x.destacada);
  contDestacada.innerHTML = `
    <div class="imagen imagen--${n.categoria}">${ICONOS[n.categoria]}</div>
    <div class="destacada__texto">
      <span class="etiqueta">${NOMBRES_CATEGORIA[n.categoria]}</span>
      <h1>${escapar(n.titulo)}</h1>
      <p>${escapar(n.resumen)}</p>
      <p class="meta">Por ${escapar(n.autor)} · ${n.fecha}</p>
    </div>`;
  contDestacada.onclick = () => abrirModal(n.id);
}

// ===== Render: listado de noticias =====
function renderNoticias() {
  const termino = inputBuscar.value.trim().toLowerCase();
  const enPortada = categoriaActual === "todas" && !termino;

  const filtradas = noticias.filter((n) => {
    if (enPortada && n.destacada) return false; // la destacada ya aparece arriba
    const coincideCategoria = categoriaActual === "todas" || n.categoria === categoriaActual;
    const coincideTexto =
      !termino ||
      n.titulo.toLowerCase().includes(termino) ||
      n.resumen.toLowerCase().includes(termino);
    return coincideCategoria && coincideTexto;
  });

  contDestacada.hidden = !enPortada;

  if (termino) {
    tituloSeccion.textContent = `Resultados para "${inputBuscar.value.trim()}"`;
  } else if (categoriaActual === "todas") {
    tituloSeccion.textContent = "Últimas noticias";
  } else {
    tituloSeccion.textContent = NOMBRES_CATEGORIA[categoriaActual];
  }

  contNoticias.innerHTML = filtradas
    .map(
      (n, i) => `
      <article class="tarjeta" data-id="${n.id}" tabindex="0" style="animation-delay:${i * 60}ms">
        <div class="imagen imagen--${n.categoria}">${ICONOS[n.categoria]}</div>
        <div class="tarjeta__cuerpo">
          <span class="etiqueta">${NOMBRES_CATEGORIA[n.categoria]}</span>
          <h3>${escapar(n.titulo)}</h3>
          <p>${escapar(n.resumen)}</p>
          <span class="meta">${escapar(n.autor)} · ${n.fecha}</span>
        </div>
      </article>`
    )
    .join("");

  sinResultados.hidden = filtradas.length > 0;
}

// ===== Render: ticker de resultados =====
function renderTicker() {
  const items = partidos
    .map((p) => {
      const minuto = typeof p.min === "number" ? `${p.min}'` : p.min;
      return `<span class="ticker__item">${p.local}<strong>${p.gl} - ${p.gv}</strong>${p.visitante}<span class="min">${minuto}</span></span>`;
    })
    .join("");
  $("#ticker").innerHTML = items;
}

// Simula la evolución de los partidos en directo
function simularDirecto() {
  partidos.forEach((p) => {
    if (typeof p.min !== "number") return;
    p.min += 1;
    if (Math.random() < 0.08) {
      Math.random() < 0.5 ? p.gl++ : p.gv++;
    }
    if (p.min >= 90) p.min = "Final";
  });
  renderTicker();
}

// ===== Render: clasificación =====
function renderClasificacion() {
  $("#clasificacion").innerHTML = clasificacion
    .map((e, i) => {
      let clase = "";
      if (i < 4) clase = "champions";
      else if (i >= clasificacion.length - 2) clase = "descenso";
      return `<tr class="${clase}"><td>${i + 1}</td><td>${e.equipo}</td><td>${e.pj}</td><td>${e.pts}</td></tr>`;
    })
    .join("");
}

// ===== Render: lo más leído =====
function renderMasLeido() {
  const top = [...noticias].sort((a, b) => b.lecturas - a.lecturas).slice(0, 5);
  $("#mas-leido").innerHTML = top
    .map((n) => `<li data-id="${n.id}" tabindex="0">${escapar(n.titulo)}</li>`)
    .join("");
}

// ===== Modal =====
const modal = $("#modal");
let ultimoFoco = null;

function abrirModal(id) {
  const n = noticias.find((x) => x.id === Number(id));
  if (!n) return;
  ultimoFoco = document.activeElement;

  const img = $("#modal-imagen");
  img.className = `modal__imagen imagen imagen--${n.categoria}`;
  img.textContent = ICONOS[n.categoria];
  $("#modal-categoria").textContent = NOMBRES_CATEGORIA[n.categoria];
  $("#modal-titulo").textContent = n.titulo;
  $("#modal-meta").textContent = `Por ${n.autor} · ${n.fecha} · ${formatearLecturas(n.lecturas)} lecturas`;
  $("#modal-texto").innerHTML = n.texto.map((p) => `<p>${escapar(p)}</p>`).join("");

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal__cerrar").focus();
}

function cerrarModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (ultimoFoco) ultimoFoco.focus();
}

modal.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-cerrar")) cerrarModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) cerrarModal();
});

// Abrir noticia desde tarjetas y "lo más leído" (clic o Enter)
function delegarApertura(contenedor, selector) {
  contenedor.addEventListener("click", (e) => {
    const el = e.target.closest(selector);
    if (el) abrirModal(el.dataset.id);
  });
  contenedor.addEventListener("keydown", (e) => {
    const el = e.target.closest(selector);
    if (el && e.key === "Enter") abrirModal(el.dataset.id);
  });
}
delegarApertura(contNoticias, ".tarjeta");
delegarApertura($("#mas-leido"), "li");

// ===== Navegación por categorías =====
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".nav__link.activo").classList.remove("activo");
    link.classList.add("activo");
    categoriaActual = link.dataset.categoria;
    renderNoticias();
    cerrarMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// ===== Búsqueda =====
inputBuscar.addEventListener("input", renderNoticias);
$("#buscador").addEventListener("submit", (e) => e.preventDefault());

// ===== Menú móvil =====
const header = document.querySelector(".header");
const menuBtn = $("#menu-btn");

function cerrarMenu() {
  header.classList.remove("menu-abierto");
  menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn.addEventListener("click", () => {
  const abierto = header.classList.toggle("menu-abierto");
  menuBtn.setAttribute("aria-expanded", String(abierto));
});

// ===== Modo oscuro (se recuerda la preferencia) =====
const temaBtn = $("#tema-toggle");

function aplicarTema(oscuro) {
  document.body.classList.toggle("oscuro", oscuro);
  temaBtn.textContent = oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
}

let temaGuardado = null;
try { temaGuardado = localStorage.getItem("tema"); } catch (_) {}
aplicarTema(
  temaGuardado ? temaGuardado === "oscuro" : window.matchMedia("(prefers-color-scheme: dark)").matches
);

temaBtn.addEventListener("click", () => {
  const oscuro = !document.body.classList.contains("oscuro");
  aplicarTema(oscuro);
  try { localStorage.setItem("tema", oscuro ? "oscuro" : "claro"); } catch (_) {}
});

// ===== Newsletter =====
$("#newsletter").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = $("#email");
  const msg = $("#newsletter-msg");
  const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

  msg.className = "newsletter__msg " + (valido ? "ok" : "error");
  msg.textContent = valido
    ? "¡Gracias! Te has suscrito correctamente."
    : "Introduce un correo electrónico válido.";
  if (valido) email.value = "";
});

// ===== Botón volver arriba =====
const btnArriba = $("#arriba");
window.addEventListener("scroll", () => {
  btnArriba.classList.toggle("visible", window.scrollY > 400);
});
btnArriba.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ===== Fecha y año =====
const hoy = new Date();
const fechaTexto = hoy.toLocaleDateString("es-ES", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
$("#fecha-hoy").textContent = fechaTexto.charAt(0).toUpperCase() + fechaTexto.slice(1);
$("#anio").textContent = hoy.getFullYear();

// ===== Inicio =====
renderDestacada();
renderNoticias();
renderTicker();
renderClasificacion();
renderMasLeido();
setInterval(simularDirecto, 5000);
