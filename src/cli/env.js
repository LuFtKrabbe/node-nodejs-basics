const parseEnv = () => {
    const envVariables = process.env;
    const taskAnswer = [];

    for (const variable in envVariables) {
        if (variable.includes('RSS_')) {
            taskAnswer.push(`${variable}=${envVariables[variable]}`);
        }
    }
    console.log(taskAnswer.join('; '))
};

parseEnv();