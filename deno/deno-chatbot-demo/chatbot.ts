// chatbot.ts
import { Mediator } from './mediators/mediator.ts';

export class ChatBot {
  private mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  async sendMessage(message: string): Promise<void> {
    console.log(`You: ${message}`);
    const reply = await this.mediator.processMessage(message);
    console.log(`Assistant: ${reply}`);
  }
}
