const inputAluguel = document.querySelector('.input-aluguel');
const inputVenda = document.querySelector('.input-venda');
const inputIptu = document.getElementById('iptu');
const inputCondominio = document.getElementById('condominio');
const inputOcupacao = document.getElementById('ocupacao');

const sections = document.querySelectorAll('section');

setTimeout(() => {

    document.querySelector('#init').style.display = 'none';
    document.querySelector('#edit-data').style.display = 'block';
    document.querySelector('#edit-data').classList.add('show');
    
}, 1000);