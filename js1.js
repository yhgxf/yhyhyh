function rendom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//方法一
function getArr() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        var num = rendom(1, 10);
        if (arr.indexOf(num) == -1) {
            arr.push(num);
        } else {
            i--;
        }
    }
    return arr;
}
console.log(getArr());