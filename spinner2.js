const sentence = "\r|\r\r|\r/\r-hello from spinner1.js... \rheyyy\n..'";
let time = 100;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 200;
}


