(function () {

    var Sapper = function () {
        this.map = {
            width: 4,
            height: 3,
            minesNumber: 5,
            points: []
            // mines: this.getRandomMinesArray(this.map.minesNumber)
        };
    };

    Sapper.prototype.generatePoints = function () {
        // var points = [];
        for (var i = 0; i < this.map.width; i++ ) {
            for (var j = 0; j < this.map.height; j++ ) {
                this.map.points.push({x:i,y:j})
            }
        }
    };

    Sapper.prototype.getPoint = function (c) {
        return this.map.points.filter(function (e) {
            return e.x === c.x && e.y === c.y;
        })[0];
    };

    Sapper.prototype.generateRandomMinesArray = function () {

        var n = this.map.minesNumber;
        for(var i = 0; i < n; i++) {
            var x = Math.floor(Math.random() * this.map.width);
            var y = Math.floor(Math.random() * this.map.height);
            if(this.getPoint({x:x,y:y}).hasMine) {
                i--;
            } else {
                this.getPoint({x:x,y:y}).hasMine = true;
            }
        }
    };

    var sapper = new Sapper();


    sapper.generatePoints();
    sapper.generateRandomMinesArray();
    console.log(sapper);
})();
