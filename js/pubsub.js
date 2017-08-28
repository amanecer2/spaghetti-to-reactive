var PubSub = function(){
    var events = {};

    function subscribe (eventName,fn){
        events[eventName] = events[eventName] || [];
        events[eventName].push(fn);
    }
    function unSubscribe(eventName,fn){
        if(events[eventName]){
            events[eventName] = events[eventName].filter(function(eventFunc){
                return eventFunc.toString() !== fn.toString();
            });
        }
    }

    function publish(eventName,data){
        if(events[eventName]){
            events[eventName].map(function(fn){fn(data);});
        }
    }

    return{
        subscribe,
        unSubscribe,
        publish
    };

}