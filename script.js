

const key = "8ae1cd1833a447f88abcdac059c3a5a0"

function colocardadosnatela(dados) {
    console.log(dados)
    document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
    document.querySelector('.tempo').innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = 'Umidade: ' + dados.main.humidity + '%'
    document.querySelector('.img-previsao').scr = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarcidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocardadosnatela(dados)

}

function cliqueinobotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarcidade(cidade)
}
// Toda fez que for acessar um servidor coloco (async) antes da (function) para avisar que estou pegando informações de outro servidor. Assim resolvo o problema da demora de segundos. junto com (await) que vai dar um aviso para o javascript que só vai dar continuidade para a operação depois da resposta do servidor . 

// dentro do fetch() vai aonde o servidor está.
// O (then) vai dizer o que acontecerá depois de pagar o conteudo no servidor. 

// Math.floor() = serviu para arrendondar o valor.