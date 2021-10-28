let arr = [1,2,3,4,5,6,7,8];

function reverse(array){
    let newArr = [];
    for(i=array.length; i>=0; i--){
        newArr.push(array[i]);
    }
    return newArr;
}

console.log(reverse(arr));