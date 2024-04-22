import { writeFile as _writeFile } from "fs";

const writeFile = (documents, filepath, readable = false) => {
  _writeFile(filepath, JSON.stringify(documents,  null, readable ? "\t" : null), err => {
    if (err) console.log("Error writing file:", err);
  });
}

export default writeFile