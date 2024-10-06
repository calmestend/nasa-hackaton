<script lang="ts">
	import { getGroqChatCompletion } from '$lib/api/openai/opeanai'; // Cambiado a groq.ts

	let userMessage = '';
	let completionContent = '';

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		try {
			const result = await getGroqChatCompletion(userMessage);

			if (result?.choices[0]?.message?.content) {
				completionContent = result.choices[0].message.content;
			} else {
				completionContent = 'No content available';
			}
		} catch (error) {
			console.error('Error fetching completion:', error);
			completionContent = 'Error fetching completion.';
		}
	}
</script>

<h1>Agente Experto en Cambio Climático</h1>

<form on:submit={handleSubmit}>
	<label for="message">Escribe tu pregunta sobre emisiones de CO2 y cambio climático:</label>
	<textarea
		id="message"
		bind:value={userMessage}
		placeholder="Ejemplo: ¿Cómo afectan las emisiones de CO2 al calentamiento global?"
		rows="5"
		cols="40"
	></textarea>
	<button type="submit">Enviar</button>
</form>

<p>Respuesta del Agente de Cambio Climático: {completionContent}</p>
