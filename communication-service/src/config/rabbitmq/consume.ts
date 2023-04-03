import { RabbitMQ } from "../../rabbitmq";
import { ConsumeMessage } from "amqplib";
import { User } from "../../models/usersModel";

export const consume = async (url: string, topic: string) => {
  const rabbitmq = new RabbitMQ();
  await rabbitmq.connect(url).then(() => {
    console.log("Rabbitmq connected!!");
  });

  await rabbitmq.createChannel();
  await rabbitmq.assertQueue(topic);

  const rabbitmqChannel = rabbitmq.channel;
  rabbitmqChannel?.consume(topic, async (data: ConsumeMessage | null) => {
    const user = JSON.parse(data ? data.content.toString() : "Nothing");
    console.log(`User comsume: ${data && data.content.toString()}`);
    await User.build(user).save();

    rabbitmqChannel.ack(data!);
  });
};
