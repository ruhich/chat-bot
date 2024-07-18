function sendMessage() {
	const userInput = document.getElementById('user-input')
	const chatBox = document.getElementById('chat-box')
	const userMessage = userInput.value.trim()

	if (userMessage === '') return

	
	const userMessageElement = document.createElement('div')
	userMessageElement.className = 'message user-message'
	userMessageElement.textContent = userMessage
	chatBox.appendChild(userMessageElement)

	
	userInput.value = ''

	
	chatBox.scrollTop = chatBox.scrollHeight

	
	setTimeout(() => {
		const botMessageElement = document.createElement('div')
		botMessageElement.className = 'message bot-message'
		botMessageElement.textContent = getBotResponse(userMessage)
		chatBox.appendChild(botMessageElement)

		
		chatBox.scrollTop = chatBox.scrollHeight
	}, 1000)
}

function getBotResponse(message) {
	
	const responses = {
		привет: 'Здравствуйте! Как я могу помочь?',
		'как дела?': 'У меня всё отлично, спасибо! А у вас?',
		пока: 'До свидания! Хорошего дня!',
    'дашь мне печеньку': 'Спасибо, отдаю ее тебе' , 
    'хочешь погулять?': 'прости, но я не могу гулять с тобой, я всего лишь бот(', 
    'паритет легенда?' : 'Да, он лучший айтишник до 15 лет, я если его увижу афтограф возьму!'
	}

	return responses[message.toLowerCase()] || 'Извините, я не понимаю вас.'
}
