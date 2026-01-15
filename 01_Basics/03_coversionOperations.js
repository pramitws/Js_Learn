let score = 33 // "null" , undefined , any string 
console.log(typeof(score));

let valueInNumber = Number(score);

// we can't relay on this conversion as we need to check this always 
// 33 => 33
// "33as" => NaN
// true => 1 , false => 0

let isLoggedIn = 1

let valueInBoolean = Boolean(isLoggedIn);
// true => 1 , false => 0
// "" => false
// "anyString" => true
