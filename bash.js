const cmdDict = {
  pwd: require("./pwd.js").pwd,
  ls: require("./ls.js").ls,
};
console.log(cmdDict);

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  process.stdout.write("You typed: " + cmd);
  if (cmdDict[cmd]) {
    process.stdout.write("\n" + cmdDict[cmd]());
  }
  process.stdout.write("\nprompt > ");
});
