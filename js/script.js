var Stts = document.getElementById('status');
const logLista = document.getElementById('logLista');
const iniciarMonitoramento = document.getElementById('iniciarMonitoramento');
const pararMonitoramento = document.getElementById('pararMonitoramento');
const redefinir = document.getElementById('redefinir');

let caixaDeCorreios = false;

iniciarMonitoramento.addEventListener('click', IniciarM);
pararMonitoramento.addEventListener('click', PararM);
redefinir.addEventListener('click', RedefinirFunction);

function IniciarM(){


    Stts.innerHTML = 'Iniciando monitoramento, aguarde...'
    setTimeout(function(){

        Stts.innerHTML = 'Mensagem entregue.';
        addAoLog('Mensagem entregue.');

    }, 3000);

}

function PararM(){

    Stts.innerHTML = 'Monitoramento parado.';
    logLista. innerHTML = '';


}

function RedefinirFunction(){

    caixaDeCorreios = false;
    Stts.innerHTML = 'Caixa de correios redefinida!'

}

function  addAoLog(mensagem){

    const itemLista = document.createElement('li');
    itemLista.innerHTML = mensagem;
    logLista.appendChild(itemLista);

}