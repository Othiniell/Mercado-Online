//var nome = prompt("Qual o seu nome?")
// SEJA BEM VINDO nome
//alert("seja bem vindo " + nome)

/*var numero1 = Number(prompt("Digite o primeiro número"))
var numero2 = Number(prompt("Digite o segundo número"))
alert("O resultado da soma dos dois é: "+ (numero1 + numero2))
alert("O resultado da subtração dos dois é: "+ (numero1 - numero2))
alert("O resultado da multiplicação dos dois é: "+(numero1 * numero2))
alert("O resultado da divisão dos dois é: "+ (numero1 / numero2))*/

/*var numero1 = Number(prompt("Digite um número"))

alert("O dobro de "+ (numero1) + " é "+ (numero1 * 2)+ " e o triplo é "+ (numero1 * 3) )*/

/*var nome = prompt("Qual o nome do aluno?")
var numero1 = Number (prompt("Qual a primeira nota do "+(nome)))
var numero2 = Number (prompt("Ok. Primeira nota "+(numero1)+". Qual a segunda nota?"))

var media = ((numero1 + numero2) / 2)

alert("A média final será "+ media) 

if (media >= 6){
    alert("Aluno APROVADO")
}

else {
    alert("Aluno REPROVADO")
}*/

/*var idade = Number (prompt("Qual a sua idade?"))

if (idade >= 18){
    alert("MAIOR DE IDADE")
}

else {
    alert("MENOR DE IDADE")
}*/


/*var nota = Number (prompt("Qual a sua nota?"))

if (nota>= 60){
    alert("APROVADO")
}

else {
    alert("REPROVADO")
}*/

/*var peso = Number (prompt("Qual o seu peso?"))
var altura = Number (prompt("Qual a sua altura?"))
var imc = (peso / (altura*altura)).toFixed(2)

alert(imc)

if (imc <= 16.9){
    alert("Muito abaixo do peso")
}

else if (imc >= 17 & imc <= 18.4 ){
    alert("Abaixo do peso")
}

else if (imc >= 18.5 & imc <= 24.9){
    alert("Peso normal")
}

else if (imc >= 25 & imc <= 29.9){
    alert("Acima do peso")
}

else if (imc >= 30 & imc <= 34.9){
    alert("Obesidade grau I")
}

else if (imc >= 35 & imc <= 40){
    alert("Obesidade grau II")
}

else   if (imc >= 40){
    alert("Obesidade grau III")
}*/

/*var listaDeCursos = [ "Programação", "Enfermagem", "Estética", "Administração", "Segurança", "Informática", "Excel" ]

alert( listaDeCursos [0] )
alert( listaDeCursos [1] )
alert( listaDeCursos [2] )
alert( listaDeCursos [3] )
alert( listaDeCursos [4] )
alert( listaDeCursos [5] )
alert( listaDeCursos [6] )*/


//var listaDeCursos = [ "Programação", "Enfermagem", "Estética", "Administração", "Segurança", "Informática", "Excel" ]

//listaDeCursos.forEach(curso => alert(curso))*/

/*for(var i=0; i<=6; i++){
    alert(listaDeCursos[i])
}*/

/*for(var i=90; i>=0; i--){
    alert(i)
}*/

//PROMPT INICIAL PARA COLETAR QUANTAS NOTAS SERÃO UTILIZADAS NO CALCULO
/*var qtdeNotas = Number (prompt("Quantas notas serão avaliadas?"))
//CRIACAO DO ACUMULADOR QUE VAI SOMAR TODAS AS NOTAS
var acumuladordeNotas = 0;
//ESTRUTURA DE REPETIÇÃO QUE IRÁ RODAR UMA VEZ PARA CADA NOTA
for(var i = 1; i<= qtdeNotas; i++){
    //PROMPT PARA PERGUNTAR A NOTA DO ALUNO ATUAL
    var nota = prompt("Digite a nota número " + i)
    //VARIAVEL RECEBE I VALOR DELA MESMA MAIS A NOTA DO ALUNO ATUAL
    acumuladordeNotas = acumuladordeNotas + Number(nota)
}

//CRIAR UM ALERTA COM A DIVISAO DO VALOR ACUMULADO PELA QUANTIDADE DE NOTAS
alert("A média será " + (acumuladordeNotas / Number(qtdeNotas)))*/

