const listaTarefas = document.querySelector('.tarefas');
const button = document.querySelector('.btn-add-tarefa');
const input = document.querySelector('.input-tarefa');

button.addEventListener('click', function (e) {
    const evento = e.target;
    if (evento.classList.contains('btn-add-tarefa')) {
        adicionarTarefa(input.value);
        input.value = '';
        salvarTarefa();
    }
})

document.addEventListener('click', function (e) {
    const evento = e.target;
    if (evento.classList.contains('apagar')) {
        evento.parentElement.remove();
        salvarTarefa();
    }
})

const criarItemList = (texto) => {
    const li = document.createElement('li');
    li.innerText = texto;
    li.style.marginBottom = '10px'
    return li
}

const criarButton = () => {
    let btn = document.createElement('button');
    btn.innerText = 'Apagar';
    btn.style.marginLeft = '10px'
    btn.classList.add('apagar')
    return btn;
}

const adicionarTarefa = (texto) => {
    let li = criarItemList(texto);
    let btn = criarButton();
    li.appendChild(btn);
    listaTarefas.appendChild(li);   
}

const salvarTarefa = () =>{
    let liTarefas = document.querySelectorAll('li');
    let listaDeTarefas = [];
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

const adicionarTarefasSalvas = () =>{
    const tarefas = localStorage.getItem('tarefas');
    const stringTarefas = JSON.parse(tarefas);
    for (tarefa of stringTarefas){
        adicionarTarefa(tarefa);
    }
}

adicionarTarefasSalvas();