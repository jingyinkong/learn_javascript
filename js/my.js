function Hero(name, type, blood) {
    this.name = name;
    this.type = type;
    this.blood = blood;
    this.attack = function(attack) {
        console.log(attack);
    }
}

var hero1 = new Hero('后裔', '射手', 100);
hero1.attack('远程');