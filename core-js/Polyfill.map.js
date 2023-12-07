Array.prototype.polyfillMap = function (mapLogicFn, ...arg) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        output.push(mapLogicFn(arr[i], i));
    }
    return output;
};

[2, 3].polyfillMap((each, i, self) => {
    console.log(each);
});
