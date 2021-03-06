class Tree {
    constructor(size = '10', leaves = {
        spring: 'green',
        summer: 'green',
        fall: 'orange',
        winter: null
    }) {
        this.size = size;
        this.leaves = leaves;
        this.leafColor = null;
    }

    changeSeason(season) {
        this.leafColor = this.leaves[season];
        if (season === 'spring') {
            this.size += 1;
        }
    }
}

class Maple extends Tree {
    constructor(syrupQty = 15, size, leaves) {
        super(size, leaves);
        this.syrupQty = syrupQty;
    }

    changeSeason(season) {
        super.changeSeason(season);
        if (season === 'spring') {
            this.syrupQty += 1;
        }
    }

    gatherSyrup() {
        this.syrupQty -= 3;
    }
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');
console.log(myMaple.size);
console.log(myMaple);
console.log(myMaple instanceof Tree);
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(digits[Symbol.iterator]());