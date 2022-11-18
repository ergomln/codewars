/*
Code as fast as you can! You need to double the integer and return it.
*/

function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    i *= 2
    return i;
};


/* 
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/

function DNAtoRNA(dna) {
    let result = '';
    for (let i = 0 ; i < dna.length ; i++){
        if (dna[i] === "T"){
            result += "U"
        } else {
            result += dna[i]
        };
    };
    return result 
};


/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    let result = 0 ;
    for (let i = 0 ; i < arr.length ; i++){
        if( arr[i] > 0){
            result += arr[i];
        } else {
            result == 0;
        }
    };
    return result
};

/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/

function makeNegative(num) {
    return -Math.abs(num);
};


/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)
*/

function hero(bullets, dragons){
    return bullets >= (dragons * 2)
};


/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

let games = ["3:1", "2:2", "0:1", "3:3", "0:0", "6:3", "2:4", "1:2","3:2","0:0"];

function points(games) {

    let teamX = 0;

    for (let i = 0 ; i < games.length ; i++){
        if (games[i].charAt(0) > games[i].charAt(2)){
            teamX += 3
        } else if (games[i].charAt(0) === games[i].charAt(2)){
            teamX++
        }else {
            teamX += 0
        }
    }
    return teamX
};


/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example:
*/
let arrayOfSheeps = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

    function countSheeps(arrayOfSheeps) {
        return arrayOfSheeps.filter(Boolean).length;
    }

