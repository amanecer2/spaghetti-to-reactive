$('.increment').on('click',() => {
    const panels = $('.counter');
    panels.each((index,pannel)=>{
        const by = $(pannel).find('input').val() || 1;
        const result = $(pannel).find('.result');
        const value = (+result.html()) + (+by);
        result.html(value);
    })
})

$('.decrement').on('click',() => {
    const panels = $('.counter');
panels.each((index,pannel)=>{
    const by = $(pannel).find('input').val() || 1;
const result = $(pannel).find('.result');
const value = (+result.html()) - (+by);
result.html(value);
})
})