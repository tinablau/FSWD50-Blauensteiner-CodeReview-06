//  Locations

class locations {
    constructor(public title: string, public city: string, public address: string, public zipcode: number, public img: string, public created: Date) { };

    render() {
        document.getElementById("row1").innerHTML += `
        <div class="card col-lg-3 col-md-6 mt-3">
        <!-- Card image -->
  <div class="view overlay">
            <img class="card-img-top rounded mt-5 d-none d-sm-block" src="${this.img}" alt="">
            <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
            </div>
            <div class="card-body">
                <h4 class="card-title">${this.title}</h4>
                <p class="card-text">
                    <!--Address:--> ${this.address} <br> ${this.city} ${this.zipcode}<br><br>
                    </p>
                    <p class="small"> Created: ${this.created} </p>
            </div>
         </div>
        `
    };
};

//  Restaurants

class restaurants extends locations {
    constructor(title: string, city: string, address: string, zipcode: number, img: string, public telephoneNumber: string, public type: string, public webAddress: string, created: Date) {
        super(title, city, address, zipcode, img, created);
        this.telephoneNumber = telephoneNumber,
            this.type = type,
            this.webAddress = webAddress
    };
    render() {
        document.getElementById("row2").innerHTML += `
    <div class="card col-lg-3 col-md-6 mt-3">
    <!-- Card image -->
  <div class="view overlay">
    <img class="card-img-top rounded mt-5 d-none d-sm-block" src="${this.img}" alt="">
    <a href="#!">
    <div class="mask rgba-white-slight"></div>
  </a>
          </div>
    <div class="card-body">
        <h4 class="card-title">${this.title}</h4>
        <p class="card-text">
            Address: ${this.address} <br> ${this.city} ${this.zipcode}<br>
            Telephone Number: ${this.telephoneNumber}<br>
            Type: ${this.type}<br>
            Website: <a href="http://${this.webAddress}">${this.webAddress}</a><br><br>
            <p class="small">Created: ${this.created}</p>
        </p>
    </div>
 </div>
`

    };
};
//Events

class events extends locations {
    constructor(title: string, city: string, address: string, zipcode: number, img: string, public eventDate: string, public eventTime: string, public ticketPrice: number) {

        super(title, city, address, zipcode, img);
        this.eventDate = eventDate,
            this.eventTime = eventTime,
            this.ticketPrice = ticketPrice
    };

    render() {
        document.getElementById("row3").innerHTML += `
        <div class="card col-lg-3 col-md-6 mt-3">
        <div class="view overlay">
        <img class="card-img-top rounded mt-5 d-none d-sm-block" src="${this.img}" alt="">
        <a href="#!">
    <div class="mask rgba-white-slight"></div>
  </a>
          </div>
        
        <div class="card-body">
            <h4 class="card-title">${this.title}</h4>
            <p class="card-text">
                Address: ${this.address} ${this.city} ${this.zipcode}<br>
                Event Date: ${this.eventDate}<br>
                Event Time: ${this.eventTime}<br><br>
                Ticket Price: <strong> ${this.ticketPrice} <i class="fas fa-euro-sign"></i> </strong>

            </p>
        </div>
     </div>
    `
    };
};

//Let Locations

let jmb = new locations("Jüdisches Museum Berlin ", "Berlin", "Lindenstraße 9-14 Berlin", 10969, "img/jmb.jpg", new Date("24.March 2018 12:45"));
let gbm = new locations("Gedenkstätte Berliner Mauer", "Berlin", "Bernauer Straße 111", 13355, "img/mauer.png", new Date("24.March 2018 12:45"));
let hm = new locations("Holocaust Memorial", "Berlin", "Cora Berliner Straße 1", 10117, "img/memorial.png", new Date("24.March 2018 12:45"));
let but = new locations("Berliner Unterwelten Tour", "Berlin", "Brunnenstraße 105", 13355, "img/unterwelten.png", new Date("24.March 2018 12:45"))

//Let Restaurants

let cbh = new restaurants("Clärchens Ballhaus", "Berlin", "Augusttraße 24", 10117, "img/cbh.png", " +49 (0) 162 32 99 750", "Swing Dance Cafe", "https://www.ballhaus.de/de/", new Date("24.March 2018 12:45"));
let oai = new restaurants("Oak and Ice", "Berlin", "Schönhause Allee 52", 10623, "img/oai.png", " +49 (0) 162 32 99 750", "Superfood Cafe", "https://www.oakandice.com/", new Date("24.March 2018 12:45"));
let wdyfl = new restaurants("What do you fancy, Love?", "Berlin", "Knesebeckstraße 68/89", 1070, "img/wdyfl.png", " +49 (0) 162 32 99 750", "Coffe Shop", "http://whatdoyoufancylove.de/", new Date("24.March 2018 12:45"));
let hosw = new restaurants("House of Small Wonder", "Berlin", "Johannisstraße 20", 10117, "img/hosw.png", " +49 (0) 162 32 99 750", "Coffe Shop", "www.houseofsmallwonder.de", new Date("24.March 2018 12:45"));

//Let Events

let mumf = new events("Mumford and Sons <br> <small>Songs from the 4th Album</small>", "Berlin", "Mercedes Platz 1", 10234, "img/mumf.png", "Fr, 22.05.2019", "20:00", 49.00);
let bep = new events("Black eyed Peas <br> <small>Back in Europe after 8 years</small>", "Berlin", "Falkplatz 1", 10437, "img/bep.png", "Fr, 16.11.2018", "20:00", 65.00);
let mauer = new events("30 Jahre Mauerfall <br> <small>das große Fest</small>", "Berlin", "Mercedes Platz 1", 10234, "img/mauer1.png", "Sa, 03.10.2019", "19:30", 45.50);
let falco = new events("Falco<br><small>Das Musical</small>", "Frankfurt", "Jahrhundersthalle 1", 22345, "img/falco.png", "Tue, 20.02.2018", "20:00", 55.90);

let items: any[] = [jmb, gbm, hm, but, cbh, oai, wdyfl, hosw, mumf, bep, mauer, falco];

function displayItems(arr: any[]) {
    arr.forEach((item: any) => {
        item.render();
    });
};

displayItems(items)
;