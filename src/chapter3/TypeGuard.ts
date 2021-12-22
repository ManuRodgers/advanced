class StringUtils {
  public static trimString(str: string): string {
    return str.replace(/\s+|\s+$/g, "");
  }
}

const testObject = {
  username: " ma n u",
  age: 44,
  eat() {
    console.log(`${StringUtils.trimString(this.username)} is eating`);
  },
  allowInput: true
};

function processObjectOutput(obj: any) {
  if (obj === null || obj === undefined || JSON.stringify(obj) === "{}") {
    return console.log("obj is invalid");
  }
  if ("allowInput" in obj) {
    let value;
    Object.keys(obj).forEach(key => {
      value = obj[key];
      if (typeof value === "string") {
        console.log(`${key}: ${StringUtils.trimString(value)}`);
      } else if (typeof value === "function") {
        obj[key]();
      } else {
        console.log(`${key}: ${value}`);
      }
    });
  }
}

processObjectOutput(testObject);
// processObjectOutput(null);
// processObjectOutput(undefined);
processObjectOutput({});
