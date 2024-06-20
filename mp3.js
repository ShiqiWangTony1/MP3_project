const fs = require('fs');

// Create read and write streams
const readStream = fs.createReadStream('/Users/shiqiwang/Documents/Alphabet_Intern/Week2_Project/Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack.mp3');
const writeStream = fs.createWriteStream('/Users/shiqiwang/Documents/Alphabet_Intern/Week2_Project/destination_mp3/New.mp3');

// Pipe the read stream to the write stream
readStream.pipe(writeStream);

readStream.on('end', () => {
    console.log('MP3 file copied successfully.');
});

readStream.on('error', (err) => {
    console.error('Error reading the file:', err);
});

writeStream.on('error', (err) => {
    console.error('Error writing the file:', err);
});
