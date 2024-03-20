// Object - {}
// слычный

// keys - ключ (жаны массивге салып берет)
// values- значение ()
// entries - ключ значенияларын баарын бир массивге салып берет.
// console.log(typeof{});

// console.log(replaseToUpperCase("hello jibek"));

// function natan(time){

//     return Math.floor(time*0.5);
// }

// console.log("NATAN",natan(3));
// console.log("NATAN",natan(6.7));
// console.log("NATAN",natan(11.8));

// function kolvo(s,_j){
// return Math.kolvo(s.j);
// }
// console.log(kolvo(5,3));//125
// console.log(kolvo(2,10));//1024
// console.log(kolvo(3,3));//27
// console.log(kolvo(4,3));//64

// function foo(number){
//     return number.toString().Length;
// }
// console.log(foo(1000));//4
// console.log(foo(100));//3
// console.log(foo(10));//2
// console.log(foo(1000000));//7

///

// Math.abs-отриацельное на положительное
// Math.ceil-положитенльное
// Math.floor-округляет нижние числа
// Math.round-
// Math.pow-
// Math.sqrt-
// Math.random-рандомные числа

// 3 вида функции
// function declaration
//  function ARROW
// function expression

// function gap(a,b){
//     return a+b;

// let obj = {
//     id: 1,
//     name: "ilgiz",
//     username:"satkynov",
//     job: "developer",
//     age: "15",
//     hobby: {
//         sport: "sketing",
//         game:"pubg"
//     }
//   }
//   obj.age = "16"
// console.log(obj.age);
// console.log(obj.hobby.sport);
// console.log(obj.username);

// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// let obj = {a: 1, b: 2, c: 3};
// let keys = Object.keys(obj).length
// console.log(keys);

// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.
// let obj = {a: 1, b: 2, c: 3}
// console.log(obj.c)
// console.log(obj["c"])

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
// let obj = { Ширин: '1000', Айжан: '500', Атай: '200' }
// console.log(obj.Атай);
// console.log(obj.Ширин);

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.
// let obj = { Ширин: '1000', Айжан: '500', Атай: '200' }
// obj.Атай = "500"
// console.log(obj)

// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Добавьте к объекту ключ Медет со значением 1500.
// let obj = {Ширин: '1000', Айжан: '500', Атай: '200'};
// obj.Медет = '1500';
// console.log(obj);

// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите значение ключа salary в консоль.
// let obj = {
//     Ширин: '1000',
//     Айжан: '500',
//     Атай: { salary: '500' }
// }
// console.log(obj.Атай.salary);

// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
// let s = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// };
// let obj = 6;
// console.log(`Сегодня ${days[obj]}`);

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
// let week = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// };

// let day = 3;
// console.log(`День недели: ${week[day]}`);

// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все ключи объекта.
// let obj = {
//     Ширин: '1000',
//     Айжан: '500',
//     Атай: { salary: '500' }
// };
// let keys = Object.keys(obj);
// console.log(keys);

//     10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.
// let obj = {
//     Ширин: '1000',
//     Айжан: '500',
//     Атай: { salary: '500' }
// };
// let values = Object.values(obj);
// console.log(values);

//     11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.
// let obj = {
//     Ширин: '1000',
//     Айжан: '500',
//     Атай: { salary: '500' }
// };

// let piko = Object.entries(obj);
// console.log(piko);
// [    ['Ширин', '1000'],
//     ['Айжан', '500'],
//     ['Атай', { salary: '500' }]
// ]

//     12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.
// function func(obj) {
//     if (obj.name.length % 2 === 0) {
//         return '0'
//     } else {
//         return '1'
//     }
// }

// console.log(func({name: 'Igor'}));

// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.

// function obj(arr) {
//     arr.map(obj => {
//
