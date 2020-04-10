import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient';
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';

export class Message {
  constructor(public content: string, public sentBy: string) {

  }
}

@Injectable()
export class ChatService {

  readonly token = environment.dialogFlow.angularBot;
  readonly client = new ApiAiClient({accessToken: this.token});

  conservation = new BehaviorSubject<Message[]>([]);
  loading = false;

  constructor() {
  }

  // adds message to source
  update(msg: Message) {
    this.conservation.next([msg]);
  }

  // sends and receive messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, 'bot');
        setTimeout(() => {
          this.loading = true;
          this.update(botMessage);
        }, 3000);
        this.loading = false;
      });
  }
}
