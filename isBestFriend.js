// Problem 5:  isBestFriend
// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি  প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি  বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

/* { name: "abul", friend: "babul" },

{ name: "babul", friend: "abul" } */


function isBestFriend(objectOne, objectTwo){

if(objectOne.name == objectTwo.friend &&
     objectTwo.friend == objectOne.name){
        return true;
     }
return false;

}

console.log(
    isBestFriend(
        { name: "abul", friend: "babul" },
        { name: "babul", friend: "abul" }
    )
);