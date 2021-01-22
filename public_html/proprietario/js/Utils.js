
export class Utils{

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



}
