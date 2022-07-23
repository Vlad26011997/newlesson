class Entity {
	price;
	calories;

	constructor(price, calories) {
		this.price = price;
		this.calories = calories;
	}
}

class Hamburger extends Entity {
	cheese;
	potato;
	salad;

	extraFillings = [];

	constructor(price, calories, cheese, potato, salad) {
		super(price, calories);
		this.cheese = cheese;
		this.potato = potato;
		this.salad = salad;
	}

	setExtraFillings(extraFillings) {
		this.extraFillings = extraFillings;
	}

	addExtraFilling(extraFilling) {
		this.extraFillings.push(extraFilling);
	}

	getPrice() {
		this.price += Hamburger[size].price;
		
		var checkedBoxes = document.querySelectorAll('input[name=add]:checked');
		for(var i = 0; i < checkedBoxes.length; i++){
				var add = checkedBoxes[i].id;
			  this.price += Hamburger[add].price;
		}
		
		Hamburger.result(this.price);
	}
	getCalories() {
		this.calories += Hamburger[size].calories;
		var checkedBoxes = document.querySelectorAll('input[name=add]:checked');
		for(var i = 0; i < checkedBoxes.length; i++){
				var add = checkedBoxes[i].id;
				this.calories += Hamburger[add].calories;
		}
		
		Hamburger.result(this.calories);
	}
}

class BigHamburger extends Hamburger {
	constructor(price, calories, cheese, potato, salad) {
		super(price, calories, cheese, potato, salad);
	}
}

class SmallHamburger extends Hamburger {
	constructor(price, calories, cheese, potato, salad) {
		super(price, calories, cheese, potato, salad);
	}
}


class Filling extends Entity {
	constructor(price, calories) {
		super(price, calories);
	}
}

class RequiredFilling extends Filling {
	constructor(price, calories) {
		super(price, calories);
	}
}

class Cheese extends RequiredFilling {
	constructor(price, calories) {
		super(price, calories);
	}
}
class Potato extends RequiredFilling {
	constructor(price, calories) {
		super(price, calories);
	}
}
class Salad extends RequiredFilling {
	constructor(price, calories) {
		super(price, calories);
	}
}

class NotRequiredFilling extends Filling {
	constructor(price, calories) {
		super(price, calories);
	}
}

class Spice extends NotRequiredFilling {
	constructor(price, calories) {
		super(price, calories);
	}
}

class Mayonnaise extends NotRequiredFilling {
	constructor(price, calories) {
		super(price, calories);
	}
}

const cheese = new Cheese(10, 20);
const potato = new Potato(20, 5);
const salad = new Salad(15, 10);

const spice = new Spice(15, 0);
const mayonnaise = new Mayonnaise(20, 5);

const small = new SmallHamburger(50, 20, cheese, potato, salad);
const big = new BigHamburger(100, 40, cheese, potato, salad);

console.log('first', small);

small.addExtraFilling(mayonnaise);

console.log("second", small);

small.addExtraFilling(mayonnaise);
small.addExtraFilling(mayonnaise);
small.addExtraFilling(spice);

console.log("third", small);