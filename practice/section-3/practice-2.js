'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var i = 0;i < collectionA.length;i++)
  {

    for (var j = 0;j<objectB.value.length;j++)
    {
      if (collectionA[i].key == objectB.value[j])
      {
        var temp = collectionA[i].count % 3;
        var  result = (collectionA[i].count - temp) / 3;
        collectionA[i].count = collectionA[i].count - result;
      }
    }
  }
  return collectionA;
}
