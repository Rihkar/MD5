// // math.sum()()(1,3).sum // return 13
// const math = {
//     sum: () => () => () => (a:number, b:number) => ({
//       sum: Number(`${a}${b}`),
//     }),
//   };
  
//   console.log(math.sum()()()(1, 3).sum);
  
//   // human().rights[2][1].amendment[2].paragraph() // 'Lorem Ipsum'
//   const human = () => ({
//     rights: [
//       [],
//       [],
//       [
//         [],
//         {
  
//           amendment: [{}, {}, {
//             paragraph: () => 'lorem ipsum',
  
//           },
//           ],
//         },
//       ],
//     ],
  
//   }as any);
  
//   console.log(human().rights[2][1].amendment[2].paragraph());
  

  
//   const car = [
//     {},
//     {
//       name: 'Volvo',
//     },
//   ];
//   console.log(car[1].name);
  
//   const car2 = { sum: () => '300000eur' };
  
//   console.log(car2.sum());
  
//   const car3 = {
//     model:
//      { color: 'red' },
//   };
  
//   console.log(car3.model.color);
  
//   const fruit:any = [[[], 'apple']];
//   console.log(fruit[0][1]);
  
//   const humann = {
//     name: (a:string) => a,
//   };
//   console.log(humann.name('Jānis'));
  
