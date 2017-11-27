'use strict';

//var treeHeight = prompt('Cómo de alto queremos el árbol');
var treeHeight = 5;
var treeChar = '▲';
var treeLine = '';
var treeTrunk = '|';
var treeStar = '★'

treeHeight = parseInt(treeHeight);

// treeLine = treeStar + '\n';
// console.log(treeLine);
for (var i = 0; i < treeHeight; i++ ) {
	for (var j=0; j <= i; j++) {
		treeLine = treeLine + treeChar;
	}
	treeLine = treeLine + '\n';
}
// console.log(treeLine);
// treeLine = treeLine + treeTrunk;
// console.log(treeLine);
alert(treeLine);
