function meuEscopo() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', calcularImc);
}

function calcularImc(evento) {
    evento.preventDefault();
    const inputAltura = document.querySelector('#inputAltura');
    const inputPeso = document.querySelector('#inputPeso');

    const altura = Number(inputAltura.value);
    const peso = Number(inputPeso.value);

    if (validarFormulário(altura, peso)) {
        const imc = peso / (altura * altura);
        const status = statusImc(imc);
        const msg = `<b>Seu imc é igual a ${imc.toFixed(2)} (${status})</b>`;
        const cor = 'verde'
        setResultado(msg, cor);
    }
}

function validarFormulário(alt, pes) {
    if (isNaN(pes)) {
        const msg = '<b>Peso inválido</b>'
        const cor = 'vermelho'
        setResultado(msg, cor);
        return false
    }
    else if (isNaN(alt)) {
        const msg = '<b>Altura inválida</b>'
        const cor = 'vermelho'
        setResultado(msg, cor);
        return false
    } else {
        return true
    }
}

function statusImc(imc) {
    let stats = '';
    if (imc < 18.5) {
        stats = 'Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 24.99) {
        stats = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.99) {
        stats = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.99) {
        stats = 'Obesidade grau 1'
    } else if (imc >= 35 && imc <= 39.99) {
        stats = 'Obesidade grau 2'
    } else if (imc >= 40) {
        stats = 'Obesidade grau 3'
    }

    return stats;
}

function setResultado(msg, cor) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p')
    p.classList.add(cor)
    p.innerHTML = `<b>${msg}</b>`;
    resultado.appendChild(p);
}

meuEscopo();