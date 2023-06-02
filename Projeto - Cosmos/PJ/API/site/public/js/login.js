const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

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

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

function botao_login() {
  var dadosDeLogin = {
    userUsuario: input_nomeUser.value,
    senhaUsuario: input_senha.value
  }

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: dadosDeLogin.userUsuario,
        senhaServer: dadosDeLogin.senhaUsuario
    })
}).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {

        setTimeout(() => {
            window.location = "home.html";
        }, "3000")

    } else {
        throw ("Houve um erro ao tentar realizar o cadastro!");
    }
}).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    
});

return false;
}