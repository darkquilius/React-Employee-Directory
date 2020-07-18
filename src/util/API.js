import axios from "axios";

// (maybe image), first name, last name, username, email, phone number

export default {

    getDefault: function() {
        return axios.get("https://randomuser.me/api/?results=20&nat=us&exc=gender,dob,id,location,nat,registered,cell")
    }

}