//my JS will go here//
var allHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm']



//building my pikeplace obect//
var pike = {
  storeName: 'Pike Place Market',
  hours: allHours,
  customerHours: [],
  cupsEachHour: [],
  beansEachHour: [],
  minHr: 14,
  maxHr: 55,
  cupCust: 1.2,
  lbCust: 3.7,
  dailyCups: 0,
  dailyBeans: 0,

  custHour: function() {
    for (var i = 0; i < this.hours.length; i ++) {
      this.customerHours[i] = Math.floor(Math.random() * (this.maxHr - this.minHr +1)) + this.minHr;
    }
  },
  cupsPerHr: function() {
    for (var i = 0; i < this.hours.length; i ++) {
    this.cupsEachHour[i] = this.customerHours[i] * this.cupCust;
    this.dailyCups += this.cupsEachHour[i];
    this.dailyBeans += this.cupsEachHour[i]/20;
  }
  },
  beanHr: function() {
    for (var i = 0; i < this.hours.length; i ++) {
    this.beansEachHour[i] = this.customerHours[i] * this.lbCust;
    this.dailyBeans += this.beansEachHour[i];
  }
},
  populate: function() {
    this.custHour();
    this.cupsPerHr();
    this.beanHr();

//Creates Title Box for the list
    var h2El = document.createElement('h2');
    h2El.textContent = this.storeName;
    document.body.appendChild(h2El);

//Populate list to website
    for (var i = 0; i < this.hours.length; i ++) {
      var paragraphEl = document.createElement('p');
      paragraphEl.textContent = this.hours[i] + ':' + this.beansEachHour[i].toFixed(1) + ' lbs [' + this.customerHours[i].toFixed(1) + ' customers, ' + this.cupsEachHour[i].toFixed(1) + ' cups (' + (this.cupsEachHour[i]/20).toFixed(1) + ' lbs), ' + this.beansEachHour[i].toFixed(1) + ' lbs to-go]'
      document.body.appendChild(paragraphEl);
    }
  },

      // //populate to website
      // var paragraphEl = document.createElement('p');
      // paragraphEl.textContent = this.hours[j] + ': ' + this.totLbs.toFixed(1) + ' lbs [' + this.customerNumHr.toFixed(1) + ' customers, ' + this.cupHr.toFixed(1) + ' cups (' + this.lbsCupsHr.toFixed(1) + ' lbs), ' + this.beanHr.toFixed(1) + ' lbs to go]';
      // document.body.appendChild(paragraphEl);

      }

pike.populate();

pike.custHour();
console.log(pike.customerHours);
pike.cupsPerHr();
console.log(pike.cupsEachHour);
pike.beanHr();
console.log(pike.beansEachHour);

//create array of stores
var stores = [pike, capHill, spl, slu, seaTac, website];


//iterate through each store
// for (var i = 0; i < stores.length; i++) {
//   var h2El = document.createElement('h2');
//   h2El.textContent = stores[i].storeName;
//   document.body.appendChild(h2El);
//   calculations(stores[i]);
// }
// calculations = function(shopName){
//   for (j = 0; j < shopName.hours.length; j ++){
//     //calculate needed stats for one hour
//     shopName.customerNumHr = shopName.custHour(shopName.minHr, shopName.maxHr);
//     shopName.cupHr = shopName.customerNumHr * shopName.cupCust; // cups of coffee sold per hour
//     shopName.beanHr = shopName.customerNumHr * shopName.lbCust; // lbs of beans sold per hour
//     shopName.lbsCupsHr = shopName.cupHr / 20;
//     shopName.totLbs = shopName.beanHr + shopName.lbsCupsHr; // total beans for this hour
//
//     //populate to website
//     var paragraphEl = document.createElement('p');
//     paragraphEl.textContent = shopName.hours[j] + ': ' + shopName.totLbs.toFixed(1) + ' lbs [' + shopName.customerNumHr.toFixed(1) + ' customers, ' + shopName.cupHr.toFixed(1) + ' cups (' + shopName.lbsCupsHr.toFixed(1) + ' lbs), ' + shopName.beanHr.toFixed(1) + ' lbs to go]';
//     document.body.appendChild(paragraphEl);
//
//     }
//   }
//
// //iterate through each store
// for (var i = 0; i < stores.length; i++) {
//   var h2El = document.createElement('h2');
//   h2El.textContent = stores[i].storeName;
//   document.body.appendChild(h2El);
//   calculations(stores[i]);
// }



