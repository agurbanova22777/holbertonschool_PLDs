//step 1
class Character {
    constructor(name, health, power) {
        this._name = name;
        this._health = health;
        this._power = power;
    }

    get name() {
        return this._name;
    }

    get health() {
        return this._health;
    }

    get power() {
        return this._power;
    }

    set name(value) {
        if (typeof value !== 'string')
            throw new TypeError('Name must be a string');
        this._name = value;
    }

    set health(value) {
        if (typeof value !== 'number')
            throw new TypeError('Health must be a number');
        this._health = value;
    }

    set power(value) {
        if (typeof value !== 'number')
            throw new TypeError('Power must be a number');
        this._power = value;
    }

    describe(name, health, power) {
        return `${name} | HP: ${health} | Power: ${power}`;
    }

    // step 3
    static battle(a, b) {
        let attackA;
        let attackB;

        if(a instanceof Warrior)
            attackA = a.attack();
        else if(a instanceof Mage)
            attackA = a.castSpell();

        if(b instanceof Warrior)
            attackB = b.attack();
        else if(b instanceof Mage)
            attackB = b.castSpell();

        return attackA > attackB ? a : b;
    }
}


//step 2
class Warrior extends Character {
    constructor (name, health, power, shield) {
        super(name, health, power);

        this._shield = shield;
    }

    get shield() {
        return this._shield
    }

    set shield(value) {
        if (typeof value !== 'number')
            throw new TypeError('Shield must be a number');
        this._shield = value;
    }

    attack(power, shield) {
        return (this.power + this.shield) / 2;
    }
}


class Mage extends Character {
    constructor (name, health, power, mana) {
        super(name, health, power);

        this._mana = mana;
    }

    get mana() {
        return this._mana;
    }

    set mana(value) {
        if (typeof value !== 'number')
            throw new TypeError('Mana must be a number');
        this._mana = value;
    }

    castSpell(mana, power) {
        if(this.mana > 0)
            return this.power * 2;
        else
            return 0;
    }
}

const aydan = new Character()
