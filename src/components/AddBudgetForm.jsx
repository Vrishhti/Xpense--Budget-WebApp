//React imports
import React, { useEffect, useRef } from 'react'
//RRD
import { Form, useFetcher } from 'react-router-dom'

//library icons
import { CurrencyRupeeIcon } from '@heroicons/react/20/solid'

const AddBudgetForm = () => {
    //usefetcher allows to acces the state of the fetcher
   const fetcher= useFetcher()
    //isSubmitting shows if the form is currently submitting or not. 
    //this state tells how ur Ui will uodate
   const isSubmitting=fetcher.state==="submitting"

   const formRef = useRef();
   const focusRef=useRef();
//    to clear form immediately after submission
    useEffect(()=>{
        //if form is already submitted then clear form
        if(!isSubmitting){
            formRef.current.reset();
            //bring focus back to budget name input field
            focusRef.current.focus();

        }
//useeffect hook needs to take an array of dependencies
    },[isSubmitting])
  return (
    <div className='form-wrapper'>
        <h3 className='h4'>
            Create Budget
        </h3>
        {/* not adding action in form bcz we use this in several pages in our site but we 
        always want to submit it on the page it is currevtly on*/}
        <fetcher.Form 
        method="post"
        className='grid-sm'
        ref={formRef}
        >
        <div className='grid-xs'>
            {/* label points to newbudget */}
            <label htmlFor="newBudget">Budget Name</label>
            <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder='e.g. Groceries'
            required
            ref={focusRef}/>
        </div>
        <div className='grid-xs'>
        <label htmlFor="newBudgetAmount">Amount</label>
            <input
            type="number"
            step='0.01'
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder=" e.g. ₹1200"
            inputMode='decimal'
            required/>
        </div>
        <input type='hidden' name='_action' value='createBudget'/>
        {/* //button is disabled using the waait fn for some time after submitting */}
        <button type='submit' className='btn btn--dark' disabled={isSubmitting}>
            {
            isSubmitting ? <span>Creating Budget...</span> :
            (
                //bcz u dont have s single parent ele so create it inside a fragment <>
            <>
            <span>Create Budget</span>
            <CurrencyRupeeIcon width={20}/>
            </>)
            }
            
        </button>
        </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm