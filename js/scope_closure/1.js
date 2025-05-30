function bar() {
    console.log(myName , "bar");
}

function foo() {
    var myName = "极客";
    bar();
    console.log(myName , "foo");
    function td() {
        console.log(myName, "td");
    }
    td();
}

var myName = "骑士"
foo();