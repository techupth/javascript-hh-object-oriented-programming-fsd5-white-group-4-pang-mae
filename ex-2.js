class Notification { 
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class EmailNotification extends Notification { 
    constructor (notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content);
        this.receiver = receiver;
    }
}

class SMSNotification extends Notification {
    constructor (notificationId, createdTime, content, phoneNumber) {
        super(notificationId, createdTime, content);
        this.phoneNumber = phoneNumber;
    }
    send(){
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
 }

 const emailNotification = new EmailNotification("01","2023-12-15 1:06" ,"Good Morning", "maeday@gmail.com");
 const smsNotification = new SMSNotification("01","2023-12-15 1:06","Ring Ring" , "0987654321");

emailNotification.send();
smsNotification.send();