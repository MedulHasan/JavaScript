function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}


var canWalk = {
    walk: function() {
        console.log('Walking..');
    }
}

var canEat = {
    eat: function() {
        console.log('Eating...');
    }
}

var canSwim = {
    swim: function() {
        console.log('Swiming...');
    }
}

// var person = Object.assign({}, canWalk, canEat)
// person.name = 'medul'

function Person(name) {
    this.name = name
}

mixin(Person.prototype, canEat,canWalk)

var person = new Person('Medul')

console.log(person);

function GoldFish(name) {
    this.name = name
}

mixin(GoldFish.prototype, canEat,canWalk)

var fish = new GoldFish('golden fish')
console.log(fish);

