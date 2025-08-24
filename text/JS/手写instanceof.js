function instanceofFn(left, right) {
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;

    while(true) {
        if(!proto) return false;
        if(proto === prototype) return true;
        proto = Object.getPrototypeOf(proto); // 向上查找prot
    }
}