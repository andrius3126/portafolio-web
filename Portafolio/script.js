const textos = [
    "💻 Desarrollador Web",
    "🎮 Gamer",
    "📚 Estudiante de Ingeniería",
    "🚀 Amante de la Tecnología"
];

let i = 0;
let j = 0;
let escribiendo = true;

const typing = document.getElementById("typing");

function efectoEscritura() {

    if(escribiendo){

        typing.textContent = textos[i].substring(0,j++);
        
        if(j > textos[i].length){
            escribiendo = false;
            setTimeout(efectoEscritura,1500);
            return;
        }

    }else{

        typing.textContent = textos[i].substring(0,j--);

        if(j < 0){
            escribiendo = true;
            i++;

            if(i >= textos.length){
                i = 0;
            }
        }

    }

    setTimeout(efectoEscritura,100);

}

efectoEscritura();

const elementos = document.querySelectorAll("section");

const observer = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if(entrada.isIntersecting){
            entrada.target.classList.add("mostrar");
        }

    });

});

elementos.forEach((elemento)=>{

    elemento.classList.add("oculto");
    observer.observe(elemento);

});

