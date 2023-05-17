const botaoTema = document.getElementById("botao");
const body = document.body;
const imagemBotao = document.querySelector(".imagem-botao");

if(localStorage.getItem("tema") === "escuro"){
    body.classList.add("modo-escuro")
    imagemBotao.setAttribute("src", "./imagens/sun.png")
}else{
    body.classList.remove("modo-escuro")
    imagemBotao.setAttribute("src", "./imagens/moon.png")
}
botaoTema.addEventListener("click", () => {
    
    body.classList.toggle("modo-escuro")
    const escuroAtivo = body.classList.contains("modo-escuro");
    
    if(escuroAtivo){
        imagemBotao.setAttribute("src", "./imagens/sun.png")
        localStorage.setItem("tema", "escuro")
    }else{
         imagemBotao.setAttribute("src", "./imagens/moon.png")
         localStorage.setItem("tema", "claro")
    }
})
