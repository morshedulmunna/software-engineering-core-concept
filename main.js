let count = 0;
const doNetwork = () => {
    console.log("network calling..", count++);
};

const debouching = function (fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            doNetwork.apply(this, arguments);
        }, delay);
    };
};

const batterFunction = debouching(doNetwork, 600);
