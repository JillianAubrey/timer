const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log();
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write('\x07');
    console.log('BEEP');
  }
});