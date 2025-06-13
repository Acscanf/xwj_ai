function add(...args) {
    console.log(args)
    return (...newArgs) => {
        const arr = [...args, ...newArgs]
        console.log(arr)
    }
}
