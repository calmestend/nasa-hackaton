import { Groq } from 'groq-sdk';

interface GroqChatCompletion {
	choices: {
		message?: {
			content?: string | null;
		};
	}[];
}

// Configuración de Groq con la opción dangerouslyAllowBrowser (solo para pruebas; no recomendado en producción)
const groq = new Groq({
	apiKey: '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',
	dangerouslyAllowBrowser: true
});

export async function getGroqChatCompletion(userMessage: string): Promise<GroqChatCompletion> {
	try {
		const completion = await groq.chat.completions.create({
			messages: [
				{
					role: 'system',
					content:
						'Eres un experto en cambio climático especializado en las emisiones de CO2. Responde de forma clara y detallada a las preguntas relacionadas con estos temas.' // Mensaje del sistema
				},
				{
					role: 'user',
					content: userMessage // Utiliza el mensaje enviado por el formulario
				}
			],
			model: 'llama3-8b-8192'
		});
		return completion;
	} catch (error) {
		console.error('Error in getGroqChatCompletion:', error);
		throw error;
	}
}
