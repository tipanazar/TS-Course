function testFunc() {
  let age: number;
  let name: string;
  let toggle: boolean;
  let empty: null;
  let notInitialize = undefined;
  let callback: (a: any) => void;
  let anything: any;
  let some: string;
  let person: [string, number];
  enum Status {
    LOADING,
    READY,
  }
  let union: string | number;
  let literal: "enable" | "disable";

  age = 50;
  name = "Max";
  toggle = true;
  empty = null;
  notInitialize = undefined;
  callback = (a) => {
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
