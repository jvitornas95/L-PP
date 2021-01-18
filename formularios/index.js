const inputType = document.getElementById('type')

getParams = () => {

    var parametros = location.search.slice(1)
    var partes = parametros.split('&')
    var data = {}

    partes.forEach(pt => {

        var chave = pt.split('=')
        data[chave[0]] = chave[1]

    })

    return data
    
}

document.getElementById('id').value = getParams().id;
inputType.value = getParams().type;

document.getElementById('send').addEventListener('click', evt => {

    if(inputType == 'boasFestas') {
        alert(`         Obrigado pela confirmação!!!
            Boas festas e um feliz 2021`)
    } else {
        alert(`Para o próximo ano, nossa dica: 
        Melhor que sonhar é realizar!
        Sempre que encontrar algo que te encante, 
        não hesite em nos procurar novamente.
        Boas festas e um feliz 2021!`)
    }    

})