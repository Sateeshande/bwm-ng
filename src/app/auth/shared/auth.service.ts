
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';


//import { JwtHelperService } from '@auth0/angular-jwt';

//import * as moment from 'moment';



//const jwt = new JwtHelperService();

class DecodedToken {
        exp: number =0;
        username : string = '';
}


@Injectable()

export class AuthService {

        private decodedToken;             


    constructor(private http: HttpClient) {}

        private saveToken(token: string) : string {
                //this.decodedToken =   jwt.decodeToken(token); 
                localStorage.setItem("bwm_auth", token);
                //localStorage.setItem("bwm_meta", JSON.stringify(this.decodedToken));
                return token;
        }

        private getExpiration() {
                return;// moment.unix(this.decodedToken.exp);
        }

        public register(userData : any) : Observable<any> {
                return this.http.post('api/v1/users/register',userData);
        }

        public login(userData : any) : Observable<any> {
                return this.http.post('api/v1/users/auth',userData).map(
                    (token:string) => this.saveToken(token));                   
                }

        public isAuthenticated() : boolean {
                return; //moment().isBefore(this.getExpiration());
        }
                   
   }