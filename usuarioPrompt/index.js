document.getElementById('startButton').addEventListener('click', function(){
    let userName = prompt('Insira seu nome:')
    let messageDiv = document.getElementById('message')

    if(userName === null || userName.trim() === ''){
        messageDiv.textContent = 'Erro: Você deve inserir um nome.'
        messageDiv.classList.remove('hidden')
        return
    }

    let userConfirmed = confirm(`Olá, ${userName}! Deseja continuar?`);

    if(userConfirmed){
        messageDiv.textContent = 'Obrigado por continuar'
    } else {
        messageDiv.textContent = 'Interação encerrada'
    }

    messageDiv.classList.remove('hidden')
})