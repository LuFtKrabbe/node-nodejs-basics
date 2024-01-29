const parseArgs = () => {
    const cliArgs = process.argv;
    const argsWithValues = [];
    
    cliArgs.map((v, i, arr) => {
        if ((i > 1) && (i % 2 === 0)) {
            argsWithValues.push(`${arr[i].slice(2)} is ${arr[i + 1]}`)
        }
    })
    console.log(argsWithValues.join(', '));

};

parseArgs();