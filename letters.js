const CW = require("check-word");
const words = CW("en");

const samplelist = [];
function recurse(inp, point = "", form = "") {
  if (point === "") {
    const data = inp.split("");
    data.forEach((d) => recurse(inp, d, form));
    return;
  }
  form += point;
  inp = inp.replace(point, "");
  if (words.check(form) && form.length > 2) samplelist.push(form);
  //   if (inp === "") return console.log(form, " word? ", words.check(form));
  const data = inp.split("");
  data.forEach((d) => recurse(inp, d, form));
}
recurse("staged");
console.log(samplelist);

const critical = samplelist.filter((i) => i.length === 6);
const heavy = samplelist.filter((i) => i.length === 5);
const normal = samplelist.filter((i) => i.length === 4);
const half = samplelist.filter((i) => i.length === 3);

console.log("CRITICAL", critical.length, critical);
console.log("HEAVY", heavy.length, heavy);
console.log("NORMAL", normal.length, normal);
console.log("HALF", half.length, half);
