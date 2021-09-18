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
