function sendMessage() {
	const userInput = document.getElementById('user-input')
	const chatBox = document.getElementById('chat-box')
	const userMessage = userInput.value.trim()

	if (userMessage === '') return

	// Add user's message to chat
	const userMessageElement = document.createElement('div')
	userMessageElement.className = 'message user-message'
	userMessageElement.textContent = userMessage
	chatBox.appendChild(userMessageElement)

	// Clear the input field
	userInput.value = ''

	// Scroll to the bottom of the chat
	chatBox.scrollTop = chatBox.scrollHeight

	// Simulate bot response
	setTimeout(() => {
		const botMessageElement = document.createElement('div')
		botMessageElement.className = 'message bot-message'
		botMessageElement.textContent = getBotResponse(userMessage)
		chatBox.appendChild(botMessageElement)

		// Scroll to the bottom of the chat
		chatBox.scrollTop = chatBox.scrollHeight
	}, 1000)
}

function getBotResponse(message) {
	// Simple bot responses for demonstration
	const responses = {
		привет: 'Здравствуйте! Как я могу помочь?',
		'как дела?': 'У меня всё отлично, спасибо! А у вас?',
		пока: 'До свидания! Хорошего дня!',
    'я твою мать ебал': 'Спасибо, отдаю ее тебе' , 
    'на колени мой раб сука': 'хорошо мой повелитель, я отсосу тебе в качестве извинения', 
    'паритет легенда?' : 'Да, он лучший айтишник до 15 лет, я если его увижу пятку оближу'
	}

	return responses[message.toLowerCase()] || 'Извините, я не понимаю вас.'
}
