// Importações do Firebase para o Database
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// 1. Definimos a data de início do namoro
const dataInicial = new Date("2024-05-13T00:00:00");

// 2. Função que atualiza o contador
function atualizarContador() {
    const agora = new Date();
    const diferencaMs = agora - dataInicial;

    const segundosTotais = Math.floor(diferencaMs / 1000);
    const dias = Math.floor(segundosTotais / 86400);
    const horas = Math.floor((segundosTotais % 86400) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    const texto = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    document.getElementById("contador").innerHTML = `<p>${texto}</p>`;
}

// 3. Atualiza o contador uma vez imediatamente
atualizarContador();

// 4. Atualiza o contador a cada segundo (1000ms)
setInterval(atualizarContador, 1000);

// Frases fofas (mantive como estava)
const frasesFofas = [
    "I've loved you three summers now, honey, but I want 'em all.",
    // ... seu array continua igual ...
    "And it's a new day, but it's not a new love"
];

// Função para gerar uma frase aleatória
function mostrarFraseFofa() {
    const indice = Math.floor(Math.random() * frasesFofas.length);
    const frase = frasesFofas[indice];
    const fraseGerada = document.getElementById("fraseGerada");

    fraseGerada.classList.remove("mostrar");

    setTimeout(() => {
        fraseGerada.innerHTML = `<p>${frase}</p>`;
        fraseGerada.classList.add("mostrar");
    }, 800);
}

document.getElementById("botaoFrase").addEventListener("click", mostrarFraseFofa);

// --- INÍCIO DA INTEGRAÇÃO COM FIREBASE ---

const database = getDatabase(); // Pega a instância do DB

// Referência para os eventos na linha do tempo
const eventosRef = ref(database, 'linhaDoTempo');

// Função para salvar evento no Firebase
function salvarEvento(evento) {
    return push(eventosRef, evento);
}

// Função para criar o HTML do evento e adicionar na timeline (recebe um objeto evento)
function criarEventoNaTimeline(evento) {
    const linhaDoTempo = document.getElementById('linhaDoTempo');

    const eventoDiv = document.createElement('div');
    eventoDiv.classList.add('eventoLinhaDoTempo');

    let conteudoHTML = `<p><strong>${evento.data}</strong></p><p>${evento.descricao}</p>`;

    if (evento.imagemBase64) {
        conteudoHTML += `<img src="${evento.imagemBase64}" alt="Imagem do evento" style="max-width: 200px; border-radius: 10px; margin-top: 10px;">`;
    }

    eventoDiv.innerHTML = conteudoHTML;
    linhaDoTempo.appendChild(eventoDiv);
}

// Escuta mudanças na linha do tempo no Firebase e atualiza a UI
onValue(eventosRef, (snapshot) => {
    const dados = snapshot.val();
    const linhaDoTempo = document.getElementById('linhaDoTempo');

    // Limpa a timeline antes de atualizar (evita duplicar)
    linhaDoTempo.innerHTML = '';

    if (dados) {
        // dados é um objeto onde cada key é um id e value é o evento
        Object.values(dados).forEach(evento => {
            criarEventoNaTimeline(evento);
        });
    }
});

// Manipula o envio do formulário para salvar no Firebase (imagem fica em base64, por enquanto)
const form = document.getElementById('formEvento');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const data = document.getElementById('dataEvento').value;
    const descricao = document.getElementById('descricaoEvento').value;
    const imagemInput = document.getElementById('imagemEvento');
    const imagem = imagemInput.files[0]; // Pode ser undefined

    if (imagem) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const evento = {
                data: data,
                descricao: descricao,
                imagemBase64: e.target.result
            };
            salvarEvento(evento).then(() => {
                form.reset();
            });
        };
        reader.readAsDataURL(imagem);
    } else {
        const evento = {
            data: data,
            descricao: descricao
            // Sem imagem
        };
        salvarEvento(evento).then(() => {
            form.reset();
        });
    }
});
