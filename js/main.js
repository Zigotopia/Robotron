

let peças = document.querySelectorAll(".controle-contador")

let controle = document.querySelectorAll("[data-controle]")

const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

                    
                  // o elemento designa  cada um  dos elementos do array
controle.forEach( (elemento)=>{
                                          // é natural na função click mostrar tudo que acotntece quando colocamos o evento
    elemento.addEventListener("click" ,(evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atulizaestatistica(evento.target.dataset.peça)// o que eu fiz aqui foi tornar o parametro dinamico visto que ele ia me dar o parametro da peça que eu clicasse

    } )
    

})


function manipulaDados(operação, controle) {
  let peças = controle.querySelector("[data-contador]")
    if(operação==="-"){
        peças.value--}

    
    else{peças.value++
    }
}

function atulizaestatistica(peça){
     estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peça][elemento.dataset.estatistica]
     })             // text content seria o valor ja dado da estatistica               // o que eu fiz aqui foi entrar no objeto até achar as estatisticas

}


let listaDeCores = document.querySelectorAll(".paleta_cor")
let roboCor =  document.querySelector(".robo")
let cores = ["amarelo", "azul","branco","preto","rosa", "vermelho"]
let trocacor = document.querySelector("[data-corno]")





let i= 0

trocacor.addEventListener("click",()=>{
    if(i< cores.length){
        roboCor.src= `img/robotron${cores[i]}.png`
        i++
        }

        else{
            i=0
        }

    
    


})


