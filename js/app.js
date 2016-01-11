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
    return Math.floor(Math.random() * (maxHr - minHr +1)) + minHr;
  },

}

//display name of the market
var h2El = document.createElement('h2');
h2El.textContent = pike.storeName;
document.body.appendChild(h2El);

for (i = 0; i < pike.hours.length; i ++){
  //calculate needed stats for one hour
  pike.customer = pike.custHour(pike.minHr, pike.maxHr);
  pike.cupHr = pike.customer * pike.cupCust; // cups of coffee sold per hour
  pike.beanHr = pike.customer * pike.lbCust; // lbs of beans sold per hour
  pike.lbsCupsHr = pike.cupHr / 20;
  pike.totLbs = pike.beanHr + pike.lbsCupsHr; // total beans for this hour


  var paragraphEl = document.createElement('p');
  paragraphEl.textContent = pike.hours[i] + ': ' + pike.totLbs.toFixed(1) + ' lbs [' + pike.customer.toFixed(1) + ' customers, ' + pike.cupHr.toFixed(1) + ' cups (' + pike.lbsCupsHr.toFixed(1) + ' lbs), ' + pike.beanHr.toFixed(1) + ' lbs to go]';
  document.body.appendChild(paragraphEl);

}