/*var listaDeNomes = [ "Maylon", "Arthur", "Ryan", "Raphael", "Maria", "Gabriel", "Macoly","Dalton", "Patrick" ] 
var indiceProcurado = prompt("Qual o índice do aluno?")
alert( listaDeNomes[indiceProcurado] )*/

//para cada nome, fará um alerta com nome da lista acima, com o texto :D
//listaDeNomes.forEach(nome => alert(nome+ " faz o curso de programação"))

/*var numero = Number(prompt("Digite um número")) 
for(var i=0; i<=9; i++){
    alert(i + " x " + numero + " = " +(i * numero))
}*/

//var listaDeJogos = ["FIFA", "Call of Duty", "Red Dead", "CS"]
//var novoJogo = prompt("Digite um jogo para adicionar")
//PUSH serve para ADICIONAR um NOVO REGISTRO em uma LISTA
//listaDeJogos.push(novoJogo)
//listaDeJogos.pop()//POP REMOVE o ULTIMO ELEMENTO da LISTA
//listaDeJogos.shift()//SHIFT REMOVE O PRIMEIRO ELEMENTO DA LISTA
//listaDeJogos.splice(2, 1)//SPLICE REMOVE 1 ELEMENTO A PARTIR DO INDICE 2
//listaDeJogos.reverse()//INVERTE A ORDEM
//var indice = listaDeJogos.indexOf("FIFA") //descobrir posição
//alert( indice)
//listaDeJogos.forEach( jogo => alert("Estou jogando " + jogo))


/*var listaDeJogos = ["FIFA", "Call of Duty", "Red Dead", "CS"]

var qtdeJogosNovos = prompt("Quantos jogos você quer adicionar? ")

for(var i=0; i<qtdeJogosNovos; i++){ //INTERAÇÃO = REPETIÇÃo = I
    var jogo = prompt("Digite o nome do jogo")
    listaDeJogos.push(jogo)
} 

alert(listaDeJogos)*/

/*var i=0;
while(i < 10){
    alert(i)
    i++
}*/
/*while  (operacao !=3) {
    var operacao = prompt("1= Saldo\n2- Transferencia\n3- Sair do sistema")
}*/

/*var saldo= 1000000
alert("Bem vindo ao nosso sistema!")

while (operacao !=4) {
    var operacao = prompt("1-Saldo\n2- Extrato\n3- Transferência\n4- Sair do sistema")
if(operacao==1){
    alert("Seu saldo é " + saldo)
}

else if(operacao==2){
    alert("Funcionalidade não disponível no momento")
}

if(operacao==3){
    var transferencia = prompt("Quanto você deseja transferir? ")
    saldo = (saldo-transferencia)
    alert("Seu saldo atual é "+ saldo)

}
if(operacao==4){
    alert("Agradecemos por usar nosso sistema!")
}
}*/


/*
var pessoa1 = {
    nome: "Daniel",
    sobrenome: "Andrade",
    id: 23219,
    idade: 27,
    time: "Cruzeiro"
    jogosFavoritos: [ "CS", "The Last of Us", "PES" ]
}

pessoa1.jogosFavoritos*/
/*
var listaDeNomes = [ "Maylon", "Arthur", "Ryan", "Raphael", "Maria", "Gabriel", "Macoly","Dalton", "Patrick" ] 

var curso = {
    nomeDoCurso: "Programação",
    alunos: listaDeNomes,
    cargaHoraria: 60, 
    uc: 10,
    turno: "noturno",

}


alert(curso.nomeDoCurso + " é um curso com " + curso.cargaHoraria + " horas de carga horaria, " + " estamos na uc " + curso.uc + "." + " Estes são os alunos cadastrados no turno " + curso.turno + ":"
    + curso.alunos)*/

/*
function rotinaDiaria(){
alert("Acordar")
alert("Arrumar a cama")
alert("Escovar os dentes")
alert("Tomar café da manhã")
alert("Mexer no celular")
}
rotinaDiaria()
*/


/*function somarNumeros(num1, num2){
    var resultado = num1 + num2
    alert(resultado)
}*/

/*function somarNumeros(){
    var num1 = Number(prompt("Digite o primeiro número")) 
    var num2 = Number(prompt("Digite o segundo número"))
    var resultado = num1 + num2
    alert(resultado)
}

somarNumeros()*/


/*function saudacao(nome){
    alert("Seja bem vindo, " + nome)
    alert("Digite a operação: \n1- Tal \n2- Tal")
}

saudacao("Daniel")*/

