
const botao = document.querySelector(".btn-plataforma");
console.log(botao);


const elementoPlataforma = document.querySelector(".btn-plataforma .plataformas");
console.log(elementoPlataforma);

botao.addEventListener("click", () =>{

    elementoPlataforma.classList.toggle("ativo");
    // if(elementoPlataforma.classList.contains("ativo")){
    //     elementoPlataforma.classList.remove("ativo");
    // }else {
    //     elementoPlataforma.classList.add("ativo");
    // }
})
