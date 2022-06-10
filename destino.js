const elementoResposta = document.querySelector("#resposta") // querySelector() //pesquise pelo seletor >> id="resposta" 
//do h3 no HTML
// tive que instalar o browserify para conseguir trabalhar com node e document.querySelector

const inputPergunta = document.querySelector("#inputPergunta")
// Pesquisa dentro do documento onde está o #inputPergunta , acha e coloca na variável

const buttonPerguntar = document.querySelector("#buttonPerguntar")

const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas",
    "Pergunte novamente mais tarde",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente",
    "Sinais apontam que sim."
]


// clicar em fazer pergunta
function fazerPergunta(){

    if(inputPergunta.value == ""){ // se o inputPergunta , o valor for igual a 'vazio'
        alert("Digite sua pergunta")
        return // vai parar a função se for vazio
    } // se não for vazio, continua


    buttonPerguntar.setAttribute("disabled", true)
    // depois de fazer a pergunta ele vai desabilitar o botão para não ficar apertando
    // várias respostas dentro do tempo da pergunta

    const pergunta = "<div>" + inputPergunta.value + "</div>"
    // vai ser transformado em html, tem que estar correto

    //gerar numero aleatorio
    const totalRespostas = respostas.length;
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas);
    
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
    // este elementoResposta é uma modelagem do elemento H3, ele é um objeto contendo a propriedade innerHTML, e essa
    // propriedade vai receber qualquer coisa que quisermos aqui

    elementoResposta.style.opacity = 1 // para rodar novamente a opacity e aparecer as perguntas e respostas


    //sumir a resposta depois de 3 segundos
    setTimeout(function(){
        elementoResposta.style.opacity = 0,
        buttonPerguntar.removeAttribute("disabled")
    }, 3000) // 3mil milisegundos (3S)
    // pegamos a variável elementoResposta e aplicamos que o style dela ira ficar com opacity 0 depois de 3 segundos,
    // para dar o visual de sumir o resultado, e foi colocado no css no #resposta a transition: opacity 1s; para dar
    // o efeito de sumir lentamente
}    
// Math.random() gera um número aleatório de 0 a 1(0.99)
// Math.floor() arredona para o piso
// Math.random() * 19 , dentro do Math.floor , vai arredondar o piso para o * totalRespostas