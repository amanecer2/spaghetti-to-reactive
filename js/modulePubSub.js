// airbnb best practice for arguments
function Box({dom, pubSub}) {
    /* private vars*/
    const input = dom.querySelector('input');
    let counter = 0;
    pubSub.subscribe('increment',increment);
    pubSub.subscribe('decrement',decrement);

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
    pubSub.publish('increment');
})

$('.decrement').on('click', () => {
    pubSub.publish('decrement');
})