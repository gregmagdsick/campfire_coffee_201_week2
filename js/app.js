//my JS will go here//

//building my pikeplace obect//
var pike = {
  storeName: 'Pike Place Market',
  hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm'],
  minHr: 14,
  maxHr: 55,
  cupCust: 1.2,
  lbCust: 3.7,
  custHour: function(minHr, maxHr) {
    return Math.floor(Math.random() * (this.maxHr - this.minHr +1)) + this.minHr
  },

}

//display name of the market
var h2El = document.createElement('h2');
h2El.textContent = pike.storeName;
document.body.appendChild(h2El);


//calculate needed stats for one hour
pike.customer = pike.custHour(pike.minHr, pike.maxHr); //
console.log('pike.customer is ' + pike.customer);
pike.cupHr = pike.customer * pike.cupCust; // cups of coffee sold per hour
console.log('pike.cupHr is ' + pike.cupHr);
pike.beanHr = pike.customer * pike.lbCust; // lbs of beans sold per hour
console.log('pike.beanHr is ' + pike.beanHr)
pike.lbsCupsHr = pike.cupHr / 20;
console.log('pike.lbsCupsHr is ' + pike.lbsCupsHr);
pike.totLbs = pike.beanHr + pike.lbsCupsHr; // total beans for this hour
console.log('pike.totLbs is ' + pike.totLbs);

var paragraphEl = document.createElement('p');
paragraphEl.textContent = pike.hours[0] + ': ' + pike.totLbs.toFixed(1) + ' lbs [' + pike.customer.toFixed(1) + ' customers, ' + pike.cupHr.toFixed(1) + ' cups (' + pike.lbsCupsHr.toFixed(1) + ' lbs), ' + pike.beanHr.toFixed(1) + ' lbs to go]';
document.body.appendChild(paragraphEl);
