import { Injectable } from "@angular/core";
import {  AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authError: any;

    constructor(public firebaeAuth:AngularFireAuth){

    }

    loginWithEmail(email:string, senha:string){
        let thisService = this;
        thisService.authError = null;
    
        this.firebaeAuth.signInWithEmailAndPassword(email, senha)
        .then((res) => {
            console.log(res)
            console.log("User Approved!")
            localStorage.setItem(email, "user")
            }
        ).catch(function(error){
            console.log(error.menssage);
            alert("Non-Existent User or Password!")
        })
    };
}