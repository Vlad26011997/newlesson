    //Задание 1
//Написать функцию которая первым принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
function task1
function arrayFill(value, length) { 
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;
}

console.log(arrayFill('x', 5));

    //Задание 2
//Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
        function task2
        var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
        let sum = 0;
        arr.forEach(doubleArray => {
            doubleArray.forEach(array => {
                array.forEach(num => {
                    sum += num;  
                })
            })
                });


    //Задание 3
  // Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
    // Если это так - пусть функция возвращает true, если не так - false.
    function task3
    function isNumberInRange (num) {
     return num > 0 && num <= 10;
     }
    
    console.log(isNumberInRange(10))
    

    //Задание 4
// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет.Если четное - пусть функция возвращает true, если нечетное - false.
    function task4
    function isEven(num) {
    return num % 2 == 0;
    }
    
    console.log(isEven(5));

    //Задание 5
//Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
//Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
    function task5
    var arr = [0,2,4,7,3,9,6,4,5,8,76,8,18,69];
    var newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
     if (isEven(i)) {
        newArr.push(i);
      }
    }
    
     console.log(newArr);

    //Задание 6
// Сделайте функцию getDivisors, которая параметром принимает число и возвращает 
//массив его делителей(чисел, на которое делится данное число).
    function task6
    function getDivisors(num) {
        var res = [];
        for (let i = 1; i < num; i++) {
        if (num % i == 0) {
           res.push(i);
        }
       }
      return res;
     }
    
console.log(getDivisors(2835));
    function task7
    //Задание 7
   //Создайте функцию, которая получает два параметра – число и степень числа. Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.
   function pow(x, n) {
       return  x ** n;
    }
    console.log(pow(3,2));
   
    //Задание 8
    //Функция принимает параметр - возраст пользователя. Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.
    function task8
    function normal(age) {
        if (age > 16) {
            console.log('Добро пожаловать');
        } else {
            console.log('Вы ещё молоды');
        }
    }
    //Задание 9
    //Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию. В таком случае выведите сообщение – “Введите возраст”. Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.
    function task9
    function normal(age) {
                    if (typeof age === "undefined" || isNaN(age)) {
                        console.log("Введите возраст");
                        return;
                    }
                    if (age > 16) {
                        console.log('Добро пожаловать');
                        
                    } else {
                        console.log('Вы ещё молоды');
                    }
                }
    //Задание 10
   //Создайте функцию, которая считает длину массива и возвращает ее в виде числа. Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.
   function task10
   function arrayLength(array) {

        if (!Array.isArray(array)) return 'Ошибка';

        return array.length;

        };

        console.log(arrayLength([2, 2]));
    //Задание 11
    //Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8. Реализуйте решение с несколькими return.
    function task11
    function hw11(num) {
        if (num > 10) return num ** 2;
        if (num < 7) return 'Num is lower then 7';
        if (num === 8 || num === 9) return num - 1;
        }
        console.log(hw11(9));
            
        

    //Задание 12
    //Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
    // Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
    // делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
    function task12 {
    function ucfirst(string) {
        return string[0].toUpperCase() + string.substr(1);
        }
        const string = 'We Need Learn More';
        const arr = str.split(' ');
        const result = arr.map(word => ucfirst(word))
        
        var newStr = res.join(' ');
       }; 
       task12(newStr);
    //Задание 13
    //Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
        
    function task13(str) {
            const arr = str.split('_');
            let res = [];   
            for (let i = 0; i < arr.length; i++) {
                const word = arr[i];
                if (i === 0) {
                    res.push(word);
                } else {
                    res.push(ucfirst(word))
                }
            
            }
            console.log(res.join(""));
        };
        task13('var_text_hello');
      
            
        //Задание 14
        //Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false. 
        function task14
        function inArray(value,arr) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == value) {
                return true;
                }
            }
            return false;
            }
           
        
        //Задание 15
        //Дана строка, например, '123456'. Сделайте из нее '214365'.
            function task15
            const str = '123456';
            const arr = str.split("");

            for ( let i =1; i < arr.length; i=+2) {
                const temp = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = temp;
            }
            
            console.log(arr.join(""));
           
