// Aguarda o carregamento completo do navegador para ativar o script
document.addEventListener("DOMContentLoaded", function() {
    
    // Captura o formulário pelo ID
    const form = document.getElementById("formContato");

    // Intercepta o momento em que o usuário clica em enviar
    form.addEventListener("submit", function(event) {
        // Impede que a página recarregue antes da validação
        event.preventDefault();

        // Captura os valores digitados e remove espaços extras nas pontas
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // REQUISITO: Validação se todos os campos estão preenchidos
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos (Nome, E-mail e Mensagem) antes de enviar.");
            return; // Para a execução do código aqui
        }

        // REQUISITO: Validação do formato do e-mail usando Expressão Regular (RegEx)
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValido.test(email)) {
            alert("Por favor, insira um formato de e-mail válido (exemplo: usuario@dominio.com).");
            return; // Para a execução do código aqui
        }

        // REQUISITO: Exibe mensagem de confirmação de envio com sucesso
        alert("Obrigado pelo contato, " + nome + "!\nMensagem enviada com sucesso!");

        // REQUISITO: Limpa todos os campos do formulário após o sucesso
        form.reset();
    });
});