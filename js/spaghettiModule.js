// airbnb best practice for arguments
function Box({dom}) {
    /* private vars*/
    const input = dom.querySelector('input');
    let counter = 0;
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

const box1 = new Box({dom: $('.counter')[0]});
const box2 = new Box({dom: $('.counter')[1]});
const box3 = new Box({dom: $('.counter')[2]});

$('.increment').on('click', () => {
    box1.increment();
    box2.increment();
    box3.increment();
})

$('.decrement').on('click', () => {
    box1.decrement();
    box2.decrement();
    box3.decrement()
})