'use strict';

function countSameElements(collection) {
  var result = [];
  var map = new Map();
  var temp=null;
  //alert(collection[collection.length-1].length);
  for (var i=0;i<collection.length;i++){
    console.log(collection[i].length>1);
    if (collection[i].length>1){
      temp=collection[i].substring(0,1);
    }else temp=collection[i];

    if (map.get(temp)==null){

      if (collection[i].length>1&&collection[i].length<=3) {
        console.log(temp+"----"+collection[i].substring(2, collection[i].length));
        //  console.log(collection[i].substring(2,collection[i].length-1));
        map.set(collection[i].substring(0,1), Number(collection[i].substring(2, collection[i].length)))
        console.log(map.get(collection[i].substring(0,1)))
        //  console.log(collection[i].substring(1,collection[i].length-1));
      }else if(collection[i].length>3){
        map.set(collection[i].substring(0,1), Number(collection[i].substring(2, collection[i].length-1)))
      }
      else{
        map.set(temp,1);
      }
    }else{
        if (collection[i].length>1&&collection[i].length<=3) {
        //  console.log(collection[i].substring(2,collection[i].length-1));
        map.set(collection[i].substring(0,1),map.get(collection[i].substring(0,1))+Number(collection[i].substring(2,collection[i].length)))
        //  console.log(collection[i].substring(1,collection[i].length-1));
      }else if (collection[i].length>3) {
          //  console.log(collection[i].substring(2,collection[i].length-1));
          map.set(collection[i].substring(0,1),map.get(collection[i].substring(0,1))+Number(collection[i].substring(2,collection[i].length-1)))
          //  console.log(collection[i].substring(1,collection[i].length-1));
        }
      else{
          map.set(collection[i],map.get(collection[i])+1);
     }

    }
  }


  //console.log(temp);
  console.log(map);
  map.forEach(function(key,value){
    result.push({name:value,summary:key})
  });
  console.log(result);
  return result;
}
