import React from 'react'

// RRD handles this form
import  {Form, NavLink} from "react-router-dom" 

//library
import { TrashIcon } from '@heroicons/react/16/solid';

//assets
import logomark from "/src/assets/logomark.svg";
const Nav = ({userName}) => {
  return (
    <nav>
        {/* This defines where the NavLink will navigate to  */}
        <NavLink to="/"   
        //used to provide better description 
        aria-label="go to home"> 
        {/* if you click on home icon it takes u to home pages
        since react router dom is  handling it it doesnt refreshes 
        the page it just handles that in the bg  */}
        <img src ={logomark} alt="" height={24}/>
        <span style={{fontSize: '24px'}}>Xpense</span>
        </NavLink>
        {
            // show this if username exits (show a form)
            userName &&(
                // form can submit to diff url and then RRD can load things on those 
                // routes or can run actions on those routes

                //post used to send in data
                //action tells what route to submit this form to
                <Form method="post"
                action="/logout"
                onSubmit={(event)=>{
                    // if they say no (!) then preventdefault and dont submit the form
                    if(!confirm("Are you sure you want to Delete user and all data?")){
                        event.preventDefault(); // stops form submission
                        return;  // stops function execution
                    }
                }}
                >
                    {/*in html if u have a btn inside a form bu defualt its type is submit unless u handle it in some way */}
                    <button type="submit" className='btn btn--warning'>
                    <span>Delete User</span>
                    <TrashIcon width={20}/>
                    </button>

                </Form>
                
            )  
        }
    </nav>
  )
}
export default Nav