const form = document.getElementById("form");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const feedback = document.getElementById("feedback");
const switchBtn = document.getElementById("switch-btn");
const switchMsg = document.getElementById("switch-msg");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");

let isLogin = true;

switchBtn.addEventListener("click", () => {
    isLogin = !isLogin;
    if (isLogin) {
        nomeInput.classList.add("hide");
        submitBtn.textContent = "Entrar";
        formTitle.textContent = "Login";
        switchMsg.textContent = "Ainda não tem conta?";
        switchBtn.textContent = "Cadastre-se";
    } else {
        nomeInput.classList.remove("hide");
        submitBtn.textContent = "Cadastrar";
        formTitle.textContent = "Cadastro";
        switchMsg.textContent = "Já tem conta?";
        switchBtn.textContent = "Entrar";
    }
    feedback.textContent = "";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const senha = senhaInput.value;

    if (!email || !senha || (!isLogin && !nome)) {
        feedback.textContent = "Preencha todos os campos!";
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    if (isLogin) {
        const usuario = usuarios.find(u => u.email === email);
        if (!usuario) {
            feedback.textContent = "Usuário não encontrado!";
            return;
        }
        if (usuario.senha !== senha) {
            feedback.textContent = "Senha incorreta!";
            return;
        }
        feedback.style.color = "green";
        feedback.textContent = `Bem-vindo, ${usuario.nome}!`;
    } else {
        if (usuarios.find(u => u.email === email)) {
            feedback.textContent = "Email já cadastrado!";
            return;
        }

        const novoUsuario = { nome, email, senha };
        usuarios.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        feedback.style.color = "green";
        feedback.textContent = "Cadastro realizado com sucesso!";
        form.reset();
    }
});
