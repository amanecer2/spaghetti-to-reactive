// airbnb best practice for arguments
function Box({dom, pubSub}) {
    /* private vars*/
    let counter = 0;
    const input = dom.querySelector('input');

    const timer = ()=>Rx.Observable.timer(1000);
    const inc = pubSub.subscribe('increment');
    const dec = pubSub.subscribe('decrement');

    inc.debounce(timer).subscribe(increment);
    dec.debounce(timer).subscribe(decrement);

    /* private function*/
    function increment(by = 1) {
        const inputValue = +(input.value) || by;
        counter += inputValue;
        dom.querySelector('.result').innerHTML = counter;
    }

    function decrement(by = 1) {
        const inputValue = +(input.value) || by;
        counter -= inputValue;
        dom.querySelector('.result').innerHTML = counter;
    }

    /*public functions*/
    return {
        increment,
        decrement
    }
}

const pubSub = PubSub();

const box1 = new Box({dom: $('.counter')[0],pubSub});
const box2 = new Box({dom: $('.counter')[1],pubSub});
const box3 = new Box({dom: $('.counter')[2],pubSub});

$('.increment').on('click', () => {
    pubSub.publish('increment',1);
})

$('.decrement').on('click', () => {
    pubSub.publish('decrement',1);
})