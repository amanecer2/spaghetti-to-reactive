// https://medium.com/@benlesh/on-the-subject-of-subjects-in-rxjs-2b08b7198b93
function PubSub(){

    let sinks = {};

    function publish(event, data) {
        if (!sinks[event]) {
            console.warn(`${event} does not have any registered listeners. Publish cancelled.`);
            return false;
        }

        //return this.sinks[event].next(data);//rxjs 5
        return sinks[event].onNext(data);
    }

    function subscribe(event, cb) {
        if (!cb) {
            console.warn('No callback provided for subscription. Subscription cancelled.');
            return false;
        }

        if (!sinks[event]) {
            sinks[event] = new Rx.Subject();
        }

        return sinks[event].subscribe(cb);
    }

    function destroy() {
        for (const s in sinks) {
            if (sinks.hasOwnProperty(s)) {
                //this.sinks[s].unsubscribe(); //rxjs 5
                sinks[s].dispose();
            }
        }

        sinks = {};
    }

    return {
        destroy,
        publish,
        subscribe
    }
}