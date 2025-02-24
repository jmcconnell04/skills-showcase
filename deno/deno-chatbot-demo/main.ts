// main.ts
import { loadConfig } from './config.ts';
import { createMediator } from './mediators/mediatorFactory.ts';
import { ChatBot } from './chatbot.ts';

async function main() {
  const config = await loadConfig();
  const mediator = createMediator(config);
  const chatBot = new ChatBot(mediator);

  console.log(`Environment: ${config.environment}`);
  console.log("Welcome to the Mediator Chat Bot! Type 'exit' to quit.");

  while (true) {
    const input = prompt('You: ');
    if (!input || input.toLowerCase() === 'exit') break;
    await chatBot.sendMessage(input);
  }

  console.log('Goodbye!');
}

if (import.meta.main) {
  main();
}
