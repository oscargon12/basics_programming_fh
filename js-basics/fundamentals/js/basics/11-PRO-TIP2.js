const biggerNum = (a, b) => (a > b) ? a : b; //Al solo tener unreturn está implicito
//Si a es bigger a b retorne a
console.log(biggerNum(20, 15));

const hasMembership = (member) => (member) ? 2 : 8;
console.log(hasMembership(true));

const isFriend = true;
const friendsArr = [
  'Tony',
  'Peter',
  'Bruce',
  isFriend ? 'Thor' : 'Loki',
  biggerNum(7, 5)
]

console.log(friendsArr)

const rate = 95;
const qualification = (rate >= 90) ? 'A' :
                      (rate >= 70) ? 'B' :
                      (rate >= 50) ? 'C' :
                      (rate >= 30) ? 'D' : 'F';

console.log({rate, qualification})
