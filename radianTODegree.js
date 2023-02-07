function radiantToDegree(radian){
const pi = 3.14159;
const degree = (radian * (180/pi)).toFixed(2);
return degree;
     
}

const myRadiant = radiantToDegree(10);
console.log(myRadiant);