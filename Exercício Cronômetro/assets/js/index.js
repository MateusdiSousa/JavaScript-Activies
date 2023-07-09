const relogio = document.querySelector('.relogio');

document.addEventListener('click', function(e){
    const evento = e.target;

    if(evento.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        start();
    }

    if(evento.classList.contains('pausar')){
        clearInterval(timer)
        relogio.classList.add('pausado');
    }

    if(evento.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        segundos = 0;
    }
})

let segundos = 0;


const pegarTempo = (segundos) =>{
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'GMT'
        }
    )
}

const start = () =>{
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = pegarTempo(segundos);
    },1000);
}