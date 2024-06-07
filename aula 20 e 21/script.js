function cliqueNoBotao(){
    const imagem = document.getElementById("imagem");
    if (imagem.style.display === "none"){
        imagem.style.display = "block"; // Tornar a imagem invisivel
    } else {
        imagem.style.display = "none"; // oculta a imagem se ja estiver visivel
    }
    // alert("Você clicou no botão!!!");
}
document.getElementById("meuBotão").addEventListener("click", cliqueNoBotao);
document.getElementById("primeiroBotao").addEventListener("click",function() {
    alert('click: Acionado quando um elemento é clicado')
});