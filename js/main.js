const botao = document.querySelector("#start-button");
const botaoq = document.getElementById("perguntas");

const alt1 = document.getElementById("alt1");
const alt2 = document.getElementById("alt2");
const alt3 = document.getElementById("alt3");
const alt4 = document.getElementById("alt4");

const enun = document.getElementById("enunciado");

const telaInicial = document.querySelector("#tela-inicial");
const telaAvaliacao = document.querySelector("#tela-avaliacao");
const telaRev = document.getElementById("tela-revelacao")
const telaQuiz = document.getElementById("tela-quiz");
const telaQuiz2 = document.getElementById("tela-quiz2");
const telaProces = document.getElementById("tela-processamento");
const telaFim = document.getElementById("tela-final");

const pMais = document.getElementById("pontos")


let pontosQ = 0;

function quiz() {
    trocarTela(telaQuiz, telaQuiz2);
    mostrarQuestao();
};

function selecionado(alternativaEscolhida){
    if (alternativaEscolhida === questoes[indiceQ].correta) {
        pontosQ++;
        console.log(pontosQ);
        pMais.textContent = pontosQ;
    }

    indiceQ++;
    if (indiceQ === questoes.length){
        trocarTela(telaQuiz2, telaProces);
        function verP() {
            if (pontosQ >= 3) {
                trocarTela(telaProces, telaRev);
                setTimeout(finalizarOperação, 10000);
            }
            else {
                
                trocarTela(telaProces, telaQuiz2);
                pontosQ = 0;
                indiceQ = 0;
                pMais.textContent = 0;
                mostrarQuestao();
            };
        }
        setTimeout(verP, 3000);
    }
    else{
        mostrarQuestao();
    };
};

function iniciarAvaliacao() {
    console.log("ACESSO AO SISTEMA SOLICITADO");
    trocarTela(telaInicial, telaAvaliacao)
};

botaoq.addEventListener("click", function(){
    quiz();
});

botao.addEventListener("click", function(){
    iniciarAvaliacao();
    intervaloFrases = setInterval(alterarFrase, 1000);
});

alt1.addEventListener("click", function(){
    selecionado(0);
    
});

alt2.addEventListener("click", function(){
    selecionado(1);
});

alt3.addEventListener("click", function(){
    selecionado(2);
});

alt4.addEventListener("click", function(){
    selecionado(3);
});

const questoes = [
    {
        pergunta : "Quando nos conhecemos? (pulta pergunta de baitola)",
        
        alternativas: [
        "ontem",
        "amanhã",
        "2018",
        "2019"
        ],

        correta: 2
    },

    {
        pergunta : "Quem é melhor nos jogos?",
        
        alternativas: [
        "Ygo",
        "O caba que ta respondendo essa pergunta",
        "MEU GRANDE AMIGO YGUINHO GAMEPLAYS",
        "A poeira no canto do meu quarto"
        ],

        correta: 3
    },

    {
        pergunta : "Quanto é 1+1?",
        
        alternativas: [
        "2",
        "2 né porra",
        "Puta que pariu qual idiota fez essas questões?",
        "Não sei"
        ],

        correta: 2
    },

    {
        pergunta : "ME RESPONDE AGORA QUANTO É 5+5!",
        
        alternativas: [
        "9",
        "10",
        "centivincis cinkus",
        "obviamente centivintis"
        ],

        correta: 2
    },

    {
        pergunta : "Qual é o número dessa questão? (não contou né otario?KKKKKK)",
        
        alternativas: [
        "cato",
        "sinko",
        "seizi",
        "setchi"
        ],

        correta: 1
    },

    {
        pergunta : "O dev teve que contar as questões pra responder a última?",
        
        alternativas: [
        "Sim, ele é mó otário",
        "Nah",
        "Não sei",
        "Sim"
        ],

        correta: 0
    }
]

const frases = [
    "Cruzando dados",
    "Cruzando dados",
    "Rastreando ID.",
    "Rastreando ID..",
    "Rastreando ID...",
    "Verificando retina.",
    "Verificando retina..",
    "Verificando retina...",
    "Verificando retina.",
    "Verificando retina..",
    "Pegue na minha e balance",
    "Checando anos de amizade",
    "Checando anos de amizade",
    "Checando anos de amizade",
    "Checando anos de amizade",
    "Apreciando o cu do curioso.",
    "Apreciando o cu do curioso..",
    "Hmm, que sabor",
    "ACESSO LIBERADO",
    "ACESSO LIBERADO",
    "ACESSO LIBERADO"
];

const elementoFrase = document.getElementById("frase");
let intervaloFrases;

let indice = 0;

function alterarFrase() {
    elementoFrase.textContent = frases[indice];
    indice++;

    if (indice >= frases.length){
        clearInterval(intervaloFrases);
        trocarTela(telaAvaliacao, telaQuiz)
    };
};

let indiceQ = 0

function finalizarOperação() {
    trocarTela(telaRev, telaFim);
}


function mostrarQuestao() {
    enun.textContent = questoes[indiceQ].pergunta;
    alt1.textContent = questoes[indiceQ].alternativas[0];
    alt2.textContent = questoes[indiceQ].alternativas[1];
    alt3.textContent = questoes[indiceQ].alternativas[2];
    alt4.textContent = questoes[indiceQ].alternativas[3];

};

function trocarTela(telaAtual, proximaTela) {
    telaAtual.hidden = true;
    proximaTela.hidden = false;

}



