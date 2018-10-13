//  Locations
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locations = /** @class */ (function () {
    function locations(title, city, address, zipcode, img, created) {
        this.title = title;
        this.city = city;
        this.address = address;
        this.zipcode = zipcode;
        this.img = img;
        this.created = created;
    }
    ;
    locations.prototype.render = function () {
        document.getElementById("row1").innerHTML += "\n        <div class=\"card col-lg-3 col-md-6 mt-3\">\n        <!-- Card image -->\n  <div class=\"view overlay\">\n            <img class=\"card-img-top rounded mt-5 d-none d-sm-block\" src=\"" + this.img + "\" alt=\"\">\n            <a href=\"#!\">\n      <div class=\"mask rgba-white-slight\"></div>\n    </a>\n            </div>\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">" + this.title + "</h4>\n                <p class=\"card-text\">\n                    <!--Address:--> " + this.address + " <br> " + this.city + " " + this.zipcode + "<br><br>\n                    </p>\n                    <p class=\"small\"> Created: " + this.created + " </p>\n            </div>\n         </div>\n        ";
    };
    ;
    return locations;
}());
;
//  Restaurants
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants(title, city, address, zipcode, img, telephoneNumber, type, webAddress, created) {
        var _this = _super.call(this, title, city, address, zipcode, img, created) || this;
        _this.telephoneNumber = telephoneNumber;
        _this.type = type;
        _this.webAddress = webAddress;
        _this.telephoneNumber = telephoneNumber,
            _this.type = type,
            _this.webAddress = webAddress;
        return _this;
    }
    ;
    restaurants.prototype.render = function () {
        document.getElementById("row2").innerHTML += "\n    <div class=\"card col-lg-3 col-md-6 mt-3\">\n    <!-- Card image -->\n  <div class=\"view overlay\">\n    <img class=\"card-img-top rounded mt-5 d-none d-sm-block\" src=\"" + this.img + "\" alt=\"\">\n    <a href=\"#!\">\n    <div class=\"mask rgba-white-slight\"></div>\n  </a>\n          </div>\n    <div class=\"card-body\">\n        <h4 class=\"card-title\">" + this.title + "</h4>\n        <p class=\"card-text\">\n            Address: " + this.address + " <br> " + this.city + " " + this.zipcode + "<br>\n            Telephone Number: " + this.telephoneNumber + "<br>\n            Type: " + this.type + "<br>\n            Website: <a href=\"http://" + this.webAddress + "\">" + this.webAddress + "</a><br><br>\n            <p class=\"small\">Created: " + this.created + "</p>\n        </p>\n    </div>\n </div>\n";
    };
    ;
    return restaurants;
}(locations));
;
//Events
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(title, city, address, zipcode, img, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, title, city, address, zipcode, img) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        _this.eventDate = eventDate,
            _this.eventTime = eventTime,
            _this.ticketPrice = ticketPrice;
        return _this;
    }
    ;
    events.prototype.render = function () {
        document.getElementById("row3").innerHTML += "\n        <div class=\"card col-lg-3 col-md-6 mt-3\">\n        <div class=\"view overlay\">\n        <img class=\"card-img-top rounded mt-5 d-none d-sm-block\" src=\"" + this.img + "\" alt=\"\">\n        <a href=\"#!\">\n    <div class=\"mask rgba-white-slight\"></div>\n  </a>\n          </div>\n        \n        <div class=\"card-body\">\n            <h4 class=\"card-title\">" + this.title + "</h4>\n            <p class=\"card-text\">\n                Address: " + this.address + " " + this.city + " " + this.zipcode + "<br>\n                Event Date: " + this.eventDate + "<br>\n                Event Time: " + this.eventTime + "<br><br>\n                Ticket Price: <strong> " + this.ticketPrice + " <i class=\"fas fa-euro-sign\"></i> </strong>\n\n            </p>\n        </div>\n     </div>\n    ";
    };
    ;
    return events;
}(locations));
;
//Let Locations
var jmb = new locations("Jüdisches Museum Berlin ", "Berlin", "Lindenstraße 9-14 Berlin", 10969, "img/jmb.jpg", new Date("24.March 2018 12:45"));
var gbm = new locations("Gedenkstätte Berliner Mauer", "Berlin", "Bernauer Straße 111", 13355, "img/mauer.png", new Date("24.March 2018 12:45"));
var hm = new locations("Holocaust Memorial", "Berlin", "Cora Berliner Straße 1", 10117, "img/memorial.png", new Date("24.March 2018 12:45"));
var but = new locations("Berliner Unterwelten Tour", "Berlin", "Brunnenstraße 105", 13355, "img/unterwelten.png", new Date("24.March 2018 12:45"));
//Let Restaurants
var cbh = new restaurants("Clärchens Ballhaus", "Berlin", "Augusttraße 24", 10117, "img/cbh.png", " +49 (0) 162 32 99 750", "Swing Dance Cafe", "www.ballhaus.de/de/", new Date("24.March 2018 12:45"));
var oai = new restaurants("Oak and Ice", "Berlin", "Schönhause Allee 52", 10623, "img/oai.png", " +49 (0) 162 32 99 750", "Superfood Cafe", "www.oakandice.com/", new Date("24.March 2018 12:45"));
var wdyfl = new restaurants("What do you fancy, Love?", "Berlin", "Knesebeckstraße 68/89", 1070, "img/wdyfl.png", " +49 (0) 162 32 99 750", "Coffe Shop", "www.whatdoyoufancylove.de/", new Date("24.March 2018 12:45"));
var hosw = new restaurants("House of Small Wonder", "Berlin", "Johannisstraße 20", 10117, "img/hosw.png", " +49 (0) 162 32 99 750", "Coffe Shop", "www.houseofsmallwonder.de", new Date("24.March 2018 12:45"));
//Let Events
var mumf = new events("Mumford and Sons <br> <small>Songs from the 4th Album</small>", "Berlin", "Mercedes Platz 1", 10234, "img/mumf.png", "Fr, 22.05.2019", "20:00", 49.00);
var bep = new events("Black eyed Peas <br> <small>Back in Europe after 8 years</small>", "Berlin", "Falkplatz 1", 10437, "img/bep.png", "Fr, 16.11.2018", "20:00", 65.00);
var mauer = new events("30 Jahre Mauerfall <br> <small>das große Fest</small>", "Berlin", "Mercedes Platz 1", 10234, "img/mauer1.png", "Sa, 03.10.2019", "19:30", 45.50);
var falco = new events("Falco<br><small>Das Musical</small>", "Frankfurt", "Jahrhundersthalle 1", 22345, "img/falco.png", "Tue, 20.02.2018", "20:00", 55.90);
var items = [jmb, gbm, hm, but, cbh, oai, wdyfl, hosw, mumf, bep, mauer, falco];
function displayItems(arr) {
    arr.forEach(function (item) {
        item.render();
    });
}
;
displayItems(items);
