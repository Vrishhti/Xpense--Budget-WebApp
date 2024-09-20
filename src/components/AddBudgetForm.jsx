import React from 'react'
import { Form } from 'react-router-dom'

//library icons
import { CurrencyRupeeIcon } from '@heroicons/react/20/solid'

const AddBudgetForm = () => {
  return (
    <div className='form-wrapper'>
        <h3 className='h3'>
            Create Budget
        </h3>
        {/* not adding action in form bcz we use this in several pages in our site but we 
        always want to submit it on the page it is currevtly on*/}
        <Form 
        method="post"
        className='grid-sm'
        >
        <div className='grid-xs'>
            {/* label points to newbudget */}
            <label htmlFor="newBudget">Budget Name</label>
            <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder='e.g. Groceries'
            required/>
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
        <button type='submit' className='btn btn--dark'>
            <span>Create Budget</span>
            <CurrencyRupeeIcon width={20}/>
        </button>
        </Form>
    </div>
  )
}

export default AddBudgetForm