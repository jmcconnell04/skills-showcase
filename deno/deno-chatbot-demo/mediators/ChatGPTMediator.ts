// mediators/ChatGPTMediator.ts
import { AppConfig } from '../config.ts';
import { AbstractMediator } from './AbstractMediator.ts';

export class ChatGPTMediator extends AbstractMediator {
  private apiKey: string;
  private endpoint: string;

  constructor(config: AppConfig) {
    super(config);
    this.apiKey = config.openaiApiKey as string;
    this.endpoint = config.openaiEndpoint;
  }

  protected async fetchResponse(message: string): Promise<string> {
    console.log(`ChatGPTMediator received: ${message}`);
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: message },
        ],
      }),
    });
    const data = await response.json();
    return data.choices?.[0]?.message?.content || 'No reply from ChatGPT.';
  }
}
