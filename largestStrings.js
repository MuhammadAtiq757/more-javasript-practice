// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।

// let nameOne = "join";
// let nameTwo = "Alexis";

// let FriendOneLength = nameOne.length;
// let FriendTwoLength = nameTwo.length;

// if(FriendOneLength > FriendTwoLength){
//     console.log(nameOne.split('').reverse().join(''));
// }

// else{
//     console.log(nameTwo.split('').reverse().join(''));
// }






// function reverseName(nameOne, nameTwo){
//     let FriendOneLength = nameOne.length;
//     let FriendTwoLength = nameTwo.length;
    
//     if(FriendOneLength > FriendTwoLength){
//         return nameOne.split('').reverse().join('');
       
//     }
    
//     else{
//        return nameTwo.split('').reverse().join('');
//     } 
// }

// const result = reverseName("muhammadatiq", "atiqullah");
// console.log(result);

  




// optional way
let str = "muhammad";

for(let i = str.length-1; i>=0; i--){
    const element = str[i];
    console.log(element);
}