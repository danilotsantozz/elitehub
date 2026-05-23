// ==========================================
// ELITETECH LOGIN SYSTEM
// ==========================================





// ==========================================
// LISTA DE USUÁRIOS
// ==========================================

const usuarios = [

  // ==========================================
  // ADMINS
  // ==========================================

  {
    usuario:"adm01",
    senha:"danilo01"
  },

  {
    usuario:"adm02",
    senha:"alan02"
  },

  {
    usuario:"adm03",
    senha:"yuri03"
  },





  // ==========================================
  // USUÁRIOS NORMAIS
  // ==========================================

  {
    usuario:"usuario01",
    senha:"usuario01"
  },

  {
    usuario:"usuario02",
    senha:"usuario02"
  },

  {
    usuario:"usuario03",
    senha:"usuario03"
  },

  {
    usuario:"usuario04",
    senha:"usuario04"
  },

  {
    usuario:"usuario05",
    senha:"usuario05"
  },

  {
    usuario:"usuario06",
    senha:"usuario06"
  },

  {
    usuario:"usuario07",
    senha:"usuario07"
  },

  {
    usuario:"usuario08",
    senha:"usuario08"
  },

  {
    usuario:"usuario09",
    senha:"usuario09"
  },

  {
    usuario:"usuario10",
    senha:"usuario10"
  }

];







// ==========================================
// FUNÇÃO LOGIN
// ==========================================

function fazerLogin(){



  // ==========================================
  // PEGAR INPUTS
  // ==========================================

  const usuario =
  document.getElementById("usuario").value;

  const senha =
  document.getElementById("senha").value;

  const status =
  document.getElementById("status");





  // ==========================================
  // VERIFICAR SE INPUTS ESTÃO VAZIOS
  // ==========================================

  if(
    usuario === "" ||
    senha === ""
  ){

    status.innerHTML =
    "Preencha usuário e senha.";

    status.style.color = "red";

    return;

  }







  // ==========================================
  // PROCURAR USUÁRIO
  // ==========================================

  const usuarioEncontrado =
  usuarios.find(u =>

    u.usuario === usuario &&
    u.senha === senha

  );







  // ==========================================
  // LOGIN CORRETO
  // ==========================================

  if(usuarioEncontrado){




    // mensagem
    status.innerHTML =
    "Login realizado com sucesso 🚀";

    status.style.color = "#1faa59";





    // salvar usuário logado
    localStorage.setItem(
      "usuarioLogado",
      usuario
    );





    // pequena animação
    document.querySelector(".login-box")
    .style.transform =
    "scale(1.03)";





    // abrir página principal
    setTimeout(()=>{

  window.location.href = "hub.html";

},1200);





  } else {




    // ==========================================
    // LOGIN ERRADO
    // ==========================================

    status.innerHTML =
    "Usuário ou senha incorretos.";

    status.style.color = "red";





    // animação erro
    const box =
    document.querySelector(".login-box");

    box.style.animation =
    "tremer 0.3s";





    setTimeout(()=>{

      box.style.animation = "";

    },300);

  }

}







// ==========================================
// ENTER PRA LOGAR
// ==========================================

document.addEventListener("keydown",(e)=>{

  if(e.key === "Enter"){

    fazerLogin();

  }

});







// ==========================================
// ANIMAÇÃO DE ENTRADA
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
()=>{

  const box =
  document.querySelector(".login-box");



  box.style.opacity = "0";

  box.style.transform =
  "translateY(50px)";



  setTimeout(()=>{

    box.style.transition =
    "all 1s ease";

    box.style.opacity = "1";

    box.style.transform =
    "translateY(0)";

  },200);

});







// ==========================================
// MOSTRAR / ESCONDER SENHA
// ==========================================

const senhaInput =
document.getElementById("senha");



senhaInput.addEventListener("focus",()=>{

  senhaInput.style.boxShadow =
  "0 0 15px rgba(47,128,237,0.35)";

});



senhaInput.addEventListener("blur",()=>{

  senhaInput.style.boxShadow =
  "none";

});







// ==========================================
// INPUTS EFEITOS
// ==========================================

const inputs =
document.querySelectorAll("input");



inputs.forEach((input)=>{

  input.addEventListener("focus",()=>{

    input.style.transform =
    "scale(1.02)";

  });



  input.addEventListener("blur",()=>{

    input.style.transform =
    "scale(1)";

  });

});







// ==========================================
// VERIFICAR LOGIN
// ==========================================

const usuarioLogado =
localStorage.getItem(
  "usuarioLogado"
);



console.log(
  "Usuário logado:",
  usuarioLogado
);