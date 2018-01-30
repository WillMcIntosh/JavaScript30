// Example from JS30:

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// you can call querySelector against any existing DOM element

// const links = category.querySelectorAll('a');
//
// this gives a  node list of links that are on the page ( looks like 'a,a,a,a,a,a' )
// we actually need an array, so we could use ES6 spread (takes every item out
// of an interable and puts it into an arrray)
//
// const links = [...category.querySelectorAll('a')]
// OR: easier to read

// create a list out of this list of links then filter it for 'de' in name

const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links
    .map(link => link.textContent)
    .filter(streetName => streetName.includes('de'));

// create a list of all FSF approved free software and output to a text file
// using this text file, compare to output of `pacman -Q > installed.txt`
//

// example from
// https://code-maven.com/create-and-download-csv-with-javascript

/*
 * var data = [
 *    ['Foo', 'programmer'],
 *    ['Bar', 'bus driver'],
 *    ['Moo', 'Reindeer Hunter']
 * ];
 *  
 *  
 * function download_csv() {
 *     var csv = 'Name,Title\n';
 *     data.forEach(function(row) {
 *             csv += row.join(',');
 *             csv += "\n";
 *     });
 *  
 *     console.log(csv);
 *     var hiddenElement = document.createElement('a');
 *     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
 *     hiddenElement.target = '_blank';
 *     hiddenElement.download = 'people.csv';
 *     hiddenElement.click();
 * }
 */
