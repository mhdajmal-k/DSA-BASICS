
function less(array){
    return [].concat.apply([],array)
}
const array=[[1,2,3,4],[5,6,7,8]]
let a=less(array)
console.log(a);

