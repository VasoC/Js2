// 1
let myArr1 = [5, 20, 10, 15, 20];
let arrSum = myArr1[0] + myArr1[1] + myArr1[2] + myArr1[3] + myArr1[4];
// console.log(arrSum)
let arrMean = arrSum / myArr1.length;
// console.log(arrMean);

//2
let person1 = {
  name: "Megi",
  age: 20,
};
let person2 = {
  name: "Giga",
  age: 21,
};
let person3 = {
  name: "Giorgi",
  age: 23,
};
let person4 = {
  name: "Maka",
  age: 25,
};
let person5 = {
  name: "Vaso",
  age: 26,
};
let listPersons = [person1, person2, person3, person4, person5];
// console.log(listPersons)

// 3
let Personsinfo = {
  FirstName: "Vasil",
  LastName: "Chkhartishvili",
  Adress: ["Lanchkhuti vill. Lesa" , "Batumi, Takaishvili str. #79"],
  Age: 26,
  PhoneNumbers: ["59800218", "558000011"],
};

// 4
let myInfo = `My name is ${Personsinfo.FirstName} ${Personsinfo.LastName}, my age is ${Personsinfo.Age}, my adress is ${Personsinfo.Adress[0]}`;
console.log(myInfo);
