import { RabbitMQ } from "../rabbitmq";
import { UserRabbitmq } from "../shared/variables";

export const pubUser = async (url: string, topic: string, user: UserRabbitmq | null) => {
  const rabbitmq = new RabbitMQ();
  await rabbitmq.connect(url).then(() => {
    console.log("Rabbitmq connected!!!");
  });

  await rabbitmq.createChannel();
  await rabbitmq.assertQueue(topic);

  const rabbitmqChannel = rabbitmq.channel;
  rabbitmqChannel?.sendToQueue(topic, Buffer.from(JSON.stringify(user)));
};
