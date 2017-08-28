$('.increment').on('click',() => {
    const counter = $('.result')[0].innerHTML;
$('.result').html(+counter + 1);
})

$('.decrement').on('click',() => {
    const counter = $('.result')[0].innerHTML;
$('.result').html(+counter - 1);
})