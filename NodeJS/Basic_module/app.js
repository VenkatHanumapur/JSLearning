const lod=require('lodash');
const items = [1,[2,[3],[4]]];
const newItems=lod.flattenDeep(items);

console.log(lod.flatMap(items));

console.log(newItems);