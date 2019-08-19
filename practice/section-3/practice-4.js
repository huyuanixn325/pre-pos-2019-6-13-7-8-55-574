'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = [];
  var map = new Map();
  //alert(collection[collection.length-1]);
  for (var i=0;i<collectionA.length-1;i++){
    if (map.get(collectionA[i])==null){
      map.set(collectionA[i],1);
    }else{
      map.set(collectionA[i],map.get(collectionA[i])+1);
    }
  }

  var temp = collectionA[collectionA.length-1].split("-");
  //console.log(temp);
  map.set(temp[0],Number(temp[1]));
  //console.log(map);
  map.forEach(function(key,value){
    result.push({key:value,count:key})
  });
  console.log(result);

  for (var i = 0;i < result.length;i++)
  {

    for (var j = 0;j< objectB.value.length;j++)
    {
      if (result[i].key ==  objectB.value[j])
      {
        var temp = result[i].count % 3;
        var  a = (result[i].count - temp) / 3;
        result[i].count = result[i].count - a;
      }
    }
  }
  return result;
}
