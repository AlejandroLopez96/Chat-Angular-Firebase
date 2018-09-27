import { User } from '../interfaces/user';

export class Message {
  message: string;
  createdAt: number;
  sender: User;

  constructor({message, createdAt, sender}) {
    this.message = message;
    this.createdAt = createdAt;
    this.sender = sender;
  }
}
