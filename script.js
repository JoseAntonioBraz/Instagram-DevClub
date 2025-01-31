// Função para alternar entre mostrar/esconder a senha
function togglePassword() {
    let passwordInput = document.getElementById("password");
    let showButton = document.querySelector(".show-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showButton.textContent = "Ocultar";
    } else {
        passwordInput.type = "password";
        showButton.textContent = "Mostrar";
    }
}

// Função para exibir o botão "Mostrar" apenas quando o usuário digitar algo
function toggleShowButton() {
    let passwordInput = document.getElementById("password");
    let showButton = document.querySelector(".show-password");

    if (passwordInput.value.length > 0) {
        showButton.style.display = "block";
    } else {
        showButton.style.display = "none";
    }
}
