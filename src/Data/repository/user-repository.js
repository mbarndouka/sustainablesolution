import {URL_SERVER} from '../constants';
// import {set, get } from "idb-keyval";

export class UserRepositoryImpl{


    SIGN_UP_ENDPOINT = "/sponsor/signup";
    

    /**
     * 
     * @param {RegisterUserFormData} UserFormdata 
     */
    async registerUser(UserFormdata){

    /**
     * 
     * @type {import('../models/types').UserModel}
    */

    const requestData = {
        firstName: UserFormdata.firstName,
        secondName: UserFormdata.secondName,
        email: UserFormdata.email,
        password: UserFormdata.password,
        location: UserFormdata.location,
        roles: UserFormdata.roles
    }
    const endpoint = `${URL_SERVER}${this.SIGN_UP_ENDPOINT}`;
    const request = fetch(
        endpoint,
        {
            method : "POST",
            headers: {
                "Accept": "*/*",
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(requestData)
        }
    );
    const reponse = await request;
    if(reponse.status === 201) return true;
    return false;
    }

    
}