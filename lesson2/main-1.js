// if…else
// 1)Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
var a = 0;
if (a >= 0) {
	alert('Верно');
} else {
	alert('Неверно');
}

var a = 1;
if (a >= 0) {
	alert('Верно');
} else {
	alert('Неверно');
}

var a = -3;
if (a >= 0) {
	alert('Верно');
} else {
	alert('Неверно');
}

//  2)Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
var a = 0;
if (a <= 0) {
	alert('Верно');
} else {
	alert('Неверно');
}

var a = 1;
if (a <= 0) {
	alert('Верно');
} else {
	alert('Неверно');
}

var a = -3;
if (a <= 0) {
	alert('Верно');
} else {
	alert('Неверно');
}

//  3)Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
var a = 0;
if (a != 0) {
	alert('Верно');
} else {
	alert('Неверно');
}

var a = 1;
if (a != 0) {
	alert('Верно');
} else {
	alert('Неверно');
}

var a = -3;
if (a != 0) {
	alert('Верно');
} else {
	alert('Неверно');
}


//Задача Вознесение в степень исходного массива исп метод map const input = [ 1, 2, 3, 4, 5 ];
const input = [1, 2, 3, 4, 5];
const root = input.map(num =>Math.pow(num,2));
console.log(root);

// // //Задача (функции работы с массивами)
// // //Даны два массива: ['a', 'b', 'c'] и[1, 2, 3].Объедините их вместе.
var a = ['a', 'b', 'c'];
var b = [1, 2, 3];
var c = a.concat(b);
console.log(c);

// // // Задача (функции работы с массивами)
// // //Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
var arr = ['a', 'b', 'c'];
arr.push(1,2,3);
console.log(arr);

// // //Задача (функции работы с массивами)
// // //Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
var arr = [1, 2, 3];
arr.unshift(4,5,6);
console.log(arr);

// // //Задача (функции работы с массивами)
// // //Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1,2,3].
var arr = [1, 2, 3, 4, 5];
const newArr1 = arr.slice(0, 3);
console.log(newArr1)


// // //Задача (функции работы с массивами)
// // //Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4,5].
var arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(3);
console.log(newArr)

// // //Задача (функции работы с массивами)
// // //Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
var arr = [1, 2, 3, 4, 5];
arr.splice(1,2);
console.log(arr)
// //Задача(функции работы с массивами)
// //Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
var arr = [1, 2, 3, 4, 5];
arr.splice(0, 1);
arr.splice(-1, 1);
console.log(arr)

// // //Задача (функции работы с массивами)
// // //Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]
var arr = [1, 2, 3, 4, 5];
arr.splice(3, 0,'a', 'b', 'c');
console.log(arr)

// //Задача(функции работы с массивами)
// //Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a','b', 2, 3, 4, 'c', 5, 'e'].
var arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a','b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e')
console.log(arr)