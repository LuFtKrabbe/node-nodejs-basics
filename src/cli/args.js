const parseArgs = () => {
    const cliArgs = process.argv;
    const taskAnswer = [];
    
    cliArgs.map((v, i, arr) => {
        if ((i > 1) && (i % 2 === 0)) {
            taskAnswer.push(`${arr[i].slice(2)} is ${arr[i + 1]}`)
        }
    })
    console.log(taskAnswer.join(', '));

};

parseArgs();