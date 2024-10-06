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

<div>
		
	<div style="display: flex; align-items: flex-start;">
		<div style="flex: 1; text-align: left;">
			<img src="/earthchan.png" alt="Earth Chan" style="max-width: 100%; height: auto;"/>
		</div>
	
		<div style="flex: 2; padding-left: 20px;"> <!-- Agregué padding para espaciar la imagen del texto -->
			<h1 class="fondo_blanco espacio">Earth Bot</h1>

			<div class="texto-grande espacio">
				<form on:submit={handleSubmit}>
					<label for="message">Escribe tu pregunta sobre emisiones de CO₂ y cambio climático:</label>
					<br><br>
					<textarea
						id="message"
						bind:value={userMessage}
						placeholder="Ejemplo: ¿Cómo afectan las emisiones de CO₂ al calentamiento global?"
						rows="5"
						cols="40"
						style="width: 100%; height: 120px; padding: 20px; border-radius: 5px; border: 1px solid #ccc; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); resize: vertical;"
					></textarea>
					<br><br>
					<button type="submit" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); cursor: pointer; font-size: 16px; transition: background-color 0.3s;" class="padding espacio">
						Enviar
					</button>
				</form>
				<br> <!-- Espaciado adicional -->

			</div>
			<div style="margin-top: auto;" class="espacio"> <!-- Aquí es donde se agrega el estilo para empujar la respuesta hacia abajo -->
				<i style="font-size: 1.4em;">
					<p>Respuesta de Earth Bot:</p>
					<p style="margin-top: 10px;">
						<span style="color: #ADD8E6; font-family: 'Changa', sans-serif; font-optical-sizing: auto; font-weight: <weight>;">{completionContent}</span>
					</p>
				</i>
			</div>
			
	
			
		</div>
	</div>
	
</div>





