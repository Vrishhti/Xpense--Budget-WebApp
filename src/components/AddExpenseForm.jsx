import React, { useEffect, useRef } from 'react'
import { useFetcher } from 'react-router-dom'

//library imports
import { PlusCircleIcon } from '@heroicons/react/16/solid'

const AddExpenseForm = ({budgets})=> {
    const fetcher=useFetcher()
    const isSubmitting= fetcher.state === "submitting";

    const focusRef=useRef()
    const formRef = useRef();
    useEffect(()=>{
        if(!isSubmitting){
            //clear form
            formRef.current.reset()
            //reset focus
            focusRef.current.focus()

        }
    },[isSubmitting])

  return (
    <div className='form-wrapper'>
        <h3 className='h3'>Add New{" "}
            <span className='accent'>
            {console.log('Budgets:', budgets)}
            {console.log('Budgets Length:', budgets.length)} 
                {/* For each item in the array (represented by budg), it returns the name property. */}
                {/* This creates a new array containing the names of the budgets. */}
                {budgets.length === 1 && budgets[0].name}
                </span>{" "}
            Expense
        </h3>
        <fetcher.Form 
        method="post"
        className='grid-sm'
        ref={formRef}>
            <div className='expense-inputs'>
                <div className='grid-xs'>
                <label htmlFor='=newExpense'>Expense Name</label>
                <input type='text'
                name='newExpense'
                id='newExpense'
                placeholder='e.g. Coffee'
                ref={focusRef}
                required
                />
            </div>
                <div className='grid-xs' >
                <label htmlFor='newExpenseAmount'>Amount</label>
                <input type='number'
                step="0.01"
                inputMode="decimal"
                name='newExpenseAmount'
                id='newExpenseAmount'
                placeholder='e.g. ₹80'
                required
                />
                </div>       
        </div>
        <div className='grid-xs' hidden={budgets.length===1}>
            <label htmlFor='newExpenseBudget'>Budget Category</label>
            <select name="newExpenseBudget"
            id="newExpenseBudget"
            required>
                {
                // sorting by when thwy were created
                   budgets.sort((a,b) => a.createdAt - b.createdAt)
                   .map((budget)=>{ 
                    return(
                    <option key={budget.id}value={budget.id}>
                        {budget.name}
                    </option>
                    );
                    
                   })
                }
            </select>
        </div>
<input type="hidden" name='_action'
value="createExpense" />
<button type='submit' className='btn btn--dark' disabled={isSubmitting}>
            {
            isSubmitting ? <span>Submitting...</span> :
            (
                //bcz u dont have s single parent ele so create it inside a fragment <>
            <>
            <span>Add Expense</span>
            <PlusCircleIcon width={20}/>
            </>)
            }
            
        </button>
    </fetcher.Form>
    </div>
  )
}

export default AddExpenseForm