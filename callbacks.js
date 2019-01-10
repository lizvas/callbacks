function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}



function actionWhenFound(index) {
  console.log ('We found Waldon in Index ' + index);
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

function findWaldo(arr, found) {
 var list = []
 arr.forEach(function(element, index) {

   if (element === 'Waldo'){
     //actionWhenFound(index);
     found(index);
   }
   //list.push()
   //console.log(element);

 });



}


function actionWhenFound(i) {
 console.log("Waldo is at position" + i);
}



findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);