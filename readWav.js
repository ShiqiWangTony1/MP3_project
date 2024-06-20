const fs = require('fs');

fs.readFile('/Users/shiqiwang/Downloads/StarWars3.wav', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
  
    console.log('File read successfully');
    console.log('Buffer length:', data.length);
  });