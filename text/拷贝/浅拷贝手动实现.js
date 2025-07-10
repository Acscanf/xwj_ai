const shallowClone = (target) => {
    if(typeof target !== 'object' || target === null) {
        return target;
    }
    const cloneTarget = Array.isArray(target) ? [] : {};
    for(let prop in target) {
        if(target.hasOwnProperty(prop)) {
            cloneTarget[prop] = target[prop];
        }
    }
    return cloneTarget;
}