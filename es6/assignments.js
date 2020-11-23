let name,age;
let peopleList = [];
let n = parseInt(prompt('Enter n : '))
for (let i=0;i<n;i++){
    let obj = {};
    obj.name = prompt(`Enter person ${i+1} Name`)
    obj.age = parseInt(prompt(`Enter ${obj.name} Age: `))
    peopleList.push(obj);
}
console.log('People List',peopleList);

let result = peopleList.map(function(object,index){
    if (object.age > 18) return `Eligible : ${object.name} ${object.age}`
    else return `Not Eligible : ${object.name} ${object.age}`
});

console.log(result); 