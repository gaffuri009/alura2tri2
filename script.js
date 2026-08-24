// =========================
// PERGUNTAS DO QUIZ
// =========================

const perguntas = [
    {
        enunciado: "Você está no último ano do Ensino Médio. O ENEM e os vestibulares estão chegando. Qual será sua primeira atitude?",
        alternativas: [
            {
                texto: "Vou começar a estudar desde já.",
                afirmacao: "Você decidiu começar sua preparação com antecedência, criando uma base sólida para enfrentar as provas."
            },
            {
                texto: "Ainda tenho bastante tempo.",
                afirmacao: "Você acreditou que poderia deixar os estudos para mais tarde, adiando o início da preparação."
            }
        ]
    },

    {
        enunciado: "Como você pretende estudar?",
        alternativas: [
            {
                texto: "Resolver exercícios e simulados.",
                afirmacao: "Você praticou bastante e se acostumou com o estilo das questões do ENEM e dos vestibulares."
            },
            {
                texto: "Assistir videoaulas e fazer resumos.",
                afirmacao: "Você fortaleceu seus conhecimentos teóricos antes das provas."
            }
        ]
    },

    {
        enunciado: "Além do ENEM, você pretende fazer outros vestibulares?",
        alternativas: [
            {
                texto: "Sim, quero aumentar minhas oportunidades.",
                afirmacao: "Você ampliou suas chances de ingressar em uma universidade."
            },
            {
                texto: "Não, vou focar apenas no ENEM.",
                afirmacao: "Você concentrou seus esforços em uma única prova."
            }
        ]
    },

    {
        enunciado: "Na reta final, como você cuida da sua saúde?",
        alternativas: [
            {
                texto: "Durmo bem e faço pausas.",
                afirmacao: "Você chegou às provas descansado e mais confiante."
            },
            {
                texto: "Estudo até de madrugada todos os dias.",
                afirmacao: "O excesso de estudos acabou causando bastante cansaço."
            }
        ]
    },

    {
        enunciado: "Chegou o grande dia da prova. Como você se sente?",
        alternativas: [
            {
                texto: "Confiante e preparado.",
                afirmacao: "Você conseguiu manter a calma e fazer a prova com tranquilidade."
            },
            {
                texto: "Muito nervoso.",
                afirmacao: "O nervosismo dificultou sua concentração em alguns momentos."
            }
        ]
    }
];

// =========================
// VARIÁVEIS
// =========================

let indicePergunta = 0;
let historia = [];

// =========================
// ELEMENTOS HTML
// =========================

const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");

const barra = document.getElementById("barra");

const resultado = document.getElementById("resultado");
const textoResultado = document.getElementById("textoResultado");

const reiniciar = document.getElementById("reiniciar");

// =========================
// INICIAR QUIZ
// =========================

mostrarPergunta();

// =========================
// MOSTRAR PERGUNTA
// =========================

function mostrarPergunta(){

    alternativas.innerHTML = "";

    const perguntaAtual = perguntas[indicePergunta];

    pergunta.textContent = perguntaAtual.enunciado;

    atualizarBarra();

    perguntaAtual.alternativas.forEach(alternativa =>{

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.onclick = () => respostaSelecionada(alternativa);

        alternativas.appendChild(botao);

    });

}

// =========================
// ESCOLHA DO USUÁRIO
// =========================

function respostaSelecionada(alternativa){

    historia.push(alternativa.afirmacao);

    indicePergunta++;

    if(indicePergunta < perguntas.length){

        mostrarPergunta();

    }else{

        mostrarResultado();

    }

}

// =========================
// BARRA DE PROGRESSO
// =========================

function atualizarBarra(){

    const progresso = (indicePergunta / perguntas.length) * 100;

    barra.style.width = progresso + "%";

}

// =========================
// RESULTADO FINAL
// =========================

function mostrarResultado(){

    barra.style.width = "100%";

    document.querySelector(".caixa-principal").style.display = "none";

    resultado.classList.remove("escondido");

    let texto = "";

    historia.forEach(item=>{

        texto += item + " ";

    });

    texto += "<br><br>";

    texto += "<strong>Conclusão:</strong><br><br>";

    texto += "As decisões tomadas durante a preparação para o ENEM e os vestibulares fazem diferença no resultado final. Organização, disciplina e equilíbrio aumentam as chances de conquistar uma vaga na faculdade desejada. Independentemente do caminho escolhido, sempre é possível aprender com a experiência e continuar evoluindo.";

    textoResultado.innerHTML = texto;

}

// =========================
// REINICIAR
// =========================

reiniciar.addEventListener("click", ()=>{

    indicePergunta = 0;

    historia = [];

    resultado.classList.add("escondido");

    document.querySelector(".caixa-principal").style.display = "block";

    mostrarPergunta();

});