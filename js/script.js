var rodada = 'player_1'

function notShowArticle() {

    document.getElementById('article').style.display = 'none'

}

function insert(param) {

    document.getElementById('article').style.display = 'flex'

    if (rodada == 'player_1') {

        document.getElementById(param).value = 'X'

        rodada = 'player_2'

    } else if (rodada == 'player_2') {

        document.getElementById(param).value = 'O'

        rodada = 'player_1'

    }

}

function reset() {

    for (let index = 1; index <= 9; index++) {

        document.getElementById(`input${index}`).value = ''

    }

    rodada = 'player_1'

}
