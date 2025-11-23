// MENU MOBILE
const mobileBtn = document.getElementById("mobileBtn");
const menu = document.querySelector(".menu");

mobileBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// FILTRO DE CANAIS
const search = document.getElementById("search");
const canais = document.querySelectorAll(".canal-card");

search.addEventListener("input", () => {
    let termo = search.value.toLowerCase();

    canais.forEach(canal => {
        canal.style.display = canal.textContent.toLowerCase().includes(termo)
            ? "block"
            : "none";
    });
});

// FORMULÁRIO
document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    e.target.reset();
});
