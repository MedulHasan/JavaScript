const _radious = new WeakMap()
const _name = new WeakMap()
const _resize = new WeakMap()

class Circle {
    constructor(radious, name) {
        this.size = 100
        _radious.set(this, radious)
        _name.set(this, name)
        _resize.set(this, () => {
            console.log(this.size);
        })
    }

    draw() {
        console.log('Drawing')
        console.log(_radious.get(this), _name.get(this));
        _resize.get(this)()
    }
}

let c1 = new Circle(12, 'medul')
c1.draw()