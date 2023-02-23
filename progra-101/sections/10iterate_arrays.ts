export let people: string[] = ['Hugo', 'Paco', 'Luis'];
let salaries: number[] = [1000, 1200, 1500]
//let nums: number[] = [1,2,3,4,5];

if (people[3]) {console.log(people[3])} //Si hay algo en esa posicion, imprímalo

for(let i = 0; i < people.length; i++){
    let person = people[i];
    let salary = salaries[i]
    console.log(`El empleado ${person} tiene un sueldo de ${salary}`)
}