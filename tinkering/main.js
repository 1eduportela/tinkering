const fotos = [
    "yo.jpeg",
    "quad.jpeg",
    "pi.jpeg",
    "usa.jpeg"
];

const galeria = document.getElementById("galeria");

for (const foto of fotos) {
    const img = document.createElement("img");
    img.src = "tinkering/img/" + foto;
    img.alt = "Foto de Tinker";
    galeria.appendChild(img);
}