var capHill = {
  storeName: 'Capitol Hill',
  hours: allHours,
  minHr: 32,
  maxHr: 48,
  cupCust: 3.2,
  lbCust: 0.4,
  custHour: function(minHr, maxHr) {
    return Math.floor(Math.random() * (maxHr - minHr +1)) + minHr;
  },
  customerNumHr: function() {
    return this.custHour(this.minHr, this.maxHr);
  },
  cupHr: function() {
    return this.customerNumHr * this.cupCust;
  },
  beanHr: function() {
    return this.customerNumHr * this.lbCust;
  },
  lbsCupsHr: function() {
    return this.cupHr / 20
  },
  totLbs: function() {
    return this.beanHr + this.lbsCupsHr;
  }
}


var spl = {
  storeName: 'Seattle Pike Place Market',
  hours: allHours,
  minHr: 49,
  maxHr: 75,
  cupCust: 2.6,
  lbCust: 0.2,
  custHour: function(minHr, maxHr) {
    return Math.floor(Math.random() * (maxHr - minHr +1)) + minHr;
  },
  customerNumHr: function() {
    return this.custHour(this.minHr, this.maxHr);
  },
  cupHr: function() {
    return this.customerNumHr * this.cupCust;
  },
  beanHr: function() {
    return this.customerNumHr * this.lbCust;
  },
  lbsCupsHr: function() {
    return this.cupHr / 20
  },
  totLbs: function() {
    return this.beanHr + this.lbsCupsHr;
  }
}

var slu = {
  storeName: 'South Lake Union',
  hours: allHours,
  minHr: 35,
  maxHr: 88,
  cupCust: 1.3,
  lbCust: 3.7,
  custHour: function(minHr, maxHr) {
    return Math.floor(Math.random() * (maxHr - minHr +1)) + minHr;
  },
  customerNumHr: function() {
    return this.custHour(this.minHr, this.maxHr);
  },
  cupHr: function() {
    return this.customerNumHr * this.cupCust;
  },
  beanHr: function() {
    return this.customerNumHr * this.lbCust;
  },
  lbsCupsHr: function() {
    return this.cupHr / 20
  },
  totLbs: function() {
    return this.beanHr + this.lbsCupsHr;
  }
}


var seaTac = {
  storeName: 'Seattle Tacoma Airport',
  hours: allHours,
  minHr: 68,
  maxHr: 124,
  cupCust: 1.1,
  lbCust: 2.7,
  custHour: function(minHr, maxHr) {
    return Math.floor(Math.random() * (maxHr - minHr +1)) + minHr;
  },
  customerNumHr: function() {
    return this.custHour(this.minHr, this.maxHr);
  },
  cupHr: function() {
    return this.customerNumHr * this.cupCust;
  },
  beanHr: function() {
    return this.customerNumHr * this.lbCust;
  },
  lbsCupsHr: function() {
    return this.cupHr / 20
  },
  totLbs: function() {
    return this.beanHr + this.lbsCupsHr;
  }
}


var website = {
  storeName: 'Website Sales',
  hours: allHours,
  minHr: 3,
  maxHr: 6,
  cupCust: 0,
  lbCust: 6.7,
  custHour: function(minHr, maxHr) {
    return Math.floor(Math.random() * (maxHr - minHr +1)) + minHr;
  },
  customerNumHr: function() {
    return this.custHour(this.minHr, this.maxHr);
  },
  cupHr: function() {
    return this.customerNumHr * this.cupCust;
  },
  beanHr: function() {
    return this.customerNumHr * this.lbCust;
  },
  lbsCupsHr: function() {
    return this.cupHr / 20
  },
  totLbs: function() {
    return this.beanHr + this.lbsCupsHr;
  }
}



//make all neccesary calculations for each individual store