/*function multiplicarNumeros(){
    var num1 = Number(prompt("Digite o primeiro número"))
    var num2 = Number(prompt("Digite o segundo número"))
    var num3 = Number(prompt("Digite o terceiro número"))
    var resultado = num1 * num2 * num3
    alert(resultado)
}

multiplicarNumeros()*/

/*function classificador(parametro){
    var numero = Number (prompt("Digite um numero"))
        if (numero >= 10){
        alert("Maior que 10")
        }

        else if (numero==10){
            alert(numero + "é igual a 10")
        }
        else{
        alert("Menor que 10")
        }
}

classificador()
*/

/*var cep ="38702098"

alert( cep.substring(0,5) + "-" + cep.substring(5, 8) ) 
*/

/*var cpf = "15223356749"
var cpfCadastro = cpf.substring(0, 2) + "." + cpf.substring(2, 5) + "." + cpf.substring(5, 8) + "-" + cpf.substring(8, 10)

alert(cpfCadastro)*/


/*variável = var
condicional = if
lista = var+=+[]
    push = adiciona 1 item no ultimo lugar da lista
    pop = tira o ultimo elemento da lista
    shift = tira o primeiro
    reverse = inverte a ordem da lista
forEach = nome var+.forEach( produto de acordo com a variavel => alert(produto de acordo com a variavel))
for = repetição sendo o i++ acrescentando de um em um valor(var i=1; i<=10; i++){
    alert(i)
}
objeto(var nome da variavel = {
    nome:
    idade:
    altura:
    peso:
    cpf:
}
alert(nome da variavel + campo que deseja vizualizar)    
= dar propriedades a alguma variavel*/


//variavel lista repetição condicional objeto e função


alert("Bem vindo ao nosso sistema de entregas online!")
alert("Por favor, selecione uma das opções")
var listacarrinho = []
var valortotal = 0;
while (operacao != 3) {
    var operacao = prompt("1- Cadastrar \n2- Entrar \n3- Sair ")
    if (operacao == 1) {
        var nome = prompt("Digite seu nome")
        var idade = Number(prompt("Agora digite sua idade"))
        var email = prompt("Digite o seu e-mail")
        var senha = prompt("Crie a sua senha")
        var celular = Number(prompt("Digite seu número de celular"))
        var cpf = Number(prompt("Informe seu cpf"))
        var cep = Number(prompt("Informe o seu cep"))
    }

    if (operacao == 2) {
        var logE = prompt("Digite o seu e-mail já cadastrado")
        if (logE != email) {
            alert("E-mail não cadastrado")
        }
        else {
            var logS = prompt("Certo, agora digite a sua senha, também já cadastrada")
            if (logS != senha) {
                alert("Senha incorreta")
                //CONFERIR O ERRO PARA SAIR DO SISTEMA
            }
            else{
                        var pessoa1 = {
                            Nome: nome,
                            Idade: idade,
                            Email: email,
                            Senha: senha,
                            Celular: celular,
                            Cpf: cpf,
                            Cep: cep,
                        }
                        while (operacao2 != 2) {
                            var operacao2 = prompt("O que você planeja? \n1- Adicionar produtos ao carrinho \n2- Sair do sistema")
                            if (operacao2 == 1) {
                                alert("Confira os produtos do nosso sistema: \n0- Tênis \n1-Camisa \n2- Terno \n3- Carregador \n4- Fone")
                                //alert("Tênis" + ", " + "Camisa" + ", " + "Terno" + ", " + "Carregador" + ", " + "Fone")
                                var listadeprodutos = [ {
                                    nome: "Tênis",
                                    preco: 34
                                },
                                {
                                    nome: "Camisa",
                                    preco: 20
                                },
                                {
                                    nome: "Terno",
                                    preco: 60
                                },
                                {
                                    nome: "Carregador",
                                    preco: 10
                                },
                                {
                                    nome: "Fone",
                                    preco: 15
                                }]
                                var indiceDesejado = prompt("Digite o índice do seu produto")
                                alert(listadeprodutos[indiceDesejado].nome)
                                listacarrinho.push(listadeprodutos[indiceDesejado].nome)
                                valortotal = valortotal + listadeprodutos[indiceDesejado].preco
                                }
                                alert("Confira o seu carrinho: \n" + (listacarrinho) + "\n" + " Seu pedido será de: \n" + valortotal + " reais")
                              
                
                                


                                  
                if (operacao == 2) {
                    alert("Agradecemos por usar nosso sistema!")
                }
            }
        }
    }

}
}