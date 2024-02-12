 
import { readFile, writeFile } from "fs/promises";
// const filePath = new URL("./index.html", import.meta.url);
// const data = await readFile(filePath, "utf8");
// console.log(data);
// let obj = {
//   title: "custom title",
//   body: "custom body",
// };
// for (const [key, value] of object.entries(obj)) {
//   data = data.replace(`{${key}}`,value);
// }
// await writeFile(new URL("./index.html", import.meta.url))

const filePath = new URL('./index.html', import.meta.url);
const contents = await readFile(filePath, { encoding: "utf8" });
const data = {
    title: 'my title ',
    body:'my data', 
}

for (const [data, value] of Object.entries(data)) {
    contents=contents.replace(`{${key}}`,value)
}
await writeFile(new URL('./index.html', import.meta.url), contents);
console.log(contents);