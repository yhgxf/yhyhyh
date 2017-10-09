var brr = [];
while (brr.length < 10) {
    var num = fn(10, 100);
    if (brr.indexOf(num) == -1) {
        brr.push(num);

    }
}

function fn(mix, max) {
    return Math.floor(Math.random() * (max - mix + 1) + mix);
}
console.log(brr);