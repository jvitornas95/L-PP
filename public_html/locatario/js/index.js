const inputs = document.querySelectorAll('[type=file]');
const buttons = document.querySelectorAll('button');
const sectionBanco = document.querySelector('.ref-bancaria');
const sectionPessoal = document.querySelector('.ref-pessoal');
const formFiles = document.querySelector('.form-files');

sectionBanco.style.display = 'none';
sectionPessoal.style.display = 'none';
formFiles.style.display = 'none';

setTimeout(() => {

    document.getElementById('init').style.display = 'none';
    formFiles.style.display = 'flex';
    formFiles.classList.add('show');

}, 1000)

inputs.forEach(input => {

    input.style.display = 'none';
    input.addEventListener('change', el => {

        document.querySelector(`[for=${input.id}]`).textContent = input.files[0].name;

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
