import fs from "fs";

export class IO {
  static readInput(path, encoding = "utf8") {
    return new Promise((resolve, reject) => {
      fs.readFile(path, encoding, (err, result) =>
        err ? reject(err) : resolve(result)
      );
    });
  }

  static writeOutput(path, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, data, (err, result) =>
        err ? reject(err) : resolve(result)
      );
    });
  }
}
