// https://medium.com/@benlesh/on-the-subject-of-subjects-in-rxjs-2b08b7198b93
function PubSub(){

    let event = {};

    function publish(eventName, data) {
        if (!event[eventName]) {
            console.warn(`${eventName} does not have any registered listeners. Publish cancelled.`);
            return false;
        }

        return event[eventName].next(data);//rxjs 5
        //return event[eventName].onNext(data); //rx 4
    }

    function subscribe(eventName, cb) {
        if (!cb) {
            console.warn('No callback provided for subscription. You must implement subscribe for yourself.');
        }

        if (!event[eventName]) {
            event[eventName] = new Rx.Subject();
        }

        return cb ?  event[eventName].subscribe(cb) : event[eventName];
    }

    function destroy() {
        for (const s in event) {
            if (event.hasOwnProperty(s)) {
                event[s].unsubscribe(); //rxjs 5
                //event[s].dispose(); //rx 4
            }
        }

        event = {};
    }

    return {
        destroy,
        publish,
        subscribe
    }
}