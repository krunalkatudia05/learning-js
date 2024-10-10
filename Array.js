const myArr=[1,2,3,4,5,6]

//myArr.push(19);
//console.log(myArr);

//myArr.pop();
//console.log(myArr);

//myArr.unshift(20);
//console.log(myArr);

//myArr.shift();
//console.log(myArr);

//console.log(myArr.join());
//console.log(myArr)
 //console.log(myArr.includes(3));
//  console.log(myArr.indexOf(1));

//console.log(myArr)
 //console.log(myArr.slice(1,4))
//console.log(myArr)
// console.log(myArr.splice(1,4))
// console.log(myArr)

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const newarraystore=marvel_heros.concat(dc_heros)
// console.log(newarraystore);


const new_array=[1,2,3]
const new_array2=[4,5,6]

//use of spread operator.
//it can also be used in place of concat 
 const result_array=[...new_array,...new_array2,...dc_heros]
 console.log(typeof result_array);


//multiple nested array's inside an single array.
//const new_array=[1,2,3,[4,3,4,[5,3,[3,2],2]],2,5]
//console.log(new_array);

//clubbing only single level of array's into an single array
//const new_array2=new_array.flat(1);

//clubbing only two level of array's into an single array
//const new_array2=new_array.flat(2);

//clubbing all the level of array into an single array.
//const new_array2=new_array.flat(Infinity);
//console.log(new_array2);


