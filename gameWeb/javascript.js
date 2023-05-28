// INICIO
function novo(){
    var htxt = `<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NOVO</title>
    <link rel="stylesheet" href="estilos/novo.css">`
    
    var btxt = `
    <div class="container">
    <div class="central">
    <form autocomplete="off">
    <label for="nick name">NICK NAME</label>
    <input type="text" id="nickname" placeholder="max 10 caracteres" maxlength="10">
    <button type="submit" onclick="continuar()">CONTINUAR</button>
    <button class="voltar" type="submit" onclick="voltar()">⇦</button>
    <form>    
    </div>
    </div>
    <footer>versao beta v 0.1 _____ Desenvolvido por cezar </footer>
    `
    document.head.innerHTML = htxt
    document.body.innerHTML = btxt
}

function carregar(){
    window.alert('ESSA FUNÇÃO AINDA NAO ESTA DISPONIVEL')
}

//VAR GERAL

var nickname = ''
var moedaOuro = 50
var moedaPrata = 0
var itens = []

//NOVO

function voltar(){
    location.reload()
}

function continuar(){
    var nickname = document.getElementById('nickname').value
    if(nickname == ''){
        window.alert('nick invalido')
        novo()
    }else{
        tutorial() 
    }
}
//TUTORIAL
function tutorial(){
    var htxt = `<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TUTORIAL</title>
<link rel="stylesheet" href="estilos/tutorial.css">`
    var btxt = `<div class="container">
<div class="central">
<h1>GOSTARIA DE UM TUTORIAL?</h1>
<button onclick="tsim()">SIM</button>
<button onclick="tnao()">NÃO</button>
</div>
</div>
<footer>versao beta v 0.1 _____ Desenvolvido por cezar </footer>`

    document.head.innerHTML = htxt
    document.body.innerHTML = btxt
}

function tsim(){
    mostrarTutorial()
}

function tnao(){
    home()
}

function mostrarTutorial(){
    window.alert('Indisponivel no momento')
    tutorial()
}