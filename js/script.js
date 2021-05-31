var rodada = 'player_1'

function insert(param) {

    var p = document.getElementById('tagP')

    if (document.getElementById(param).value != '') {

        param = ''

        if (rodada == 'player_1') {

            rodada = 'player_2'

            p.innerHTML = 'É a vez do O'

        } else if (rodada == 'player_2') {

            rodada = 'player_1'

            p.innerHTML = 'É a vez do X'

        }

    } else if (document.getElementById(param).value == '') {

        let article = document.getElementById('article')

        article.style.display = 'flex'

        document.getElementById('buttonSim').addEventListener("click", function () {

                valor = 'S'

                article.style.display = 'none'

                if (rodada == 'player_1') {

                    document.getElementById(param).value = 'X'

                    rodada = 'player_2'

                    p.innerHTML = 'É a vez do O'

                } else if (rodada == 'player_2') {

                    document.getElementById(param).value = 'O'

                    rodada = 'player_1'

                    p.innerHTML = 'É a vez do X'

                }

                param = ''

            }

        );

        document.getElementById('buttonNao').addEventListener("click", function () {

                article.style.display = 'none'

                param = ''

                if (rodada == 'player_1') {

                    rodada = 'player_2'

                    p.innerHTML = 'É a vez do O'

                } else if (rodada == 'player_2') {

                    rodada = 'player_1'

                    p.innerHTML = 'É a vez do X'
                    
                }

                console.log(rodada)

            }

        );

    }

    console.log(rodada)

}

function reset() {

    for (let index = 1; index <= 9; index++) {

        document.getElementById(`input${index}`).value = ''

    }

    document.getElementById('tagP').innerHTML = 'É a vez do X'

    rodada = 'player_1'

}