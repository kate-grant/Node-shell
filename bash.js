const cmdDict = {
  pwd: process.cwd(),
};

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  process.stdout.write("You typed: " + cmd);
  if (cmdDict[cmd]) {
    process.stdout.write("\n" + cmdDict[cmd]);
  }
  process.stdout.write("\nprompt > ");
});
