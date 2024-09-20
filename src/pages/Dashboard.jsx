import React from 'react'
// react router dom import
// it allows to access whatever is in the loader fn
import{useLoaderData} from "react-router-dom";

//helper fn
import { createBudget, fetchData, waait, createExpense } from '../helpers'

//componenets
import Intro from '../components/Intro';
import AddBudgetForm from '../components/AddBudgetForm';
import AddExpenseForm from '../components/AddExpenseForm';

//library
import { toast } from "react-toastify";

//LOADER FN

// when you hit a path this fn tells how to load that data in 
// each individual route

//exporting this fn so that u can import this in app.jsx
export function dashboardloader(){

// this fn hits some end point and loads it and passes it back

    // load a username
    const userName=fetchData("userName");   //username is the key
    //it will load and see if there are any budgets
    const budgets=fetchData("budgets");   

//retruning an obj bcz u need to return a couple of things
    return{userName, budgets}

}

//action

//this is gonna take any form in the page thats submitted
export async function dashboardAction({request}) {
  await waait()
  //gives access to all form data
  const data=await request.formData();
  // to get anything from form data api you have to call the specific name 
  // of that i/p that u sent it

  //extracting the action and spreading the formData into values
  const {_action, ...values}= Object.fromEntries(data)

  //new user submsn
  if(_action == "newUser"){
    try{
  
      // saves username to the key of that username which will pass it along the loader fn
      // finally u get delete user option
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`)
    } catch(e){
      throw new Error("There was a problem creating your account. Please try again")
    }
      }
      if(_action == 'createBudget'){
        //debugging to see if budget is getting created
      console.log('Form submitted with values:', values);
      console.log('New Budget Name:', values.newBudget);
      console.log('New Budget Amount:', values.newBudgetAmount);
 
        try{
          //create budget
          createBudget({
            name:values.newBudget,
            amount:values.newBudgetAmount,
        })
        console.log('success')
          return toast.success("Budget Created!")
          
        } catch(e){
          throw new Error("There was a problem creating your budget.")
        }

      }
      if(_action == 'createExpense'){
        console.log('Expense creation triggered');
        console.log('Form data:', values); 
        try{
          //create expense
          createExpense({
            name:values.newExpense,
            amount: values.newExpenseAmount,
            budgetId: values.newExpenseBudget
          });
          console.log('Expense added successfully');
          return toast.success("Expense Added")
          
        } catch(e){
          throw new Error("There was a problem creating your expense.")
        }

      }
  }

  

const Dashboard = () => {
    // useLoaderData is a hook 

    // u get this username from the fn above everytime
    // u hit this route
    const {userName, budgets}=useLoaderData()
  return (
    <>
      {/* if username is there display username, else create a component (intro)  */}
      {/* now make this a fragment so that u dont need to wrap this in div */}
      {userName ? (
        <div className='dashboard'>
          <h2> Welcome Back!&nbsp;
            <span className='accent'>
              { userName}
            </span></h2>
            <div className='grid-sm'>
             {
              //if budget exists
              budgets && budgets.length>0
              ?(

              
              <div className='grid-lg'>
                <div className='flex-lg'>
                  <AddBudgetForm/>
                   {/* passing down budgets to expense form to decide how many budgets to show based on how many budgest exist  */}
                  {/* budgets inside {} is a prop */}
                  <AddExpenseForm budgets={budgets}/>

                </div>
              </div>
              )
              //else
              :(
                <div className="grid-sm">
                  <p>Personal budgeting made easier</p>
                  <p margin={-10}>Get started now!</p>
                  <AddBudgetForm/>
                </div>
              )
              }
            </div>
        </div>
      ) :
      <Intro/>}
    </>
  )
}

export default Dashboard