//   const mathi = (a:any, b:any) => () => () => () => () => () => () => () => () => (z:any) => Math.pow(Math.pow(a, b), z);
//   console.log(mathi(2, 2)()()()()()()()()(3)); 
  
  
  
  
  
  
  
  //KETIJAS MD
  
  //1.UZD Write a function that takes two numbers (a and b) as argument Sum a and b Return the resul

  const sumNum = (a:number, b:number):number => a + b;
  
  console.log(sumNum(1, 2));
  console.log(sumNum(1, 10));
  console.log(sumNum(99, 1));

  //2.UZD Write a function that takes a value as argument Return the type of the value

  const valueType = (x:any) => typeof (x);
  
  console.log(valueType(1));
  console.log(valueType(false));
  console.log(valueType({}));
  console.log(valueType(null));
  console.log(valueType('string'));
  console.log(valueType(['array']));
  
  //3.UZD Write a function that takes two values, say a and b, as arguments Return true if the two values are equal and of the same type

  const equal = (a:any, b:any):boolean => a === b;
  console.log(equal(2, 3));
  console.log(equal(3, 3));
  console.log(equal(1, '1'));
  console.log(equal('10', '10'));

  //4.UZD Write a function that takes a string (a) and a number (n) as arguments Return the nth character of 'a'
  
  const wordChar = (a:string, b:number):string => a.charAt(b - 1);
  console.log(wordChar('abcd', 1));
  console.log(wordChar('zyxbwpl', 5));
  console.log(wordChar('gfedcba', 3));

  //5.UZD Write a function that takes a string (a) as argument Remove the first 3 characters of a Return the result
  
  const removeFirstThree = (a:string):string => a.slice(3);
  console.log(removeFirstThree('abcdefg'));
  console.log(removeFirstThree('1234'));
  console.log(removeFirstThree('fgedcba'));

  //6.UZD Write a function that takes a string as argument Extract the last 3 characters from the string Return the result

  const extractLastThree = (a:string):string => a.substr(-3, 3);
  console.log(extractLastThree('abcdefg'));
  console.log(extractLastThree('1234'));
  console.log(extractLastThree('fgedcba'));



  //7.UZD Write a function that takes a string (a) as argument Get the first 3 characters of a Return the result
  
  const getFirstThree = (a:string):string => a.slice(0, 3);
  console.log(getFirstThree('abcdefg'));
  console.log(getFirstThree('1234'));
  console.log(getFirstThree('fgedcba'));

  //8.UZD Write a function that takes a string (a) as argument Extract the first half a Return the result
  
  const divide = (a:string):string => {
    const halfNum = (a.length) / 2;
    return a.substring(0, halfNum);
  };
  console.log(divide('abcdefgh'));
  console.log(divide(('1234')));
  console.log(divide('gedcba'));

  //9.UZD Write a function that takes a string (a) as argument Remove the last 3 characters of a Return the result
  
  const removeLastThree = (a:string):string => a.slice(0, -3);
  console.log(removeLastThree('abcdefg'));
  console.log(removeLastThree('1234'));
  console.log(removeLastThree('fgedcba'));

  //10.UZD Write a function that takes two numbers (a and b) as argument Return b percent of a
  
  const percentage = (num:number, per:number):number => (num / 100) * per;
  console.log(percentage(100, 50));
  console.log(percentage(10, 1));
  console.log(percentage(500, 25));

  //11.UZD Write a function that takes 6 values (a,b,c,d,e,f) as arguments Sum a and b Then substract by c 
  //Then multiply by d and divide by e Finally raise to the power of f and return the result Tip: mind the order
  
  const formula = (a:number, b:number, c:number, d:number, e:number, f:number):number => {
    const firstCalc = ((((a + b) - c) * d) / e);
    const secondCalc = Math.pow(firstCalc, f);
    return secondCalc;
  };
  
  console.log(formula(6, 5, 4, 3, 2, 1));
  console.log(formula(6, 2, 1, 4, 2, 3));
  console.log(formula(2, 3, 6, 4, 2, 3));

  //12.UZD Write a function that takes a number as argument If the number is even, return true Otherwise, return false

  const isEven = (a:number):boolean => a % 2 === 0
  console.log(isEven(10));
  console.log(isEven(-4));
  console.log(isEven(5));
  console.log(isEven(-111));

  //13.UZD Write a function that takes two strings (a and b) as arguments Return the number of times a occurs in b

  const timesAOccursInB = (a:string, b:string):number => {

     function letterFilter(letter:string) {
      if(letter === a){
        return letter
      }
    }
      const c = b.split('').filter(letterFilter); 
      return c.length;
  }
  
  console.log(timesAOccursInB('m', 'how many times does the character occur in this sentence?'));
  console.log(timesAOccursInB('h', 'how many times does the character occur in this sentence?'));
  console.log(timesAOccursInB('?', 'how many times does the character occur in this sentence?'));
  console.log(timesAOccursInB('z', 'how many times does the character occur in this sentence?'));

  //14.UZD Write a function that takes a number (a) as argument If a is a whole number (has no decimal place), return true Otherwise, return false

  const isAWholeNumber = (a:number):boolean => a % 1 === 0

  console.log(isAWholeNumber(4));
  console.log(isAWholeNumber(1.123));
  console.log(isAWholeNumber(1048));
  console.log(isAWholeNumber(10.48));

  //15.UZD Write a function that takes two numbers (a and b) as arguments If a is smaller than b, divide a by b Otherwise, multiply both numbers Return the resulting value

  const divideOrMultiplyAAndB = (a:number, b:number) => {
    if(a < b){
      return a/b
    } else {
      return a*b
    };
  };
  console.log(divideOrMultiplyAAndB(10, 100));
  console.log(divideOrMultiplyAAndB(90, 45));
  console.log(divideOrMultiplyAAndB(8, 20));
  console.log(divideOrMultiplyAAndB(2, 0.5));

  //16.UZD Write a function that takes two strings (a and b) as arguments If a contains b, append b to the beginning of a If not, append it to the end Return the concatenation

  const beginningOrEndConcatenation = (a:string, b:string):string => {
  if(a.match(b)){
   return b.concat(a)
  } else {
   return a.concat(b)
  }
  }
  console.log(beginningOrEndConcatenation('cheese', 'cake'));
  console.log(beginningOrEndConcatenation('lips', 's'));
  console.log(beginningOrEndConcatenation('cheese', 'cake'));
  console.log(beginningOrEndConcatenation(' think, therefore I am', 'I'));

  //17.UZD Write a function that takes a number (a) as argument Round a to the 2nd digit after the comma Return the rounded number

  const roundTotheSecondDigit = (a:number):number => Math.round(a*100)/100

  console.log(roundTotheSecondDigit(2.12397))
  console.log(roundTotheSecondDigit(3.136))
  console.log(roundTotheSecondDigit(1.12397))
  console.log(roundTotheSecondDigit(26.1379))

  //19.UZD Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array Tip:
  //you might want to change the type of the number for the splitting
     
  const numberToArray = (a:number) => a.toString().split('').map(i=>Number(i))

  console.log(numberToArray(10));
  console.log(numberToArray(931));
  console.log(numberToArray(193278));

  //20.UZD It seems like something happened to these strings Can you figure out how to clear up the chaos? 
  //Write a function that joins these strings together such that they form the following words:
  //'Javascript', 'Countryside', and 'Downtown' You might want to apply basic JS string methods such as replace(), split(), slice() etc.

  const fixString = (a:string, b:any):string =>{    

    const fixedAString = a.split('').filter(noWierdChars);
    const fixedBString = b.split('').filter(noWierdChars);

    function noWierdChars(notALetter:any){
      if(notALetter !== '%'){
        return notALetter
      };
    };

    return fixedAString.join('').concat(fixedBString.reverse().join('')) 

  }; 

  console.log(fixString('java', 'tpi%rcs'));
  console.log(fixString('c%ountry', 'edis'));
  console.log(fixString('down', 'nw%ot'));  

  //21.UZD This challenge is a little bit more complex Write a function that takes a number (a) as argument If a is prime, return a If not, return the next higher prime number
  //te man smadzenes ni bumbum -_______________________-

  const returnPrime = (a:number):number =>{
    for(let i = 2; i < a ; i++) {
        if(a % i === 0) {
            return returnPrime(a + 1)
        }
    }
    return a;
};

  console.log(returnPrime(38));
  console.log(returnPrime(7));
  console.log(returnPrime(115));
  console.log(returnPrime(2000));

  //22.UZD Write a function that takes two numbers, say x and y, as arguments Check if x is divisible by y If yes, return x 
  //If not, return the next higher natural number that is divisible by y

  const isXDivisibleByY = (a:number, b:number):number => {
    if(a % b === 0){
      return a
      } return isXDivisibleByY(a+1, b)
    };

  console.log(isXDivisibleByY(1, 23));
  console.log(isXDivisibleByY(23, 23));
  console.log(isXDivisibleByY(7, 3));
  console.log(isXDivisibleByY(-5, 7));

  //23.UZD Write a function that takes two strings (a and b) as arguments Beginning at the end of 'a', insert 'b' after every 3rd character of 'a' Return the resulting string

  const insertBInEveryThirdA = (a:string, b:string):string => a.replace(/(?=(...)+$)/g, b);  

  console.log(insertBInEveryThirdA('1234567','.'));
  console.log(insertBInEveryThirdA('abcde','$'));
  console.log(insertBInEveryThirdA('zxyzxyzxyzxyzxyz','w'));

  //24.UZD Write a function that takes a string as argument As it is, the string has no meaning Increment each letter to the next letter in the alphabet Return the correct word

  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const nextAlphabetLetter = (a:string):string => {
    const AToArray =  a.split('').map(match);   
    function match(element:any){
      if(alphabet.includes(element) === true){
        return alphabet[alphabet.indexOf(element) + 1]
      }
      return ''
  }return AToArray.join('')
}

  console.log(nextAlphabetLetter('bnchmf'));
  console.log(nextAlphabetLetter('bgddrd'));
  console.log(nextAlphabetLetter('sdrshmf'));

  //25.UZD Write a function that takes an array (a) and a value (n) as argument Return the nth element of 'a

  const nthIndex = (a:any, b:number) => a[b-1]

  console.log(nthIndex([1,2,3,4,5], 3));
  console.log(nthIndex([10,9,8,7,6], 5));
  console.log(nthIndex([7,2,1,6,3], 1));

  //26.UZD Write a function that takes an array (a) as argument Remove the first 3 elements of 'a' Return the result

  const removeFirstThreeFromArray = (a:any):any => a.splice(3)

  console.log(removeFirstThreeFromArray ([1,2,3,4]));
  console.log(removeFirstThreeFromArray ([5,4,3,2,1,0]));
  console.log(removeFirstThreeFromArray ([99,1,1]));

  //27.UZD Write a function that takes an array (a) as argument Extract the last 3 elements of a Return the resulting array

  const extractLastThreeFromArray = (a:any) => a.reverse().splice(0,3).reverse()

  console.log(extractLastThreeFromArray([1,2,3,4]));
  console.log(extractLastThreeFromArray([5,4,3,2,1,0]));
  console.log(extractLastThreeFromArray([99,1,1]));

  //28.UZD Write a function that takes an array (a) as argument Extract the first 3 elements of a Return the resulting array

  const extractFirstThreeFromArray = (a:any) => a.splice(0,3)

  console.log(extractFirstThreeFromArray([1,2,3,4]));
  console.log(extractFirstThreeFromArray([5,4,3,2,1,0]));
  console.log(extractFirstThreeFromArray([99,1,1]));

  //29.UZD Write a function that takes an array (a) and a number (n) as arguments It should return the last n elements of a

  const lastNElementsOfA = (a:any, b:number) => a.reverse().slice(0, b).reverse()

  console.log(lastNElementsOfA([1, 2, 3, 4, 5], 2));
  console.log(lastNElementsOfA([1, 2, 3], 6));
  console.log(lastNElementsOfA([1, 2, 3, 4, 5, 6, 7, 8], 3));

  //30.UZD Write a function that takes an array (a) and a value (b) as argument The function should clean a from all occurrences of b Return the filtered array

  const cleanAFromAllOccurancesInB = (a:any, b:any) =>{

   const filterA = a.filter(removeB)

  function removeB(element:any){
    if(element !== b){
      return element
    } 
  } return filterA
  };

  console.log(cleanAFromAllOccurancesInB([1,2,3], 2));
  console.log(cleanAFromAllOccurancesInB([1,2,'2'], '2'));
  console.log(cleanAFromAllOccurancesInB([false,'2',1], false));
  console.log(cleanAFromAllOccurancesInB([1,2,'2',1], 1));

  //31.UZD Write a function that takes an array (a) as argument Return the number of elements in a
 
  const numberOfElementsInA = (a:any):number => a.join('').length

  console.log(numberOfElementsInA([1,2,2,4]));
  console.log(numberOfElementsInA([9,9,9]));
  console.log(numberOfElementsInA([4,3,2,1,0]));

  //32.UZD Write a function that takes an array of numbers as argument Return the number of negative values in the array

  const numberOfNegativeNumbers = (a:any) => {
   const onlyNegativeNumbers = a.filter(ToNegativeNumbers)
   function ToNegativeNumbers(element:number){
     if(element < 0){
       return element
     }
   }return onlyNegativeNumbers.length
  }

  console.log(numberOfNegativeNumbers([1,-2,2,-4]));
  console.log(numberOfNegativeNumbers([0,9,1]));
  console.log(numberOfNegativeNumbers([4,-3,2,1,0]));

  //33.UZD Write a function that takes an array of numbers as argument It should return an array with the numbers sorted in descending order

  const sortedInDescendingOrder = (a:any) => a.sort().reverse()

  console.log(sortedInDescendingOrder([1,3,2]));
  console.log(sortedInDescendingOrder([4,2,3,1]));

  //34.UZD Write a function that takes an array of strings as argument Sort the array elements alphabetically Return the result

  const sortedAlphabetically = (a:any) => a.sort()

  console.log(sortedAlphabetically(['b', 'c', 'd', 'a']));
  console.log(sortedAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

  //35.UZD Write a function that takes an array of numbers as argument It should return the average of the numbers

  // array.reduce(function(total, currentValue), initialValue)
   const averageNumber = (a:any) => {
     const reduced = a.reduce(add, 0);
     function add(total:any, currentValue:any) {
      return total + currentValue;
    } return reduced / a.length
  } 
   
   console.log(averageNumber([10,100,40]));
   console.log(averageNumber([10,100,1000]));
   console.log(averageNumber([-50,0,50,200]));

  //36.UZD Write a function that takes an array of strings as argument Return the longest string

  const longestString = (x:string[]):string => x.sort(function (a:string, b:string) {
    return b.length - a.length;
})[0]; 

  console.log(longestString(['help', 'me']));
  console.log(longestString(['I', 'need', 'candy']));

  //37.UZD Write a function that takes an array as argument It should return true if all elements in the array are equal It should return false otherwise

  const allElementsAreEqual = (a:any) => a.every((val:any) => val === a[0]) 

  console.log(allElementsAreEqual([true, true, true, true]));
  console.log(allElementsAreEqual(['test', 'test', 'test']));
  console.log(allElementsAreEqual([1,1,1,2]));
  console.log(allElementsAreEqual(['10',10,10,10]));

  //38.UZD Write a function that takes arguments an arbitrary number of arrays It should return an array containing the values of all arrays

  const combinedArrays = (a:any, b:any, ...c:any) => a.concat(b,...c)

  console.log(combinedArrays([1, 2, 3], [4, 5, 6]));
  console.log(combinedArrays(['a', 'b', 'c'], [4, 5, 6]));
  console.log(combinedArrays([true, true], [1, 2], ['a', 'b']));

  //39.UZD Write a function that takes an array of objects as argument Sort the array by property b in ascending order Return the sorted array

  const sortTheArrayByPropertyB = (x:any) => x.sort((a:any, b:any) => a.b - b.b)

  console.log(sortTheArrayByPropertyB([{a:1,b:2},{a:5,b:4}]));
  console.log(sortTheArrayByPropertyB([{a:2,b:10},{a:5,b:4}]));
  console.log(sortTheArrayByPropertyB([{a:1,b:7},{a:2,b:1}]));

  //40.UZD Write a function that takes two arrays as arguments Merge both arrays and remove duplicate values Sort the merge result in ascending order Return the resulting array

  const mergeArraysAndRemoveDuplicates = (a:any, b:any) => {
    const merged = a.concat(b);   
    return [ ...new Set(merged) ]
  }

  console.log(mergeArraysAndRemoveDuplicates([1, 2, 3], [3, 4, 5]));
  console.log(mergeArraysAndRemoveDuplicates([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

  //41.UZD Write a function that takes an array (a) and a number (b) as arguments Sum up all array elements with a value greater than b Return the sum

  const sumArrayElementsWithGreaterValueThanB = (a:number[], b:number) => {
      const ArraywithElementsgreaterThanB = a.filter(greaterThanB);
      
      function greaterThanB(x:any){
        if(x > b){
          return x
        };
      } 

      let sumArray = ArraywithElementsgreaterThanB.reduce(sumEl,0);  

      function sumEl(acc:number, curr:number){
        return acc+curr
      }
      
      return sumArray
  }

  console.log(sumArrayElementsWithGreaterValueThanB([1, 2, 3, 4, 5, 6, 7], 2));
  console.log(sumArrayElementsWithGreaterValueThanB([-10, -11, -3, 1, -4], -3));
  console.log(sumArrayElementsWithGreaterValueThanB([78, 99, 100, 101, 401], 99));

  //42.UZD Write a function that takes two numbers (min and max) as arguments Return an array of numbers in the range min to max

  const numbersFromMinToMax = (a:number, b:number):number[] => {
    let numberCount:number[] = [];
    
    for(let i = a; i<= b; i++){
      numberCount.push(i)
    } return numberCount
  }

  console.log(numbersFromMinToMax(2, 10));
  console.log(numbersFromMinToMax(1, 3));
  console.log(numbersFromMinToMax(-5, 5));
  console.log(numbersFromMinToMax(2, 7));

  //43.UZD Write a function that takes an array of strings as argument Group those strings by their first letter Return an object that contains properties with keys representing 
  //first letters The values should be arrays of strings containing only the corresponding strings For example, 
  //the array ['Alf', 'Alice', 'Ben'] should be transformed to { a: ['Alf', 'Alice'], b: ['Ben']}

  //NU BET PILNIGS MURGS

  const fromArrayToObject = (a: any[]): { [key: string]: string[] } => {
    return a.reduce((acc, curr) => {
      const firstLetter = curr[0].toLowerCase()
      if (!acc[firstLetter]) {
        acc[firstLetter] = []
      }
      acc[firstLetter].push(curr)
      return acc
    }, {})
  }

//cits variants

//   const fromArrayToObject = (a: string[]): object => {
//     const groupNames = (a: string[]) => {
//         const map = a.reduce((acc: any, val: any) => {
//             let char = val.charAt(0).toLowerCase();
//             acc[char] = [].concat((acc[char] || []), val);
//             return acc;
//         }, {});
//         const res = Object.keys(map).map(el => ({
//             letter: el,
//             names: map[el]
//         }));
//         return res;
//     }; return groupNames(a)
// }

  console.log(fromArrayToObject(['Alf', 'Alice', 'Ben']));
  console.log(fromArrayToObject(['Ant', 'Bear', 'Bird']));
  console.log(fromArrayToObject(['Berlin', 'Paris', 'Prague']));

  //44.UZD Write a function that takes an array with arbitrary elements and a number as arguments Return a new array, the first element should be either the given number itself 
  //or zero if the number is smaller than 6 The other elements should be the elements of the original array Try not to mutate the original array

  const pushNumberInArrayIfGreaterThanFive = (a:any, b:number):any => {
    let samsing = []
    if(b > 5){
      samsing.push(b, ...a)
    } else{
       samsing.push(0, ...a)
    } return samsing
  }

  console.log(pushNumberInArrayIfGreaterThanFive([1,2,3], 6));
  console.log(pushNumberInArrayIfGreaterThanFive(['a','b'], 2));
  console.log(pushNumberInArrayIfGreaterThanFive([null,false], 11));

  //45.UZD Write a function that takes an array (a) and a value (n) as arguments Save every nth element in a new array Return the new array

  const saveEveryNthElement = (a:any, b:any):any =>{
    const numberArr:number[] = [];
    for (let i = -1; i < a.length; i += b) {
      numberArr.push(a[i]);
    }
    return numberArr;
  };

  console.log(saveEveryNthElement([1,2,3,4,5,6,7,8,9,10],3));
  console.log(saveEveryNthElement([10,9,8,7,6,5,4,3,2,1],5));
  console.log(saveEveryNthElement([7,2,1,6,3,4,5,8,9,10],2));

  //46.UZD Write a function that takes an object with two properties as argument It should return the value of the property with key country
 
  const objectCountry =  (a: { continent: string; country: string }): string => a.country

  console.log(objectCountry({  continent: 'Asia',  country: 'Japan'}));
  console.log(objectCountry({  country: 'Sweden',  continent: 'Europe'}));

  //47.UZD Write a function that takes an object with two properties as argument It should return the value of the property with key 'prop-2' Tip:
  //you might want to use the square brackets property accessor

  const propNrTwo = (a: { prop:string, one:number, ['prop-2']:any}):any => a['prop-2'];

  console.log(propNrTwo({  one: 1,  'prop-2': 2, prop:'' }));
  console.log(propNrTwo({  'prop-2': 'two',  prop: 'test', one:0}));

  //48.UZD Write a function that takes an object with two properties and a string as arguments It should return the value of the property with key equal to the value of the string

  // const keyEqualToString = (a:{continent:string, country:string}, b:string):any => {
  //   if(b in a){
  //     return a[{key: b}] //dirsa pls help
  //   }
  // }

  // console.log(keyEqualToString({ continent: 'Asia',  country: 'Japan'}, 'continent'));
  // console.log(keyEqualToString({ country: 'Sweden',  continent: 'Europe'}, 'country'));

  //49.UZD Write a function that takes an object (a) and a string (b) as argument Return true if a has a property with key b Return false otherwise

  const hasPropertyWithKeyB = (a:any, b:string):boolean=> {
    if(b in a){
      return true
    } else{
      return false
    }
  }

  console.log(hasPropertyWithKeyB({a:1,b:2,c:3},'b'));
  console.log(hasPropertyWithKeyB({x:'a',y:'b',z:'c'},'a'));
  console.log(hasPropertyWithKeyB({x:'a',y:'b',z:'c'},'z'));

  // 50.UZD Write a function that a string (a) as argument Create an object that has a property with key 'key' and a value of a Return the objec
   
  const keyWithValueA = (a:string) => ({ key: a });

  console.log(keyWithValueA('a'));
  console.log(keyWithValueA('z'));
  console.log(keyWithValueA('b'));

  //51.UZD Write a function that takes two strings (a and b) as arguments Create an object that has a property with key 'a' and a value of 'b' Return the object

  const propertyAValueB = (a:string, b:string) => ({ [a]:b })

  console.log(propertyAValueB('a','b'));
  console.log(propertyAValueB('z','x'));
  console.log(propertyAValueB('b','w'));

  //52.UZD Write a function that takes two arrays (a and b) as arguments Create an object that has properties with keys 'a' and corresponding values 'b' Return the object

  const propertyAValueBNrTwo = (a:any[], b:any[]) => {
    const result = Object.assign.apply({}, a.map((v,i) => ({[v]:b[i]})));
    return result
  }

  console.log(propertyAValueBNrTwo(['a','b','c'],[1,2,3]));
  console.log(propertyAValueBNrTwo(['w','x','y','z'],[10,9,5,2]));
  console.log(propertyAValueBNrTwo([1,'b'],['a',2]));

  //53.UZD Write a function that takes an object (a) as argument Return an array with all object keys

    const arrayOfObjectKeys = (a:any) =>{
      return Object.keys(a)
    }

    console.log(arrayOfObjectKeys({a:1,b:2,c:3}));
    console.log(arrayOfObjectKeys({j:9,i:2,x:3,z:4}));
    console.log(arrayOfObjectKeys({w:15,x:22,y:13}));

  //54.UZD Write a function that takes an object (a) as argument Return the sum of all object values

    const sumOfAllObjectValues = (a:any):any =>{
      const arrayOfObjectKeys = Object.values(a);

     const output = arrayOfObjectKeys.reduce(function(acc:number,curr:number){
        acc = acc + curr;
        return acc
      })
      return output
    }

    console.log(sumOfAllObjectValues({a:1,b:2,c:3}));
    console.log(sumOfAllObjectValues({j:9,i:2,x:3,z:4}));
    console.log(sumOfAllObjectValues({w:15,x:22,y:13}));

  //55.UZD Write a function that takes an object as argument It should return an object with all original object properties except for the property with key 'b'

    const allPropertiesExceptKeyB = (a:any):any => (({ b, ...o }) => o)(a)  
             
    console.log(allPropertiesExceptKeyB({ a: 1, b: 7, c: 3 }));
    console.log(allPropertiesExceptKeyB({ b: 0, a: 7, d: 8 }));
    console.log(allPropertiesExceptKeyB({ e: 6, f: 4, b: 5, a: 3 }));

  //56.UZD Write a function that takes two objects as arguments Unfortunately, the property 'b' in the second object has the wrong key should be named 'd' instead Merge both objects and correct the wrong property name Return the resulting object It should have the properties 'a', 'b', 'c', 'd', and 'e'

    const mergeObjectsAndCorrectPropertyName = (x:{a:number, b:number}, y:{c:number, b:number, e:number}) => {
      delete Object.assign(y, {['d']: y['b'] })['b']
      const mergedObjects = {...x, ...y}
      return mergedObjects
    }

    console.log(mergeObjectsAndCorrectPropertyName({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
    console.log(mergeObjectsAndCorrectPropertyName({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

  //57.UZD Write a function that takes an object (a) and a number (b) as arguments Multiply all values of 'a' by 'b' Return the resulting object

    const multiplyObjectValues = (a:any, b:number):any => {
        for (const key in a) {
            if (typeof a[key] === 'number') {
                a[key] *= b;
            }
        } return a;
    };

    console.log(multiplyObjectValues({a:1,b:2,c:3},3));
    console.log(multiplyObjectValues({j:9,i:2,x:3,z:4},10));
    console.log(multiplyObjectValues({w:15,x:22,y:13},6));

  //58.UZD Write a function that takes an object as argument Somehow, the properties and keys of the object got mixed up Swap the Javascript object's key with its values and return the resulting object

    const keyValueSwap = (a:{}) =>{
      
      const swapped = Object.entries(a).map(
        ([key, value]) => [value, key]
      );
    
      return Object.fromEntries(swapped);
    }      

    console.log(keyValueSwap({z:'a',y:'b',x:'c',w:'d'}));
    console.log(keyValueSwap({2:'a',4:'b',6:'c',8:'d'}));
    console.log(keyValueSwap({a:1,z:24}));

  //59.UZD Write a function that takes an object as argument Some of the property values contain empty strings Replace empty strings and strings that contain only whitespace with null values Return the resulting object

    const removeEmptyStrings = (o: {
      [key: string]: any
    }): { [key: string]: string | number } => {
      return Object.fromEntries(
        Object.entries(o).map(([key, value]) => {
          if (value.trim() === "") {
            return [key, null]
          } else {
            return [key, value]
          }
        })
      )
    }

    console.log(removeEmptyStrings({ a: 'a', b: 'b', c: '' }));
    console.log(removeEmptyStrings({ a: '', b: 'b', c: ' ', d: 'd' }));
    console.log(removeEmptyStrings({ a: 'a', b: 'b ', c: ' ', d: '' }));

  //60.UZD Write a function that takes an object as argument containing properties with personal information Extract firstName, lastName, size, and weight if available If size or weight is given
  // transform the value to a string Attach the unit cm to the size Attach the unit kg to the weight Return a new object with all available properties that we are interested in 

  const extractPersonalInfo = (o: {
    [key: string]: any
  }): { [key: string]: string } => {
    let newObject = Object.fromEntries(
      Object.entries(o).filter(
        ([key]) =>
          key === "fn" || key === "ln" || key === "size" || key === "weight"
      )
    )
    if (newObject.size) {
      newObject.size = newObject.size.toString()
      newObject.size = newObject.size + "cm"
    }
    if (newObject.weight) {
      newObject.weight = newObject.weight.toString()
      newObject.weight = newObject.weight + "kg"
    }
    return newObject
  }
  
  console.log(
    extractPersonalInfo({
      fn: "Lisa",
      ln: "Müller",
      age: 17,
      size: 175,
      weight: 67,
    })
  ) 
  console.log(
    extractPersonalInfo({
      fn: "Martin",
      ln: "Harper",
      age: 26,
      email: "martin.harper@test.de",
      weight: 102,
    })
  ) 
  console.log(
    extractPersonalInfo({
      fn: "Andrew",
      ln: "Harper",
      age: 81,
      size: 175,
      weight: 71,
    })
  ) 
  console.log(
    extractPersonalInfo({
      fn: "Matthew",
      ln: "Müller",
      age: 19,
      email: "matthew@mueller.de",
    })
  ) 

  //61.UZD Write a function that takes an array of objects and a string as arguments Add a property with key 'continent' and value equal to the string to each of the objects
  //Return the new array of objects Tip: try not to mutate the original array

  const addContinentToObjects = (o: Object[], s: string): Object[] => {
    return o.map((obj) => {
      return { ...obj, continent: s }
    })
  }
  
  console.log(
    addContinentToObjects(
      [
        { city: "Tokyo", country: "Japan" },
        { city: "Bangkok", country: "Thailand" },
      ],
      "Asia"
    )
  ) 
  
  console.log(
    addContinentToObjects(
      [
        { city: "Stockholm", country: "Sweden" },
        { city: "Paris", country: "France" },
      ],
      "Europe"
    )
  ) 

  //62.UZD Write a function that takes an array of numbers as argument Convert the array to an object It should have a key for each unique value of the array 
  //The corresponding object value should be the number of times the key occurs within the array

  const convertArrayToObject = (a: any[]): { [key: number]: number } => {
    return a.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1
      return acc
    }, {})
  }
  
  console.log(convertArrayToObject([1, 2, 2, 3])) 
  console.log(convertArrayToObject([9, 9, 9, 99])) 
  console.log(convertArrayToObject([4, 3, 2, 1])) 

  //63.UZD Write a function that takes two date instances as arguments It should return true if the dates are equal It should return false otherwise

  const areDatesEqual = (d1: Date, d2: Date): boolean => {
    return d1.getTime() === d2.getTime()
  }
  
    console.log(
      areDatesEqual(
        new Date("2000/01/01 08:00:00"),
        new Date("2000/01/01 08:45:00")
      )
    ) 
    console.log(
      areDatesEqual(
        new Date("2000/01/01 08:00:00"),
        new Date("2000/01/01 08:00:00")
      )
    ) 
    console.log(
      areDatesEqual(
        new Date("2001/01/01 08:00:00"),
        new Date("2000/01/01 08:00:00")
      )
    ) 

  //64.UZD Write a function that takes two date instances as argument It should return the number of days that lies between those dates

  const getDaysBetweenDates = (d1: Date, d2: Date): number => {
    return Math.abs(d1.getTime() - d2.getTime()) / (1000 * 3600 * 24)
  }
  
  console.log(getDaysBetweenDates(new Date("2020-06-11"), new Date("2020-06-01"))) 
  console.log(getDaysBetweenDates(new Date("2000-01-01"), new Date("2020-06-01"))) 

  //65.UZD Write a function that takes two date instances as argument It should return true if they fall on the exact same day It should return false otherwise

  const areDatesOnSameDay = (d1: Date, d2: Date): boolean => {
    return d1.getDay() === d2.getDay()
  }
  
  console.log(areDatesOnSameDay(new Date("2000/01/01"), new Date("2000/01/01"))) 
  console.log(areDatesOnSameDay(new Date("2000/01/01"), new Date("2000/01/02"))) 
  console.log(areDatesOnSameDay(new Date("2001/01/01"), new Date("2000/01/01"))) 
  console.log(areDatesOnSameDay(new Date("2000/11/01"), new Date("2000/01/01")))




  // //KETIJAS MD SPREAD OPERATORS
  
  // //Write a function that takes two number arrays as parameters and return an array which contains elements from both arrays

  // const combinedArrays = (a:any, b:any) => [...a, ...b];
  // console.log(combinedArrays([1, 2], [3, 4]));
  // console.log(combinedArrays([1, 2], [3, 4, 5, 6]));


  // //Write a function that takes an array and a string as parameters and return an array which contains all elements from the given array and the given string as the last element

  // const spreadOparetor = (a:any, b:string) => [...a, [b].join('')];

  // console.log(spreadOparetor(['Apple', 'Orange', 'Banana'], 'Kiwi'));


  // //Write a function that takes an array and a string as parameters and return an array which contains all elements from the given array and the given string as the first element

  // const spreadOparetor2 = (a:any, b:string) => [ [b].join(''), ...a];

  // console.log(spreadOparetor2(['Apple', 'Orange', 'Banana'], 'Kiwi'));


  // //Write a function that takes two objects as parameters and return an object which contains properties from both objects

  // const combinedObjects = (a:any, b:any) => [{...a, ...b}];
  // console.log(combinedObjects({ a:1, b:2 }, { c:3, d:4 })[0])
  // console.log(combinedObjects({ a:1, b:2 }, { c:3, d:4, e:5, f:6 })[0])


  // //Write a function that takes an object and a string as parameters and return an object which contains properties from the given object and a new property favoriteMovie with the value equal to the given strin

  
  // const spreadOparetor3 = (a:any, b:string):object => {
  //   a.favoriteMovie = b;
  //   return a
  // }
  // console.log(spreadOparetor3({ eyeColor: 'green', age: 10 }, 'Garfield'))

  



