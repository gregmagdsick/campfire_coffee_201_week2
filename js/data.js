//my JS will go here//
var allHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm']
var allStores = [];

//Building my constructor
var Store = function(storeName, minHr, maxHr, cupCust, lbCust){
  this.storeName = storeName;
  this.hours = allHours;
  this.customerHours = [];
  this.cupsEachHour = [];
  this.beansEachHour = [];
  this.minHr = minHr;
  this.maxHr = maxHr;
  this.cupCust = cupCust;
  this.lbCust = lbCust;
  this.dailyCups = 0;
  this.dailyBeans = 0;
  this.dailyBeansToSell = 0;
  allStores.push(this);

  this.custHour = function() {
    for (var i = 0; i < this.hours.length; i ++) {
      this.customerHours[i] = Math.floor(Math.random() * (this.maxHr - this.minHr +1)) + this.minHr;
    }
  };
  this.cupsPerHr = function() {
    for (var i = 0; i < this.hours.length; i ++) {
    this.cupsEachHour[i] = this.customerHours[i] * this.cupCust;
    this.dailyCups += this.cupsEachHour[i];
    this.dailyBeans += this.cupsEachHour[i]/20;
  }
};
  this.beanHr = function() {
    for (var i = 0; i < this.hours.length; i ++) {
    this.beansEachHour[i] = this.customerHours[i] * this.lbCust;
    this.dailyBeans += this.beansEachHour[i];
    this.dailyBeansToSell += this.beansEachHour[i];
  }
};
  this.populate = function() {
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
  };
};

//Creating each Store
var pike = new Store('Pike Place Market', 14, 55, 1.2, 3.7);
var capHill = new Store('Capitol Hill', 32, 38, 3.2, 0.4);
var spl = new Store('Seattle Public Library', 49, 75, 2.6, 0.2);
var slu = new Store('South Lake Union', 35, 88, 1.3, 3.7);
var seaTac = new Store('Sea-Tac Airport', 68, 124, 1.1, 2.7);
var website = new Store('Website Sales', 3, 6, 0, 6.7);


// //populate to the webpage
// for (var i = 0; i < allStores.length; i++) {
//   allStores[i].populate();
// };

var displayForecast = function () {
  //calculate data
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].custHour();
    allStores[i].cupsPerHr();
    allStores[i].beanHr();
  }
  allBeansToday();
  beansSellBrewToday();
  beansPerHour();
}

var makeTitleTable = function(title,subtitle) {
  //make the title
  var h2El = document.createElement('h2');
  h2El.textContent = title;
  document.body.appendChild(h2El);
  var paragraphEl = document.createElement('p');
  paragraphEl.textContent = subtitle;
  document.body.appendChild(paragraphEl);
  //make the table
  var tableEl = document.createElement('table');
}

//creates table for total beans needed today for all stores
var allBeansToday = function() {
  makeTitleTable('Beans needed for today', 'data is in lbs')
  var totalDailyBeans = 0;
  for (var i = 0; i < allStores.length; i++) {
    totalDailyBeans += allStores[i].dailyBeans;
  }
  var tableEl = document.createElement('table');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'All Stores total:'
  trEl.appendChild(thEl);
  var thEl = document.createElement('th');
  thEl.textContent = totalDailyBeans.toFixed(1);
  trEl.appendChild(thEl);
  tableEl.appendChild(trEl);
  document.body.appendChild(tableEl);
}

var beansSellBrewToday = function () {
  makeTitleTable('Beans for each store by type','All values are in pounds');
  var tableEl = document.createElement('table');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Name';
  trEl.appendChild(thEl);
  thEl = document.createElement('th');
  thEl.textContent = 'lbs to sell';
  trEl.appendChild(thEl);
  thEl =document.createElement('th');
  thEl.textContent = 'lbs to brew';
  trEl.appendChild(thEl);
  tableEl.appendChild(trEl);

//variables for total beans across all stores
  allStoresBeansSell = 0;
  allStoresBeansBrew = 0;

  for (i = 0; i < allStores.length; i++) {
    trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allStores[i].storeName;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = allStores[i].dailyBeansToSell.toFixed(1);
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = (allStores[i].dailyCups/20).toFixed(1);
    trEl.appendChild(tdEl);
    tableEl.appendChild(trEl);
    allStoresBeansSell += allStores[i].dailyBeansToSell;
    allStoresBeansBrew += allStores[i].dailyCups/20;
  }
  trEl = document.createElement('tr');
  thEl = document.createElement('th');
  thEl.textContent = 'Totals:';
  trEl.appendChild(thEl);
  thEl = document.createElement('th');
  thEl.textContent = Math.round(allStoresBeansSell);
  trEl.appendChild(thEl);
  thEl = document.createElement('th');
  thEl.textContent = Math.round(allStoresBeansBrew);
  trEl.appendChild(thEl);
  tableEl.appendChild(trEl);

  document.body.appendChild(tableEl);
}

//creates big list of total beans needed per hour
var beansPerHour = function () {
  //make the title
  makeTitleTable('Beans Per Hour Forecast Data', 'All values are in pounds');

  var tableEl = document.createElement('table');

  //display the header row of the table
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = ' ';
  trEl.appendChild(thEl);
  tableEl.appendChild(trEl);

  for (var i = 0; i < allStores.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = allStores[i].storeName;
    trEl.appendChild(thEl);
  }

// Display cofee data
for (var i = 0; i < allHours.length; i++) {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = allHours[i];
  trEl.appendChild(thEl);
  for (var j = 0; j < (allStores.length); j++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = allStores[j].beansEachHour[i].toFixed(1);
    trEl.appendChild(tdEl)
    }
  tableEl.appendChild(trEl);
  }

  // Display dailyBeans in table
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Totals:';
  for (var i = 0; i < allStores.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = allStores[i].dailyBeans.toFixed(1);
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);



  document.body.appendChild(tableEl);
}
displayForecast();
