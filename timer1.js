const args = process.argv.slice(2);

setTimeout(() => {
  process.stdout.write('\x07');
}, args[0] * 1000);