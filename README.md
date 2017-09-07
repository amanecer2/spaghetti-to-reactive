# spaghetti-to-reactive
from spaghetti code to reactive and organized code
> how to convert spaghetti code, unmaintainable, to modular maintainable code

> understand the mechanics behind pub sub  patter and module patter

> [presentation](https://docs.google.com/a/restartit.co.il/presentation/d/1t_L3LbAR-deuzoJHx6EVP67BXIQJ-dN9e_XvNsbXcsM/edit?usp=sharing) for this code

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