import React from 'react'
import { Form } from 'react-router-dom'

//library icons 
import { UserPlusIcon } from '@heroicons/react/16/solid'

// assets
import illustration from "/src/assets/illustration.jpg";
function Intro() {
  return (
    <div className="intro">
        <div>
            <h2>
                Take Control of <span className="accent">
                Your Money
                </span>
            </h2>
            <p>
            Personal budgeting is the secret to financial freedom.
            Start your journey today.
            </p>
            {/* using form from RRD
            would allow to submit it to a certain end point and handle that
            with with the action on dashboard */}
            
            {/* just like any form in html, if u submit the form and dont handle it it would
            submit to that page */}

            <Form method="post">
                <input type='text' 
                name='userName'
                required 
                placeholder='What is your name?'
                aria-label='Your Name'
                autoComplete='given name'
                />
                
                {/* <input type='hidden' name='_action' value='newuser'/>  */}
                <button type='submit' className='btn btn--dark'>
                    <span>Create Account</span>
                    <UserPlusIcon width={20}/>
                </button>
            </Form>
        </div>
        <img src={illustration} alt="person with money"
        width={600}/>
    </div>
  )
}

export default Intro