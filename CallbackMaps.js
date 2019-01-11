var words = ["ground", "control", "to", "major", "tom"];

//The function taken as argument by map is known as the callback, because it’s called on every element in the original array.

function map(bucket,job){
 var arr = []
 for(var i of bucket){
   arr.push(job(i))
 }
 //return arr
 console.log(arr)
}

map(words, function (word) {
 return word.length
});

map(words, function (word) {
 return word.toUpperCase();
});

map(
 words,
 function(word) {
   return word.split('').reverse().join('');
 }
);