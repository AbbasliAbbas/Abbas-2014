a = 5
b = 10

console.log(a + b)
console.log(b - a)
console.log(a * b)
console.log(b / a)



// program to check if the number is even or odd
// take input from the user
const number = prompt("reqemi yaz bura(:");

//check if the number is even
if(number % 2 == 0) {
    console.log("bu reqem cutdir.");
}

// if the number is odd
else {
    console.log("bu reqem cut deyil.");
}

//10
function sumArray(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var result = sumArray(numbers);
  console.log(result); // Output: 12



  //11
//12
  const median = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };
  console.log(median([1, 2, 3, 4, 5]));

  //13


  //14
  function reverseString(str){
    const reversedString = 
    str.split("").reduce((acc, char) => char + acc, "");
    console.log(reversedString);
}
reverseString("JavaScript");


//15 
// function that check str is palindrome or not 
function check_palindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        let x = str[i];//forward character 
        let y = str[j - i];//backward character
        if (x != y) {
            // return false if string not match
            return false;
        }
    }
    /// return true if string is palindrome
    return true;

}

//function that print output if string is palindrome
function is_palindrome(str) {
    // variable that is true if string is palindrome
    let ans = check_palindrome(str);
    //condition checking ans is true or not 
    if (ans == true) {
        console.log("passed string is palindrome ");
    }
    else {
        console.log("passed string not a palindrome");
    }
}
// test variable
let test = "racecar";
is_palindrome(test);

//16
function func() {
	let str = 'abbasabbasli';
	let string = str.toUpperCase();
	console.log(string);
}
func();




//17
let originalString = "Abbas Abbasli";
let lowercasedString = originalString.toLowerCase();

console.log(lowercasedString); // Output: "hello world"


//18
function capitalizeFLetter() {
	let string = 'abbasabbasli';
	console.log(string[0].toUpperCase() +
		string.slice(1));
}
capitalizeFLetter()


//19
function getVowels(string) {
    let Vowels = "aAeEiIoOuU";
    let vowelsCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (Vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log(
    "" +
        "bu sozde bu qeder sait var :" +
        getVowels(
        "Abbas"
        )
);

//20
let str = "Hello GFG";
let cnt = 0;
for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i).toLowerCase();
    if (char >= 'a' && char <= 'z' && !'aeiou'.includes(char)) {
        cnt++;
    }
}
console.log("bu sozde bu qeder samit var:", cnt);


//21  //22
function separateLetters(str) {
    let vowels = "";
    let consonants = "";
    for (let i = 0; i < str.length; i++) {
      let letter = str[i].toLowerCase();
      if ("aeiou".includes(letter)) {
        vowels += letter;
      } else if (letter >= "a" && letter <= "z") {
        consonants += letter;
      }
    }
    return { vowels, consonants };
  }
  
  console.log(separateLetters("Abbas")); 



//23
function containsOnlyDigits(str) {
  return /^\d+$/.test(str);
}

console.log(containsOnlyDigits("123")); // Output: dogru
console.log(containsOnlyDigits("123abc")); // Output: yalan


//25
// Function to generate random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log("1 ve 100 arasinda bir reqem: ")

// Function call
console.log( randomNumber(1, 100) );


//26
// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(10));

//27
let n = 5; 

function factorial(n) { 
	let ans = 1; 
	
	if(n === 0)
		return 1;
	for (let i = 2; i <= n; i++) 
		ans = ans * i; 
	return ans; 
}

console.log(factorial(n));


//28
	function isPowerOfTwo(n) { 
		if (n == 0) 
			return 0; 
		while (n != 1) { 
			if (n % 2 != 0) 
				return 0; 
			n = n / 2; 
		} 
		return 1; 
	} 

	isPowerOfTwo(31) ? console.log("Yes") : console.log("No"); 
	isPowerOfTwo(64) ? console.log("Yes") : console.log("No"); 


//29
function isPerfectSquare(num) {
	if (num <= 0 || typeof num !== "number") {
		return false;
	}

	const sqrt = Math.sqrt(num);
	return Number.isInteger(sqrt);
}

const number1 = 16;
const number2 = 9;
const number3 = 15;

console.log(`${number1} mukemmel kvadratdi:
${isPerfectSquare(number1)}`);
console.log(`${number2} mukemmel kvadratdi:
${isPerfectSquare(number2)}`);
console.log(`${number3} mukemmel kvadratdi:
${isPerfectSquare(number3)}`);


//30
// declaration of the variables  
var n1 = 0,  n2 = 1, next_num, i;  
var num = parseInt (prompt ("bura reqem yaz fibonaci olmasi ucun:"));  
document.write( "Fibonacci reqemi: ");  
for ( i = 1; i <= num; i++)  
{  document.write (" <br> " +  n1); // print the n1  
    next_num = n1 + n2; // sum of n1 and n2 into the next_num  
      
    n1 = n2; // assign the n2 value into n2  
    n2 = next_num; // assign the next_num into n2  
}  


