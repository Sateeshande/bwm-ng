const Rental = require('./models/rental');
const User = require('./models/user');

class FakeDb {
    constructor () {
        this.rentals = [ {
            title: "Nice view on ocean",
            city: "San Francisco" ,
            street: "Main street",
            category: "condo",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rentasl/image/5/image.jpeg",
            bedrooms:4,
            shared: true,
            description: "Very nice apartment in center of the city.",
            dailyrate: 43
        },
        {
            title: "Modern apartment in center",
            city: "New York" ,
            street: "Time Square",
            category: "apartment",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rentasl/image/5/image.jpeg",
            bedrooms:1,
            shared: false,
            description: "Very nice apartment in center of teh city.",
            dailyrate: 34
        },
        {
            title: "Old house in nature",
            city: "Spisska Nova Ves" ,
            street: "Banica 1",
            category: "house",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rentasl/image/5/image.jpeg",
            bedrooms:5,
            shared: true,
            description: "Very nice apartment in center of the city.",
            dailyrate: 23
        }];

        this.users = [{
            username : "Test User",
            email: "test@gmail.com",
            password: "testtest"
        }];
    }

    async cleanDb() {
        await User.deleteMany({});
        await Rental.deleteMany({});
        //await Rental.remove({});
    }

    pushDataToDb() {
        const user = new User(this.users[0]);

        this.rentals.forEach((rental) => {
            const newRental = new Rental(rental);
            newRental.user = user;

            user.rentals.push(newRental);
            newRental.save();            
        });

        user.save();
    }

    async seedDb() {
        await this.cleanDb();
        this.pushDataToDb();
    }
}

module.exports = FakeDb;
