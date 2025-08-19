function debounce(fn, delay) {

    return function(...args) {
        if(fn.id) {
            clearTimeout(fn.id)
        } 
        fn.id = setTimeout(() => {
            fn(...args)
        })
    }
}


function throttle(fn, delay) {
    let flag = true;
    return function(...args) {
        let context = this;
        if(flag) {
            fn.apply(context, args)
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay)
        }
    }
}