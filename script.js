const produse = [
    { nume: "Tricou", pret: "50 RON" },
    { nume: "Pantaloni", pret: "100 RON" }
];

const container = document.getElementById("produse");

produse.forEach(p => {
    const produsDiv = document.createElement("div");
    produsDiv.classList.add("produs");
    produsDiv.innerHTML = `<h3>${p.nume}</h3><p>Pret: ${p.pret}</p>`;
    container.appendChild(produsDiv);
});
