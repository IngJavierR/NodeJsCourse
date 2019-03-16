//Read from users
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk){
        process.stdout.write(chunk);
    }
})