const args = process.argv.slice(2);

for (const arg of args) {
  if (isNaN(arg)) {
    continue;
  }
  if (arg < 0) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg * 1000);
}