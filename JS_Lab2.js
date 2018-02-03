// JS Exercises

// Juan Aguas

// Question 1
function rotateLeft3(array) {
	return [array[1], array[2], array[0]]
}


var answer1 = rotateLeft3([1, 2, 3]);
var answer2 = rotateLeft3([5, 11, 9]);
var answer3 = rotateLeft3([7, 0, 0]);

document.write("<h1>Exercise 1</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")

// Question 2
function reverse3(array) {
	return [array[2], array[1], array[0]]
}


var answer1 = reverse3([1, 2, 3]);
var answer2 = reverse3([5, 11, 9]);
var answer3 = reverse3([7, 0, 0]);

document.write("<h1>Exercise 2</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")

// Question 3
function has23(array) {
	if (array[0] == 2) {
		return "True"
	}
	if (array[0] == 3) {
		return "True"
	}
	if (array[1] == 2) {
		return "True"
	}
	if (array[1] == 3) {
		return "True"
	}
	return "False"
}

var answer1 = has23([2, 5]);
var answer2 = has23([4, 3]);
var answer3 = has23([4, 5]);

document.write("<h1>Exercise 3</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")


// Question 4
function fix23(array) {
	for (var i = 0; i < array.length; i++) {
		if ((array[i] == 2) && (array[i+1] == 3)){
				array[i+1] = 0;
		}
}
return array
}

var answer1 = fix23([1, 2, 3]);
var answer2 = fix23([2, 3, 5]);
var answer3 = fix23([1, 2, 1]);

document.write("<h1>Exercise 4</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")

// Question 5
function maxTriple(array) {
	
if (array[0] > array[1]) {
	if (array[0] > array[2]) {
		return array[0];
		}else
			return array[2];
} if (array[1] > array[2]) {
		return array[1];
	} else
		return array[2];  
}

var answer1 = maxTriple([1, 2, 3]);
var answer2 = maxTriple([1, 5, 3]);
var answer3 = maxTriple([5, 2, 3]);

document.write("<h1>Exercise 5</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")

// Question 6
function swapEnds(array) {
	
var lindx = array.length-1;
var arr1 = array.slice(0,1)
var arr2 = array.slice(lindx)
var arr3 = array.slice(1,lindx)
var narray = arr2.concat(arr3, arr1)
return narray
}

var answer1 = swapEnds([1, 2, 3, 4]);
var answer2 = swapEnds([1, 2, 3]);
var answer3 = swapEnds([8, 6, 7, 9, 5]);

document.write("<h1>Exercise 6</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")

// Question 7
function unlucky1(array) {
	
for (var i = 0; i < array.length; i++) {
		if ((array[0] == 1) && (array[1] == 3)){
				return "True"
			}if ((array[1] == 1) && (array[2] == 3)){
					return "True"
				}
}	return "False"
}

var answer1 = unlucky1([1, 3, 4, 5]);
var answer2 = unlucky1([2, 1, 3, 4, 5]);
var answer3 = unlucky1([1, 1, 1]);

document.write("<h1>Exercise 7</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")

// Question 8
function front11(a, b) {

var arra = a.slice(0,1)
var arrb = b.slice(0,1)
var narr = arra.concat(arrb)


return narr
}

var answer1 = front11([1, 2, 3], [7, 9, 8]);
var answer2 = front11([1], [2]);
var answer3 = front11([1, 7], []);

document.write("<h1>Exercise 8</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")

// Question 9

document.write("<h1>Exercise 9</h1>")
document.write("<h2>Test Case 1 : Could not understand the question </h2>")

// Question 10
function tenRun(array) {

	for (var i = 0; i < array.length; i++) {
		if (array[i] == 10) {
			if (array[i+1] !=20) {
				array[i+1] = 10;
			} else {
				if (array[i+2] = 20){}
			}
		
		}}
return array		
}

var answer1 = tenRun([2, 10, 3, 4, 20, 5]);
var answer2 = tenRun([10, 1, 20, 2]);
var answer3 = tenRun([10, 1, 9, 20]);

document.write("<h1>Exercise 10</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")

// Question 11
function twoTwo(array) {

	
	for (var i = 0; i < array.length; i++) {
		if (array[i] != 2)
		continue;
		if (i >= 1 && array[i-1] == 2)
		continue;
		if (i < (array.length-1) && array[i+1] ==2)
		continue;
		return false;	
		}
	return true;
	}


var answer1 = twoTwo([4, 2, 2, 3])
var answer2 = twoTwo([2, 2, 4])
var answer3 = twoTwo([2, 2, 4, 2])


document.write("<h1>Exercise 11</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")

// Question 12
function shiftLeft(array) {
var left = array.slice(0,1)
var rest = array.slice(1,)
var narray = rest.concat(left)

return narray
	}


var answer1 = shiftLeft([6, 2, 5, 3]) 
var answer2 = shiftLeft([1, 2]) 
var answer3 = shiftLeft([1]) 


document.write("<h1>Exercise 12</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")

// Question 13
function evenOdd(array) {

var even = []
var odd = []

for (var i = 0; i < array.length; i++) {
	if ((array[i] % 2) == 0) {
		even.push([array[i]])
	}else{
		odd.push([array[i]])
	}
}
return even.concat(odd)
}

var answer1 = evenOdd([1, 0, 1, 0, 0, 1, 1])  
var answer2 = evenOdd([3, 3, 2]) 
var answer3 = evenOdd([2, 2, 2])


document.write("<h1>Exercise 13</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")

// Question 14
function fizzBuzz(a, b) {

var list = [];
for (var i = a; i < b; i++) {
	list.push(i);
}
for (var i = 0; i < list.length; i++) {
	if ((list[i] %3) == 0){
		list[i] = "Fizz"
	}
	if ((list[i] %5) == 0) {
		list[i] = "Buzz"
	}
}
	return list
}



var answer1 = fizzBuzz(1, 6) 
var answer2 = fizzBuzz(1, 8) 
var answer3 = fizzBuzz(1, 11) 


document.write("<h1>Exercise 14</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")

// Question 15
function countClumps(array) {

var count = 0;
for (var i = 0; i < array.length; i++) {
	if (array[i] == array[i-1] == array[+1])
		continue;
	count = count;
	if (array[i] == array[i+1]) {
		count++;
	}
}
return count
}



var answer1 = countClumps([1, 2, 2, 3, 4, 4])  
var answer2 = countClumps([1, 1, 2, 1, 1]) 
var answer3 = countClumps([1, 1, 1, 1, 1]) 


document.write("<h1>Exercise 15</h1>")
document.write("<h2>Test Case 1 : " + answer1 + "</h2>")
document.write("<h2>Test Case 2 : " + answer2 + "</h2>")
document.write("<h2>Test Case 3 : " + answer3 + "</h2>")