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

    // getradious() {
    //     return _radious.get(this)
    // }

    get radious() {
        return _radious.get(this)
    }

    set radious(v) {
        _radious.set(this, v)
    }

    draw() {
        console.log('Drawing')
        console.log(_radious.get(this), _name.get(this));
        _resize.get(this)()
    }
}

let c1 = new Circle(12, 'medul')
c1.draw()
c1.radious = 150
console.log(c1.radious);