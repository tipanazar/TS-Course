function testFunc() {
    var age;
    var name;
    var toggle;
    var empty;
    var notInitialize = undefined;
    var callback;
    var anything;
    var some;
    var person;
    var Status;
    (function (Status) {
        Status[Status["LOADING"] = 0] = "LOADING";
        Status[Status["READY"] = 1] = "READY";
    })(Status || (Status = {}));
    var union;
    var literal;
    age = 50;
    name = "Max";
    toggle = true;
    empty = null;
    notInitialize = undefined;
    callback = function (a) {
        return 100 + a;
    };
    anything = null;
    some = "text";
    name = some;
    person = ["Max", 21];
    union = "string";
    union = age;
    literal = "enable";
    literal = "disable";
}
testFunc();
