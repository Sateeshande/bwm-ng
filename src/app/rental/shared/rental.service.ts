

import { Injectable} from '@angular/core';

import { Observable } from 'rxjs';

import { Rental } from '../shared/rental.model'
import { RentalDetailComponent } from '../rental-detail/rental-detail.component';

@Injectable()
export class RentalService {

   private rentals: Rental[] = [
            {
                id:"1",
                title: "Central Apartment",
                city: "New York",
                street: "Times SQuare",
                category: "Apartment",
                image: "http://via.placeholder.com/350x250",
                bedrooms: 3,
                description: "Very nice  apartment",
                dailyrate: 34,
                shared: false,
                createdAt:"241/12/2017"
            },
            {
                id:"2",
                title: "Central Apartment 2",
                city: "San Francisco",
                street: "Main street",
                category: "condo",
                image: "http://via.placeholder.com/350x250",
                bedrooms: 2,
                description: "Very nice  apartment",
                dailyrate: 12,
                shared: true,
                createdAt:"241/12/2017"
            },
            {
                id:"3",
                title: "Central Apartment 3",
                city: "Bratislava",
                street: "Hlavna",
                category: "condo",
                image: "http://via.placeholder.com/350x250",
                bedrooms: 3,
                description: "Very nice  apartment",
                dailyrate: 334,
                shared: true,
                createdAt:"241/12/2017"
            },
            {
                id:"4",
                title: "Central Apartment 4",
                city: "Berlin",
                street: "Haupt strasse",
                category: "House",
                image: "http://via.placeholder.com/350x250",
                bedrooms: 9,
                description: "Very nice  house",
                dailyrate: 34,
                shared: false,
                createdAt:"241/12/2017"
            }
            ];    
            
           
            
            
            public getRentals(): Observable<Rental[]> {
                return new  Observable<Rental[]> ((observer) => {
                
                setTimeout(() => {
                    observer.next(this.rentals);
                },1000);             
            });
                           };

            public getRentalbyId(rentalId: string): Observable<Rental> {
                return new Observable<Rental>((observer) => {
                setTimeout(() => {
                  const foundRental = this.rentals.find((rental)  => {
                      return rental.id == rentalId;
                  });
                  observer.next(foundRental);
                },500);
                }) ;
        }

          
   }