var cows = [
  {name: 'Jar', type: 'bull'},
  {name: 'Bay', type: 'cow'},
  {name: 'Po', type: 'calf'},
  {name: 'Lat', type: 'cow'},
  {name: 'Bar', type: 'calf'},
  {name: 'Foo', type: 'bull'},
  {name: 'Kay', type: 'bull'},
]

Array.prototype.countTypes = function(kind) {
  var numKind = 0;

  for(var i in this){
    if(this[i].type == kind){
      numKind++;
    }  
  }

  return numKind;
}

console.log('Amt cows: ' + cows.countTypes('bull'));

/////////////
/*

INHERITANCE AND CONSTRUCTORS

*/
/////////////

