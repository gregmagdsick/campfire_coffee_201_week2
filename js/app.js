//my JS will go here//


//building my pikeplace obect//
var pike = {
  minHr: 14,
  maxHr: 55,
  cupCust: 1.2,
  lbCust: 3.7,
  custHour: function(minHr, maxHr) {
    return Math.floor(Math.random() * (this.maxHr - this.minHr +1)) + this.minHr
  }
}
