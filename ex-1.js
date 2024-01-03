class EmailNotification {
    constructor (notificationId, createdTime, content,receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send( ) {
        console.log(`Notification has been sent to ${this.receiver}`);
    }
 }
class SMSNotification {
    constructor (notificationId, createdTime, content, phoneNumber) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send( ) {
        console.log(`Notification has been sent to ${this.phoneNumber}`);               //called send method from Object  EmailNotification and SMSNotification and  return Log then will get send method  
    }
 }

const emailNotification = new EmailNotification('email', new Date(), 'email!', 'mae1234@email.com');
const smsNotification = new SMSNotification('SMS' , new Date(), 'sms!', '0987654321');

emailNotification.send();
smsNotification.send();



// SMS => notification param. It represents a unique identifier
//new Date() => createdTime param. It represents the time . format "YYYY-MM-DD HH:mm"
//content => content param. It represents the actual message content
//0987654321 => phoneNumber param. It represents the phone number of the recipient to whom the SMS will be sent

