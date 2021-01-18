var inputs = document.querySelectorAll('[type=file]');
var btnSubmit = document.querySelector('[type=submit]');

getParams = () => {
        
    var parametros = location.search.slice(1);
    var partes = parametros.split('&');
    var data = {};

    partes.forEach(pt => {

        var chave = pt.split('=');
        data[chave[0]] = chave[1];

    });

    return data;

}

document.getElementById('id').value = getParams().id;
document.getElementById('contrato').value = getParams().contrato;

inputs.forEach(el => {
    
    el.addEventListener('change', () => {

        document.querySelector(`[for=${el.id}]`).innerHTML = el.files[0].name;        
        
    });

});

