console.log(null > 0); // false
/*
Comparison (>) converts null to a number before comparing.

null is converted to 0.

0 > 0 is false.
*/
console.log(null == 0); // false
/*
The equality check (==) does not convert null to a number.

null is only equal to undefined in loose equality (==), not to numbers.

So, null == 0 is false.
*/

console.log(null >= 0); // true
/*
The >= comparison also converts null to a number (0).

It becomes 0 >= 0, which is true.
*/

// === stirct check this check vale and datatype of them also 
console.log("2" == 2); // true
console.log("2" === 2); // false

//Stack and Heap memory
// primitive type uses stack memory means only copy is given >> string , number , boolean 
// non premitive Heap memory direct reference is given >> array , object ,function

let username = "player 1"
let username1 = username;

username1 = "player 2"

let userdata = {
    userEmailId : "abc@google.com",
    upiId : "ads@ybl"
}

let userData1 =userdata;

userData1.userEmailId="bcd@google.com"

console.log(userData.userEmailId);
