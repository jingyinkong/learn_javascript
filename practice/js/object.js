var computer = {
    color: 'black',
    weight: 100,
    brand: '惠普',
    model: '123-3',
    watchMovie: function() {
        console.log("看电影");
    },

    listenMusic: function() {
        console.log('听音乐');
    },

    playGame: function() {
        console.log('玩游戏');
    },

    coding: function() {
        console.log('敲代码');
    }
}

var button = new Object;
button.width = 100;
button.height = 100;
button.backgroundColor = 'red';
button.click = function() {
    console.log('点击');
}

function car(weight, color, brand) {
    this.weight = weight;
    this.color = color;
    this.brand = brand;
    this.manned = function() {
        console.log('载人');
    }
}

var Car = new car(100, 'red', '丰田');

for (var k in computer) {
    console.log(k);
    console.log(computer[k])
}

for (var k in button) {
    console.log(k);
    console.log(button[k])
}

for (var k in Car) {
    console.log(k);
    console.log(Car[k])
}