const parseEnv = () => {
    const userEnvObj = process.env;
    const envVariablesWithValues = [];

    for (const property in userEnvObj) {
        if (property.includes('RSS_')) {
            envVariablesWithValues.push(`${property}=${userEnvObj[property]}`);
        }
    }
    console.log(envVariablesWithValues.join('; '))
};

parseEnv();