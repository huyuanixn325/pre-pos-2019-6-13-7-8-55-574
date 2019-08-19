'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = [];
  var map = new Map();
  for (var i=0;i<collectionA.length;i++){
    if (map.get(collectionA[i])==null){
      map.set(collectionA[i],1);
    }else{
      map.set(collectionA[i],map.get(collectionA[i])+1);
    }
  }
  map.forEach(function(key,value){
    result.push({key:value,count:key})
  });

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
