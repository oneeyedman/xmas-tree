'use strict';

//var treeHeight = prompt('Cómo de alto queremos el árbol');
var treeHeight = 5;
var treeChar = '▲';
var treeLine = '';
var treeTrunk = '|';
var treeStar = '★';
// var xCounter = 1;
// var spCounter = treeHeight - 1;
// var bonusSpaces = spCounter;

treeHeight = parseInt(treeHeight);

for (var i = 0; i < treeHeight; i++) {
	console.log('>> línea ' + i + ', lleva X espacios y X triángulos');

	// console.log('>> línea ' + i + ', lleva X espacios y ' + xCounter + ' triángulos');
	// xCounter = xCounter + 2;

	// console.log('>> línea ' + i + ', lleva ' + spCounter + ' espacios y ' + xCounter + ' triángulos');
	// xCounter = xCounter + 2;
	// spCounter = spCounter - 1;

	// // Espacios
	// for (var sp = spCounter; sp > 0; sp--) {
	// 	//console.log('Número de espacios: ' + sp);
	// 	treeLine = treeLine + ' ';
	// }
	// spCounter = spCounter - 1;

	// // Triángulos
	// for (var x = 0; x < xCounter; x++) {
	// 	treeLine = treeLine + treeChar;
	// }
	// xCounter = xCounter + 2;
	// treeLine = treeLine + '\n';
	// console.log(treeLine);
}


// // Estrella
// for (var star = 0; star < bonusSpaces; star++) {
// 	treeLine = treeLine + ' ';
// }
// treeLine = treeLine + treeStar + '\n';
// console.log(treeLine);
//
// // Tronco
// for (var t = 0; t < bonusSpaces; t++) {
// 	treeLine = treeLine + ' ';
// }
// treeLine = treeLine + treeTrunk + '\n';
// console.log(treeLine);
//alert(treeLine);
