
const generateRandomColor=()=>{
    const existingBudgetLength=fetchData("budgets")?.
    length ?? 0;
    return `${existingBudgetLength * 34} 65% 50%`
}
//contsins local storage fns
export const fetchData= (key)=>{
    // it feteches any data given a key in localstorage and then returns it to me
    // this is going to be used to fetch data for dashboard fn as it loads
    return JSON.parse(localStorage.getItem(key));
};
//create budget
export const createBudget= ({
    name,amount
})=>{
    const newItem={
        //randoms tring for id. this cfypto fn generates a random UUID
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        //+amount ensures that amount is stored in number
        amount: +amount,
        color: generateRandomColor()
    }
    //looks for existing budgets, if no budets giving then empty array ([])
    const existingBudgets= fetchData("budgets") ?? []
    return localStorage.setItem("budgets",
        JSON.stringify([...existingBudgets,newItem]));
    
}

//delete user
export const deleteItem =({key})=>{
    return localStorage.removeItem(key);
}