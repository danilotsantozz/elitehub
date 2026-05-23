// ==========================================
// ABRIR LINKS / PÁGINAS
// ==========================================

function abrirLink(link){

  // verifica se existe link
  if(link !== ""){

    // abre o site em NOVA ABA
    window.open(link, "_blank");

  } else {

    alert("Página ainda não adicionada.");

  }

}





// ==========================================
// WHATSAPP
// ==========================================

function abrirWhatsapp(){

  window.open(
    "https://wa.me/5561991793500",
    "_blank"
  );

}





// ==========================================
// INSTAGRAM
// ==========================================

function abrirInstagram(){

  window.open(
    "https://instagram.com/elitetech.group",
    "_blank"
  );

}





// ==========================================
// EMAIL
// ==========================================

function enviarConteudo(){

  window.location.href =
  "mailto:seuemail@gmail.com?subject=Conteúdo para EliteTech";

}





// ==========================================
// SITE CARREGADO
// ==========================================

document.addEventListener("DOMContentLoaded", ()=>{



  // ==========================================
  // ELEMENTOS
  // ==========================================

  const cards = document.querySelectorAll(".card");

  const botoes = document.querySelectorAll("button");

  const entrar = document.getElementById("entrar");





  // ==========================================
  // ANIMAÇÃO DOS CARDS
  // ==========================================

  cards.forEach((card) => {

    // estado inicial
    card.style.opacity = "0";

    card.style.transform = "translateY(95px)";

    card.style.transition = "all 0.8s ease";



    // hover mouse entrar
    card.addEventListener("mouseenter", () => {

      card.style.transform =
      "scale(1.05) translateY(-10px)";

      card.style.boxShadow =
      "0 0 25px rgba(0,170,255,0.6)";

    });



    // hover mouse sair
    card.addEventListener("mouseleave", () => {

      card.style.transform = "scale(1)";

      card.style.boxShadow = "none";

    });

  });





  // ==========================================
  // ANIMAÇÃO DOS BOTÕES
  // ==========================================

  botoes.forEach((botao)=>{

    botao.style.transition = "all 0.3s ease";

    botao.style.cursor = "pointer";



    // mouse entrar
    botao.addEventListener("mouseenter", ()=>{

      botao.style.transform = "scale(1.1)";

      botao.style.boxShadow =
      "0 0 15px #00aaff";

      botao.style.background = "#00aaff";

      botao.style.color = "#fff";

    });



    // mouse sair
    botao.addEventListener("mouseleave", ()=>{

      botao.style.transform = "scale(1)";

      botao.style.boxShadow = "none";

      botao.style.background = "";

      botao.style.color = "";

    });



    // clique
    botao.addEventListener("mousedown", ()=>{

      botao.style.transform = "scale(0.95)";

    });



    // soltar clique
    botao.addEventListener("mouseup", ()=>{

      botao.style.transform = "scale(1.1)";

    });

  });





  // ==========================================
  // ANIMAÇÃO AO DESCER TELA
  // ==========================================

  function mostrarCards() {

    const alturaTela = window.innerHeight;



    cards.forEach((card, index) => {

      const topoCard =
      card.getBoundingClientRect().top;



      // se card aparecer na tela
      if (topoCard < alturaTela - 100) {

        setTimeout(() => {

          card.style.opacity = "1";

          card.style.transform =
          "translateY(0)";

        }, index * 300);

      }

    });

  }



  // scroll
  window.addEventListener(
    "scroll",
    mostrarCards
  );



  // iniciar
  mostrarCards();





  // ==========================================
  // BOTÃO ENTRAR
  // ==========================================

  if(entrar){

    entrar.addEventListener("click", ()=>{

      alert("Área de login em construção 🚀");

    });

  }

});