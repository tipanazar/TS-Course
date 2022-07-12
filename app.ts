function testFunc() {
  let age: number;
  let name: string;
  let toggle: boolean;
  let empty: null;
  let notInitialize = undefined;
  let callback: (a: number) => number;
  let anything: any;
  let some: unknown;
  let person: [string, number];
  enum Status {
    LOADING,
    READY,
  }
  let union: string | number;
  let literal: "enable" | "disable";
  type DataType = {
    title: string;
    likes: number;
    accounts: string[];
    status: "open" | "close";
    details?: {
      createAt: string;
      updateAt: string;
    };
  };

  // = = = = = = = = = = = = = = = = = = =

  age = 50;
  name = "Max";
  toggle = true;
  empty = null;
  notInitialize = undefined;
  callback = (a) => {
    return 100 + a;
  };
  anything = null;
  anything = -20;
  anything = "Text";
  anything = {};
  some = "text";
  person = ["Max", 21];
  union = "string";
  union = age;
  literal = "enable";
  literal = "disable";
  function showMessage(message: string): void {
    console.log(message);
  }
  function calc(num1: number, num2: number): number {
    return num1 + num2;
  }
  function customErr(): never {
    throw new Error("Error");
  }

  const page1: DataType = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
      createAt: "2021-01-01",
      updateAt: "2021-05-01",
    },
  };
  const page2: DataType = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
  };
}
