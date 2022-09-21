import { URL_SERVER } from "../constants";
import { useNavigate } from "react-router-dom";

export class UserRepositoryImpl3{

    SIGN_IN_ENDPOINT = "/login";

    /**
     * @param {RegisterUserFormData} UserFormdata
     */

    async registerLogin(UserFormdata){
        // const navigate = useNavigate();
        /**
         * @type {UserLogin} 
         */

        const requestData3 = {
            email: UserFormdata.email,
            password: UserFormdata.password
        }
            
        const endpoint = `${URL_SERVER}${this.SIGN_IN_ENDPOINT}`;

        const result = fetch(
            endpoint,
            {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(requestData3)
            }
        );
        const reponse = await result;
        if(reponse.status === 200){
            // navigate("/Dashspon");
            return true;
        }
        else return false;
    }
}