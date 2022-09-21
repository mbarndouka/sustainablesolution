import {URL_SERVER} from '../constants';

export class UserRepositoryImpl2{

    SIGN_UP_SCHOOL_ENDPOINT = "/school/signup";

    /**
     * @param {RegisterUserFormData} UserFormdata
     */

    async regesteruser(UserFormdata){

        /**
         * @type {import('../models/types').UserModel2} 
         */

        const requestData2 ={
            nameOfSchool: UserFormdata.nameOfSchool,
            email: UserFormdata.email,
            password: UserFormdata.password,
            location:UserFormdata.location
        }

        const endpoint= `${URL_SERVER}${this.SIGN_UP_SCHOOL_ENDPOINT}`;

        const request = fetch(
            endpoint,
            {
                method:"POST",
                headers:{
                    "Accept": "*/*",
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(requestData2)
            }
        );
        const reponse = await request;
        // console.log(request)
        if(reponse.status === 201) {
            return true;
        }
        else return false;
    }
}