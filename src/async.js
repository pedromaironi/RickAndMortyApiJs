const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('do somenthing async', 3000);
            });
        } else {
            reject(new Error('error: '));
        }
    });
};

const doSomething = async() => {
    const something = await doSomethingAsync();
    console.log(something);
};

console.log('Before');
doSomething();
console.log('after');