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
    // = = = = = = = = = = = = = = = = = = =
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
    function showMessage(message) {
        console.log(message);
    }
    function calc(num1, num2) {
        return num1 + num2;
    }
    function customErr() {
        throw new Error("Error");
    }
    var page1 = {
        title: "The awesome page",
        likes: 100,
        accounts: ["Max", "Anton", "Nikita"],
        status: "open",
        details: {
            createAt: "2021-01-01",
            updateAt: "2021-05-01"
        }
    };
    var page2 = {
        title: "Python or Js",
        likes: 5,
        accounts: ["Alex"],
        status: "close"
    };
}
