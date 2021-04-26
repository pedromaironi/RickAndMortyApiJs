const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey!");
        } else {
            reject("Whooops!");
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Hey!");
            }, 1000);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => console.log('Array of results: ', response));