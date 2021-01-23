const inputs = document.querySelectorAll('[type=file]');
const buttons = document.querySelectorAll('button');
const sectionBanco = document.querySelector('.ref-bancaria');
const sectionPessoal = document.querySelector('.ref-pessoal');
const formFiles = document.querySelector('.form-files');

initialize();

inputs.forEach(input => {

    input.style.display = 'none';
    input.addEventListener('change', el => {

        document.querySelector(`[for=${input.id}]`).textContent = input.files[0].name;
        document.querySelector(`.${input.id}`).firstElementChild.src = '../assets/checkmark-circle-outline.svg';

    });

});

buttons.forEach(btn => {

    btn.addEventListener('click', e => {

        e.preventDefault();
        if (btn.id == 'ref-bancaria') {

            sectionBanco.style.display = 'flex';
            formFiles.style.display = 'none';
            sectionPessoal.style.display = 'none';

        } 
        if(btn.id == 'ref-pessoal'){

            sectionBanco.style.display = 'none';
            formFiles.style.display = 'none';
            sectionPessoal.style.display = 'flex';

        }
        if(btn.id == 'save-bank-data'){

            sectionBanco.style.display = 'none';
            formFiles.style.display = 'flex';
            sectionPessoal.style.display = 'none';

        }

    });

});

function initialize(){

    sectionBanco.style.display = 'none';
    sectionPessoal.style.display = 'none';
    formFiles.style.display = 'none';

    setTimeout(() => {

        document.getElementById('init').style.display = 'none';
        formFiles.style.display = 'flex';
        formFiles.classList.add('show');
    
    }, 1000);
    
}


document.querySelector('#save-bank-data').addEventListener('click', e => {
        
        document.querySelector(`.ref-bancaria-check`).firstElementChild.src = '../assets/checkmark-circle-outline.svg';

});    

