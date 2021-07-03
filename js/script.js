var rodada = "X"

function insert(params) {

    let input = document.getElementById(params)

    input.value = rodada

    if (rodada == "X") {

        rodada = "O"
        document.getElementById('tagP').innerHTML = 'É a vez do O'

    } else if (rodada == "O") {

        rodada = "X"
        document.getElementById('tagP').innerHTML = 'É a vez do X'

    }

}

function reset() {

    for (let index = 1; index <= 9; index++) {

        document.getElementById(`input${index}`).value = ''

    }

    document.getElementById('tagP').innerHTML = 'É a vez do X'

    rodada = 'X'

}

function bgBody(paramButton) {

    let body = document.getElementById('body')
    
    if (paramButton == 'Sim') {

        body.style.background = '#06D656'

    } else if (paramButton == 'Não') {

        body.style.background = '#EF233C'

    }

}
