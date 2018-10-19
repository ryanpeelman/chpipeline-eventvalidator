const winston = require('winston');

class Notifier {
    constructor(database) {
        this.database = database;

        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            transports: [
                new winston.transports.Console({ prettyPrint: true })
            ]
        });
    }

    buildValidationFailureNotification(event) {
        const message = "Event entry alert for " + event.patientId + " - (Heart Rate = " + event.data.heartrate + ")";
        var notification = {
            message: message,
            type: "EventEntryAlert",
            datetime: Date.now(),
            acknowledged: false,
            relatedPatientId: event.patientId
        }

        return notification;
    }

    sendValidationFailureNotification(event) {
        const notification = this.buildValidationFailureNotification(event);
        //console.log(notification);

        this.logger.log('info', notification);

        // const notificationsReference = this.database.ref('notifications/' + recipientId);
        // notificationsReference.push(notification);
    }
}

module.exports = database => new Notifier(database);