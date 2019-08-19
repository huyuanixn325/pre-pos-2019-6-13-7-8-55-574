'use strict';

function countSameElements(collection) {
  var result = [];
 var map = new Map();
  for (var i=0;i<collection.length;i++){
    if (map.get(collection[i])==null){
      map.set(collection[i],1);
    }else{
      map.set(collection[i],map.get(collection[i])+1);
    }
  }
  //console.log(map);
  map.forEach(function(key,value){
    result.push({key:value,count:key})
  });
  console.log(result);
  return result;
}
