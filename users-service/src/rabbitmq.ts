import { Channel, Connection } from "amqplib";
const amqp = require("amqplib");

export class RabbitMQ {
  private _channel?: Channel;
  private _connection?: Connection;

  async connect(url: string): Promise<void> {
    this._connection = await amqp.connect(url);
  }

  async createChannel(): Promise<void> {
    this._channel = await this._connection?.createChannel();
  }

  async assertQueue(topic: string): Promise<void> {
    await this._channel?.assertQueue(topic, { durable: true });
  }

  get channel(): Channel | undefined {
    return this._channel;
  }

  get connection(): Connection | undefined {
    return this._connection;
  }
}
