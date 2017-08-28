function Module() {
    let _privateAge = 31;
    let _privateName = 'shahar';
    let _privateFunc = ()=> 4

    return{
        init: () => {
            _privateFunc();
        }
    }
}

const Singleton = (function moduleSingleton(window) {
    let _privateAge = 31;
    let _privateName = 'shahar';
    let _privateFunc = ()=> 4

    return{
            init: () => {
            _privateFunc();
}
}
})(this)

const module = new Module()
module.init();
Singleton.init()