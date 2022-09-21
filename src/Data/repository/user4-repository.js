import { URL_SERVER } from "../constants";

export class UserRepositoryImpl4{

    FORGOT_PWD_ENDPOINT = "/reset/password";

    /**
     * @param {RegisterUserFormData} UserFormdata
     */

    async forgotPwd(UserFormdata){

        /**
         * @type {UserFgpwd}
         */
        const requestEmail= {
            email: UserFormdata.email
        }

        const endpoint = `${URL_SERVER}${this.FORGOT_PWD_ENDPOINT}`;

        const reponse = fetch(
            endpoint,
            {
                method: "POST",
                headers:{
                    "Accept": "*/*",
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(requestEmail)
            }
        );
        const result = await reponse;
        console.log(result);
        if(result.status === 200) return true;
        else return false;
        
    }
}