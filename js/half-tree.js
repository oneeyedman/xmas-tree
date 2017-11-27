'use strict';

//var treeHeight = prompt('Cómo de alto queremos el árbol');
var treeHeight = 14;
var treeChar = '▲';
var treeLine = '';

treeHeight = parseInt(treeHeight);


for (var i = 0; i < treeHeight; i++ ) {
	//console.log('> línea ' + i + ': ' + treeChar);
	//console.log('> l' + i + ', necesitamos ' + (i+1) + ' ' + treeChar);
	for (var j=0; j <= i; j++) {
		treeLine = treeLine + treeChar;
	}
	treeLine = treeLine + '\n';
	//console.log(treeLine);
}
alert(treeLine);
