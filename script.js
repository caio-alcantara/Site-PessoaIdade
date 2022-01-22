function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var ano_form = document.getElementById('nascimento')
    var resultado = document.querySelector('div#resultado')
    
    if (ano_form.value.length == 0 || ano_form.value > ano) {
        window.alert('Ocorreu um erro [Ano de nascimento inválido]. Por favor, digite dados válidos.')
        return none
    }

    var sexo_form = document.getElementsByName('radsex')
    var idade = ano - Number(ano_form.value)

    var genero = ''

    var imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')

    if (sexo_form[0].checked) {
        genero = 'masculino'
        if (idade >= 0 && idade < 18){
            //Adolescente/Criança
            imagem.setAttribute('src', 'homemAdolescente.jpg')
        } else if (idade >= 18 && idade < 60){
            //Adulto
            imagem.setAttribute('src', 'homemAdulto.jpg')
        } else {
            //Idoso
            imagem.setAttribute('src', 'homemIdoso.jpg')
        }


    } else if (sexo_form[1].checked) {
        genero = 'feminino'
        if (idade >= 0 && idade < 18){
            //Adolescente/Criança
            imagem.setAttribute('src', 'mulherAdolescente.jpg')
        } else if (idade >= 18 && idade < 60){
            //Adulto
            imagem.setAttribute('src', 'mulherAdulta.jpg')
        } else {
            //Idoso
            imagem.setAttribute('src', 'mulherIdosa.jpg')
        }
    }

    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Pessoa do sexo ${genero}, de ${idade} anos.`
    resultado.appendChild(imagem)
    
}
