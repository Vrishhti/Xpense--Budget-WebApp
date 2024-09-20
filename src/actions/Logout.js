// RRD
import { redirect } from "react-router-dom";
//helper
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";
export async function logoutAction() {
    // as sooon as u hit this route do this action and redirect somewhere else
    console.log("Logout action triggered");

    //delete user
deleteItem({
     key : "userName"
    })
    console.log("User deleted from local storage");


    //displaying toast
    toast.success("You've deleted your account!")
    

    //return redirect to homepg
    return redirect("/")


    
}