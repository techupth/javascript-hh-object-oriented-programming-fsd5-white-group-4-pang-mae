class Notification {
  constructor(notificationID, createdTime, content, receiver) {
    this.notificationID = notificationID;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class EmailNotification extends Notification {}

class SMSNotification extends Notification {}

const EmailNotification1 = new EmailNotification(
  "1",
  new Date(),
  "Hello! TechUp",
  "test@gmail.com"
);
const SMSNotification2 = new SMSNotification(
  "1",
  new Date(),
  "Hello! TechUp",
  "0987654321"
);

EmailNotification1.send();
SMSNotification2.send();
