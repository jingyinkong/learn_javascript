var arr1 = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b']

function unique(arr) {
    var newArr = [];
    if (arr instanceof Array) {
        for (var i = 0; i < arr.length; i++) {
            if (newArr.indexOf(arr[i]) == -1) {
                newArr.push(arr[i])
            }
        }
    }
    return newArr;
}

var demo = unique(arr1);
console.log(demo)