/*1) Реализуйте класс Worker (Работник), который будет иметь следукицие свойства: name)
(bмя), surname (фамилия), rate (става за день работы), days (количество отработанных
дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату
работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных
дней days */
class Worker {
    name;
    surname;
    rate;
    days;
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(rate, days) {
        let salary = this.rate * this.days;
        return salary;
    }
}
let workerOne = new Worker('Иван', 'Иванов', 10, 31);
console.log(workerOne.name);
console.log(workerOne.surname);
console.log(workerOne.rate);
console.log(workerOne.days);
console.log(workerOne.getSalary());

/* 2) Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все
его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет
работать так:*/
class Worker {
    _name;
    _surname;
    _rate;
    _days;
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }
    getName() {
        return this._name;
    }
    getSurname() {
        return this._surname;
    }
    getRate() {
        return this._rate;
    }
    getDays() {
        return this._days;
    }
    getSalary(rate, days) {
        let salary = this._rate * this._days;
        return salary;
    }
}
workerTwo = new Worker('Иван', 'Иванов', 10, 31);
console.log(workerTwo.getName());
console.log(workerTwo.getSurname());
console.log(workerTwo.getRate());
console.log(workerTwo.getDays());
console.log(workerTwo.getSalary());

/*3) Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства
rate и для свойства days сделайте еще и методы-сеттеры.  */

class Worker {
    _name;
    _surname;
    _rate;
    _days;
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }
    getName() {
        return this._name;
    }
    getSurname() {
        return this._surname;
    }
    getRate() {
        return this._rate;
    }
    getDays() {
        return this._days;
    }
    getSalary(rate, days) {
        let salary = this._rate * this._days;
        return salary;
    }
    setRate(num) {
        this._rate= num;
    }
    setDays(num) {
        this._days = num;
    }
}
let workerThree = new Worker('Иван', 'Иванов', 10, 31);
console.log(workerThree.getRate());
console.log(workerThree.getDays());
console.log(workerThree.getSalary());
workerThree.setRate(40);
workerThree.setDays(40);
console.log(workerThree.getSalary());

/*4) Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
который параметром принимает строку; а возвращает ее в перевернутом виде, метод 
ucFirst(), который параметром принимает строку; а возвращает эту же строку, сделав ее
первую букеу заглавной и метод ucWords, который принимает строку и делает заглавной
первую бухву каждого слова этой строки.*/

class MyString {
    constructor() {
    }
    reverse(str) {
        let reversStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversStr += str[i];
        }
        return reversStr;
    }
    ucFirst(str) {
        let newStr = str[0].toUpperCase() + str.slice(1);
        return newStr;
    }
    ucWords(str) {
        let arr = str.split(' ');
        let strArr = [];
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let newStr = a[0].toUpperCase() + a.slice(1);
            strArr.push(newStr);
        }
        return strArr.join(' ');
    }

}
let str = new MyString();
console.log(str.reverse('Привет мир'));
console.log(str.ucFirst('привет мир'));
console.log(str.ucWords('привет дивный мир'));

// 5) Реализуйте класс Student (Студент), который будет наследовать от класса User .
// Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год поступления в вуз). Класс
// должен иметь метод getFullName() (наследуется от User), с помощью которого
// можно вывести одновременно имя и фамилию студента. Также класс должен
// иметь метод getCourse() , который будет выводить текущий курс студента (от 1 до
// 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
// Текущий год получите самостоятельно.

class User {
    name;
    surname;
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        return this.name+ ' ' + this.surname;
    }
}
class Student extends User {
    year;
    constructor(name,surname,year) {
        super(name,surname)
        this.year = year;
    }
    getCourse() {
        const currentYear = new Date().getFullYear();
        return currentYear-this.year
    }
}
let student = new Student('Иван', 'Иванов', 2018);
console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.getCourse());
