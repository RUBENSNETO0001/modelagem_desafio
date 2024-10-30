const btn = document.querySelector("#btnMenu");
const item = document.querySelectorAll("itens");

btn.forEach("click", ()=> {
    item.style.display = "block"? "none":"block"
});
