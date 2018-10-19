const express = require('express');
const app = express();

app.use(express.json());

app.post('/validate', (req, res) => {
    const eventValidator = require('./EventValidator');
    const notifier = require('./Notifier')(null);

    var event = req.body;
    if (!eventValidator.isEventValid(event)) {
        notifier.sendValidationFailureNotification(event);
    }

    res.end();
})

app.listen(process.env.PORT || 3000, () => console.log('EventValidator listening on port',  process.env.PORT || 3000));