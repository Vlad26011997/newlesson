// 1. Задача (Рекурсия)
// Дано натуральное число n. Выведите все числа от 1 до n.
function task1() {
  function main(n) {
    if (n <= 1) {
      console.log(n);
      return;
    }
    main(n - 1);
    console.log(n);
  }
  main(10);
}

// 2. Задача (Рекурсия)
// Даны два целых числа A и В (каждое в отдельной строке). Выведите все числа
// от A до B включительно, в порядке возрастания, если A < B, или в порядке
// убывания в противном случае.
function task2() {
  function main(a, b) {
    if (a < b) {
      if (a === b) {
        return a;
      } else {
        return a + "," + main(a + 1, b);
      }
    } else {
      if (a === b) {
        return a;
      } else {
        return a + "," + main(a - 1, b);
      }
    }
  }
  console.log(main(5, 8));
}

// 3. Задача (Рекурсия)
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и
// циклы, разумеется).
function task3() {
  function main(n) {
    if (n < 9) {
      return n;
    } else {
      return (n % 10) + main(Math.floor(n / 10));
    }
  }
  console.log(main(120));
}

// 4. Задача (Рекурсия)
// Дано натуральное число N. Выведите все его цифры по одной, в обратном
// порядке, разделяя их пробелами или новыми строками.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и
// циклы, разумеется). Разрешена только рекурсия и целочисленная арифметика.
function task4() {
  function printReverse(n) {
    n = parseInt(n);
    if (n < 10) {
      console.log(n);
      return n;
    } else {
      console.log(n % 10);
      return printReverse(n / 10);
    }
  }
  printReverse(446);
}

// 5. Задача (Рекурсия)
// Дано натуральное число N. Выведите все его цифры по одной, в обычном
// порядке, разделяя их пробелами или новыми строками.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и
// циклы, разумеется). Разрешена только рекурсия и целочисленная арифметика.
function task5() {
  function printReverse(n) {
    n = parseInt(n);
    if (n < 10) {
      console.log(n);
    } else {
      printReverse(n / 10);
      console.log(n % 10);
    }
  }
  printReverse(446);
}

// 1)Дан массив. Запишите первый элемент этого массива в переменную elem1,
// второй - в переменную elem2, третий - в переменную elem3, а все остальные
// элементы массива - в переменную arr.
// let arr = ["sun", "rain", "cold", "snow", "winter", "summer"];
function task6() {
  let arr = ["sun", "rain", "cold", "snow", "winter", "summer"];
  let [elem1, elem2, elem3, ...newArr] = arr;
  console.log(elem1, elem2, elem3, newArr);
}

// 2)Дан объект {name: `Vasya`, 'surname': ‘Pupkin’, 'age': ’99’}.
// Запишите соответствующие значения в переменные name, surname и age.
function task7() {
  let user = {
    name: "Vasya",
    surname: "Pupkin",
    age: "99",
  };

  let { name, surname, age } = user;
  console.log(name + " " + surname + " " + age);
  console.log(user);
}
// 3)Дан объект {name: `Vasya`, 'surname': ‘Pupkin’, 'age': ’99’} и
// {job: `FE Developer`}.Обьедените два обькта в один с помощью spread operator.
function task8() {
  let user = {
    name: "Vasya",
    surname: "Pupkin",
    age: "99",
  };

  let user2 = {
    job: `FE Developer`,
  };

  let newObject = {
    ...user,
    ...user2,
  };
  console.log(newObject);
}
// task1();
// task2();
// task3();
// task4();
task5();
// task6();
// task7();
// task8();
