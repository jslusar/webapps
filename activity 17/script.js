/*

  In this assignmenmt you are given a list of student names. The challenge
  is to pair students by how similar their names are in edit distance.
  The pairing algorithm  pseudocode is:

  sort the students by last name (A to Z)
  while there is > 1 unpaired student
    X = the first unpaired student
    if X's first name begins with a vowel
      compute the Hamming distance to all other unpaired students

    if X's first name begins with a consonant
      compute the Levenshtein distance to all other unpaired students

    pair X with the most similar name, Y (ie shortest edit distance). If there
    is a tie in edit distance, sort the results by last name (A...Z) and
    take the first.

    remove X and Y from the list of unpaired students.


  to help you, you are provided with the scripts:
    levenshtein.js and hamming.js

  **THERE IS CURRENTLY A NAMING CONFLICT, solve this by wrapping each
    provided distance funciton the JavaScirpt namespace-like construct of your choice.

    YOU CANNOT SIMPLY RENAME the distance functions!
    YOU CANNOT MODIFY THE distance functions IN ANY WAY other than
    to implement your namespace construct!

    I suggest putting each in it's own unique object so in your main
    code you can write:
     hamming.distance(a,b)
      or
     levenshtein.distance(a,b)
 */

/* STEP 1: SORT NAMES by LAST NAME! -- Stackoverflow */
function sortLast(a, b) {
    var splitA = a.split(" "); //First name & last name to compare
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1]; //Last name to compare
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
}

var names = ["Jordan Voves", "Keller Chambers", "Stefano Cobelli",
"Jenna Slusar", "Jason Corriveau", "Cole Whitley", "Dylan Zucker",
"Danny Toback", "Eric Marshall", "Allan La", "Natalie Altman",
"Evan Harrington", "Jack Napor", "Jingya Wu", "Christian Ouellette",
"Junjie Jiang", "Morgan Muller", "Sarah Xu", "Aleksandar Antonov",
"Parker Watson", "Haipu Sun", "Ryan Pencak", "Dan Kershner",
"John Venditti", "Jacob Mendelowitz", "Dunni Adenuga", "Jeff Lee",
"Uttam Kumaran", "Jack Hall-Tipping"]
var sorted = names.sort(sortLast);
// console.log(sorted);




/* WHILE > 1 students are UNPAIRED
     take 1st student, compute distance to all others,
      pair with lowest score.
      */
function indexMin(a) {
 var lowest = 0;
 for (var i = 1; i < a.length; i++) {
  if (a[i] < a[lowest]) lowest = i;
 }
 return lowest;
}

function isVowel(x){

    var result;

        if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U" ) {
            result = true;
        }
        else{
            result = false;
        }
    return result;
    }

function pair(a){
  var sorted = a.sort(sortLast);
  var dist = []
  var result = []
  while (a.length >1) {
    var b = a.filter(name => name !== a[0])
    // var c = a.filter(name => name !== a[0]) //copy of b
    // console.log(b)
    var firstA = a[0]; //first name
    if (isVowel(firstA[0])){
      c = b
      while (c.length > 0){
      var d = hamming.distance(a[0],c[0]);
    dist.push(d)
      c = c.filter(name => name !== c[0])
    }
          // console.log(dist)
          var min = indexMin(dist) //if there are equal distances, then it gives the first found, which is first in alphabetical order
          // console.log(min)

          var pairs = a[0] + ' and ' + b[min]
          result.push(pairs)
          // console.log(pairs)
    }
    if (isVowel(firstA[0]) === false){
      c = b
      while (c.length > 0){
        // console.log("this is c length " + c.length)
      var d = levenshtein.distance(a[0],c[0]);
    dist.push(d)
      c = c.filter(name => name !== c[0])
    }
          // console.log(dist)
          var min = indexMin(dist) //if there are equal distances, then it gives the first found, which is first in alphabetical order
          // console.log(min)

          var pairs = a[0] + ' and ' + b[min]
          result.push(pairs)
          // console.log(pairs)
    }
    dist = []
    a = b.filter(name=>name !== b[min])
    b = b.filter(name=>name !== b[min])
}

  var last = a[0] + ' alone'
  result.push(last)
  console.log(result)
 // return result.push(last)
}
var paired = pair(names)
// console.log(paired)
