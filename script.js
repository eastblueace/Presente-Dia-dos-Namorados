// 1. Definimos a data de início do namoro
const dataInicial = new Date("2024-05-13T00:00:00");

// 2. Função que atualiza o contador
function atualizarContador() {
    const agora = new Date(); // Pega a data e hora atuais
    const diferencaMs = agora - dataInicial; // Diferença em milissegundos

    // Converte milissegundos para segundos, minutos, horas e dias
    const segundosTotais = Math.floor(diferencaMs / 1000);
    const dias = Math.floor(segundosTotais / 86400);
    const horas = Math.floor((segundosTotais % 86400) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    // Monta a string com o tempo formatado
    const texto = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;

    // Exibe no elemento com id="contador"
    document.getElementById("contador").innerHTML = `<p>${texto}</p>`;

}

// 3. Atualiza o contador uma vez imediatamente
atualizarContador();

// 4. Atualiza o contador a cada segundo (1000ms)
setInterval(atualizarContador, 1000);

const frasesFofas = [
    "I've loved you three summers now, honey, but I want 'em all.",
    "All these people think love's for show / But I'd die for you in secret",
    "With you I'd dance in a storm in my best dress, fearless",
    "I find myself running home to your sweet nothings",
    "A single thread of gold tied me to you / And isn't it just so pretty to think all along there was some invisible string tying you to me?",
    "Every dead end street led you straight to me, now you're all I need / I'm so glad I loved all the girls before you",
    "Every time you smile, I smile / And every time you shine, I'll shine for you",
    "I drive different roads but they all lead back to you",
    "Love, we are the new romantics",
    "Running home to your sweet nothings",
    "You and me, that's my whole world",
    "Your place is here with me",
    "I'm only me when I'm with you",
    "I've never seen anybody shine the way you do",
    "Your eyes are like coming home",
    "And now I see daylight",
    "All's well that ends well to end up with you",
    "We could get married, have ten kids and teach them how to dream",
    "You are the best thing that's ever been mine",
    "All they keep asking me is if I'm gonna be your bride",
    "I don't wanna dance if I'm not dancing with you",
    "No one's ever had me, not like you",
    "I knew you were a tattoo kiss, a permanent one",
    "You drew stars around my scars",
    "I was an old cardigan under someone's bed, you put me on and said I was your favorite",
    "I'd be screwed if I didn't love what people say about me",
    "All they keep asking me is if I'm gonna be your bride",
    "When I lost him, the one I was dancing with in New York, no shoes, looked up at the sky and it was maroon",
    "I wake up with your memory over me",
    "I broke his heart 'cause he was nice, he was sunshine, I was midnight rain",
    "I never think of him, except on midnights like this",
    "Darling, I rose up from the dead, I do it all the time",
    "Maybe I got what I deserved, but what's yours is mine",
    "I found a love for me",
    "Cause all of me loves all of you",
    "You got a smile that could light up this whole town",
    "You are a firework",
    "If perfect is what you're searching for, then just stay the same",
    "I never knew you were the someone waiting for me",
    "Love your curves and all your edges, all your perfect imperfections",
    "If you could see that I'm the one who understands you",
    "No matter how many break-up songs you write, no matter how many times you get hurt, you're always gonna fall in love again.",
    "I'll leave my window open, 'Cause I'm too tired to call your name. Just know I'm right here hoping that you'll come in with the rain.",
    "Time won't fly, it's like I'm paralyzed by it / I'd like to be my old self again, but I'm still trying to find it",
    "Being so in love that you do anything, without fear of the consequences.",
    "Wanting to always be together with the loved one, in all places and situations.",
    "Feeling betrayed and realizing something that was yours now belongs to another.",
    "I made a promise I'd be true, and baby, you promised too",
    "I love to see you smiling, your smile makes me forget everything",
    "And you were my best friend / And I was so in love",
    "My heart's been borrowed and yours has been blue / All's well that ends well to end up with you",
    "I could go on and on, on and on / About how I survived",
    "Is this the end of all the endings? / My broken bones are healing",
    "I loved you in secret / Then I loved you out loud",
    "You are the only one of you",
    "I got a blank space, baby / And I'll write your name",
    "I don't wanna look at anything else now that I saw you",
    "This is a love story, baby, just say 'Yes'",
    "Long live the walls we crashed through / I had the time of my life with you",
    "I'm captivated by you, baby, like a firework show",
    "And for once, I let go / I got drunk on something stronger than the drinks in the bar",
    "But you'll come back each time you leave / 'Cause darling, I'm a nightmare dressed like a daydream",
    "And darling, it was good never looking down / And right there where we stood was holy ground",
    "You call me up again just to break me like a promise",
    "We were in love, true love",
    "And the album plays in reverse / And your smile is a tiny dot",
    "And when we go crashing down, we come back every time",
    "The whole time, I was wishing you were mine",
    "You just wanna know those people / That you've been in love with forever",
    "I once believed love would be burning red / But it's golden, like daylight",
    "You know I adore you, I'm crazier for you",
    "I know I'm not much, but I'm all I have / And you are the one I want to share it with",
    "I remember when we broke up, the first time",
    "Our songs, our films, united we stand",
    "And I got that good girl faith and a tight little skirt",
    "And I don't know what I'm gonna do / 'Bout this thing you started",
    "And I know I'll never tell you, but I'll make you look",
    "We are never, ever, ever getting back together",
    "And you got that long hair, slicked back, white t-shirt",
    "I'm dying to know if he's coming over",
    "You are the best thing that's ever been mine",
    "You make me so happy, it turns back to sad",
    "My love had been frozen, deep blue, but you painted me golden",
    "I swear I don't love the drama, it loves me",
    "Cause we were just kids when we fell in love",
    "I knew you were trouble when you walked in",
    "And in the death of her reputation, she felt truly alive",
    "They told me to be careful with your heart",
    "My heart was a carousel, but it kept coming back to you",
    "And for a while, I could just look at you",
    "I'm in a room full of strangers trying to get to you",
    "And in my mind, we got a love that's bigger than the whole sky",
    "I don't want to live if it isn't with you",
    "You touch my hand and my whole world changes",
    "I found a love that's stronger than I am",
    "You're the kind of guy the ladies want and I'm the kind of girl who knows what she wants",
    "And I remember thinking, 'I'm so glad I'm with him'",
    "With you, I could keep a secret",
    "And it's a new day, but it's not a new love"
];

// Função para gerar uma frase aleatória
function mostrarFraseFofa() {
    const indice = Math.floor(Math.random() * frasesFofas.length); // sorteia uma posição
    const frase = frasesFofas[indice]; // pega a frase sorteada
    const fraseGerada = document.getElementById("fraseGerada");

    // Remove classe (zera opacidade)
    fraseGerada.classList.remove("mostrar");

    setTimeout(() => {
        // Troca a frase
        fraseGerada.innerHTML = `<p>${frase}</p>`;

        // Aguarda pequeno tempo e adiciona classe pra ativar o fade-in
        fraseGerada.classList.add("mostrar");
    }, 800); // 800 milissegundos depois
}

// Ativa a função quando o botão for clicado
document.getElementById("botaoFrase").addEventListener("click", mostrarFraseFofa);

// =================== FIREBASE DATABASE INTEGRATION ===================

// Função para salvar evento no Firebase
async function salvarEventoFirebase(evento) {
    try {
        const response = await fetch(`${firebaseConfig.databaseURL}/eventos.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: evento.data,
                descricao: evento.descricao,
                imagem: evento.imagem, // Base64 ou null
                timestamp: new Date().toISOString()
            })
        });

        if (!response.ok) {
            throw new Error('Erro ao salvar no Firebase');
        }

        console.log('Evento salvo no Firebase com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar evento:', error);
        alert('Erro ao salvar evento no Firebase. Tente novamente.');
    }
}

// Função para carregar eventos do Firebase
async function carregarEventosFirebase() {
    try {
        const response = await fetch(`${firebaseConfig.databaseURL}/eventos.json`);

        if (!response.ok) {
            throw new Error('Erro ao carregar do Firebase');
        }

        const dados = await response.json();

        if (dados) {
            const linhaDoTempo = document.getElementById('linhaDoTempo');
            // Limpa a linha do tempo antes de carregar
            linhaDoTempo.innerHTML = '';

            // Converte objeto em array e ordena por timestamp
            const eventos = Object.values(dados).sort((a, b) =>
                new Date(a.timestamp) - new Date(b.timestamp)
            );

            // Renderiza cada evento
            eventos.forEach(evento => {
                criarElementoEvento(evento.data, evento.descricao, evento.imagem);
            });

            console.log(`${eventos.length} eventos carregados do Firebase!`);
        }
    } catch (error) {
        console.error('Erro ao carregar eventos:', error);
    }
}

// Função para criar elemento de evento na timeline
function criarElementoEvento(data, descricao, imagemBase64 = null) {
    const eventoDiv = document.createElement('div');
    eventoDiv.classList.add('eventoLinhaDoTempo');

    let conteudoHTML = `<p><strong>${data}</strong></p><p>${descricao}</p>`;

    if (imagemBase64) {
        conteudoHTML += `<img src="${imagemBase64}" alt="Imagem do evento" style="max-width: 200px; border-radius: 10px; margin-top: 10px;">`;
    }

    eventoDiv.innerHTML = conteudoHTML;
    document.getElementById('linhaDoTempo').appendChild(eventoDiv);
}

// Função para converter imagem para Base64
function converterImagemParaBase64(arquivo) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(arquivo);
    });
}

// Carrega eventos quando a página carrega
document.addEventListener('DOMContentLoaded', function () {
    // Aguarda um pouco para garantir que o Firebase está configurado
    setTimeout(() => {
        carregarEventosFirebase();
    }, 1000);
});

// =================== FORMULÁRIO DE EVENTOS ATUALIZADO ===================

const form = document.getElementById('formEvento');

// Captura o envio do formulário
form.addEventListener('submit', async function (event) {
    event.preventDefault(); // Impede que a página recarregue

    // Pega os dados do formulário
    const data = document.getElementById('dataEvento').value;
    const descricao = document.getElementById('descricaoEvento').value;
    const imagemInput = document.getElementById('imagemEvento');
    const imagem = imagemInput.files[0]; // Pode ser undefined

    let imagemBase64 = null;

    // Se houver imagem, converte para Base64
    if (imagem) {
        try {
            imagemBase64 = await converterImagemParaBase64(imagem);
        } catch (error) {
            console.error('Erro ao converter imagem:', error);
            alert('Erro ao processar imagem. Tente novamente.');
            return;
        }
    }

    // Cria o objeto do evento
    const eventoObj = {
        data: data,
        descricao: descricao,
        imagem: imagemBase64
    };

    // Salva no Firebase
    await salvarEventoFirebase(eventoObj);

    // Cria o elemento do evento na interface
    criarElementoEvento(data, descricao, imagemBase64);

    // Limpa os campos
    form.reset();
});