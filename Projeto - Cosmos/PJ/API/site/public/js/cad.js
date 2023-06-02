const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.cadastro__button');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

function cadastro_gente(){
    var dadosDoUsuario = {
      nomeCompleto: input_nome.value,
      nomeUser: input_username.value,
      email: input_email.value,
      senha: input_senha.value
    }

    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          nomeServer: dadosDoUsuario.nomeCompleto,
          userServer: dadosDoUsuario.nomeUser,
          emailServer: dadosDoUsuario.email,
          senhaServer: dadosDoUsuario.senha
      })
  }).then(function (resposta) {

      console.log("resposta: ", resposta);

      if (resposta.ok) {

          setTimeout(() => {
              window.location = "login.html";
          }, "3000")

      } else {
          throw ("Houve um erro ao tentar realizar o cadastro!");
      }
  }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      
  });

  return false;
      
}

