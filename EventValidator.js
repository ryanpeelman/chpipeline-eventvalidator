
class EventValidator {
    isEventValid(event) {
        if (!event.data.hasOwnProperty("heartrate")) {
            return true;
        }

        if (!event.data.heartrate) {
            return true;
        }

        const heartrateLowerThreshold = 50;
        const heartrateUpperThreshold = 85;
        const heartrate = parseInt(event.data.heartrate, 10);
        return heartrateLowerThreshold < heartrate && heartrate < heartrateUpperThreshold;
    }
}

module.exports = new EventValidator();