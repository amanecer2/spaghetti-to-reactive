# spaghetti-to-reactive
from spaghetti code to reactive and organized code
> how to convert spaghetti code, unmaintainable, to modular maintainable code

> understand the mechanics behind pub sub  patter and module patter

### jquery is used only to make an easier dom manipulate

* From
``` 
let x = 0;
$('increment').on('click',()=> {
    $('.result').html(++x);
})
```
* To
```
const Container = ({elem})=>{
    let x = 0;
    const increment = (by)=>{
        x+= by || 1;
        elem.html(x) // not best practice but for demo it's ok
    }    
    return{
        increment
    }
}
const element1 =  new Container({elem: $('.result')[0]});
const element2 =  new Container({elem: $('.result')[1]});
const element3 =  new Container({elem: $('.result')[2]});


element1.increment();
element2.increment();
element3.increment();
```