//31

// Define a function named gcd_two_numbers that calculates the greatest common divisor (GCD) of two numbers.
function gcd_two_numbers(x, y) {
  // Check if both x and y are of type number, if not, return false.
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
  
  // Take the absolute values of x and y to ensure positivity.
  x = Math.abs(x);
  y = Math.abs(y);
  
  // Iterate using the Euclidean algorithm to find the GCD.
  while(y) {
      // Store the value of y in a temporary variable t.
      var t = y;
      // Calculate the remainder of x divided by y and assign it to y.
      y = x % y;
      // Assign the value of t (previous value of y) to x.
      x = t;
  }
  // Return the GCD, which is stored in x after the loop.
  return x;
}

// Output the GCD of 12 and 13 to the console.
console.log(gcd_two_numbers(12, 13));
// Output the GCD of 9 and 3 to the console.
console.log(gcd_two_numbers(9, 3));


//32
function decimalToBinary(decimalNumber) { 
	return decimalNumber.toString(2); 
} 

const decimalNum = 25; 
const Result = decimalToBinary(decimalNum); 
console.log(Result);


//34
// Declare and initialize original array 
let marks = [12, 25, 31, 23, 75, 81, 100]; 

// Print Before Sorting Array 
console.log("Original Array"); 
console.log(marks); 

// Call sort function 
marks.sort(); 

console.log("After Sorting in Ascending Order"); 

// Print Sorted Numeric Array 
console.log(marks);


//35
const arr1 = [24.6,23.7,18.9,76.5];
const arr2 = [54,23,12,97,100];

function arrSort(arr) {
	arr.sort((a,b)=>a-b);
	arr.reverse();
	return arr;
}

console.log(arrSort(arr1));
console.log(arrSort(arr2));


//36
let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));


//37
// Using concat() and slice() method 
function mergeSortedArrayUsingConcat(array1, array2) { 
	let sortedArray = [], 
		Array1Index = 0, 
		Array2Index = 0; 
	while ( 
		Array1Index < array1.length && 
		Array2Index < array2.length 
	) { 
		if ( 
			sortFunc( 
				array1[Array1Index], 
				array2[Array2Index] 
			) > 0 
		) { 
			sortedArray.push(array2[Array2Index++]); 
		} else { 
			sortedArray.push(array1[Array1Index++]); 
		} 
	} 
	if (Array2Index < array2.length) { 
		sortedArray = sortedArray.concat( 
			array2.slice(Array2Index) 
		); 
	} else { 
		sortedArray = sortedArray.concat( 
			array1.slice(Array1Index) 
		); 
	} 
	return sortedArray; 
} 
function sortFunc(a, b) { 
	return a - b; 
} 
console.log( 
	mergeSortedArrayUsingConcat( 
		[1, 2, 3, 5, 9], 
		[4, 6, 7, 8] 
	) 
);


//38
function compareArrays(arrfirst, arrsecond) {
  if (arrfirst.length !== arrsecond.length) {
    return false;
  }
  return arrfirst.every((value, index) => value === arrsecond[index]);
 }
 const array1 = [3, 4, 8];
 const array2 = [1, 2, 3];
 const array3 = [3, 4, 8];
 console.log(compareArrays(array1, array2)); 
 console.log(compareArrays(array1, array3));
 
//39
let first_array = [1, 3, 5, 7, 9];
let second_array = [2, 3, 4, 5, 6, 9];

let res_arr = (first_array, second_array) => {
    let new_array = [];
    for (let i = 0; i < first_array.length; i++) {
        for (let j = 0; j < second_array.length; j++) {
            if (first_array[i] === second_array[j]) {
                new_array.push(first_array[i]);
            }
        }
    }
    return new_array;
};

console.log("Array obtained is :");
console.log(res_arr(first_array, second_array));


//40
let A = [7, 2, 6, 4, 5];
let B = [1, 6, 4, 9];

function GFG_Fun() {
    let union = [...new Set([...A, ...B])];
    console.log("Union is: " + union);
}

GFG_Fun();


//41
function isLeapYear(year) {
  if (
      year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
  )
      console.log(" Input year:", year, "is a Leap Year");
  else
      console.log(
          " Input year:",
          year,
          "is NOT a Leap Year"
      );
}

let inputYear = 2021;
isLeapYear(inputYear);
inputYear = 2024;
isLeapYear(inputYear);

//42
function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

console.log(celsiusToFahrenheit(25));


//43
let fahrenheit = prompt("Enter temperature in Fahrenheit: ");
let celsius = (fahrenheit - 32) * 5/9;
console.log(`The temperature in Celsius is ${celsius.toFixed(2)}`);

