//contsins local storage fns
export const fetchData= (key)=>{
    // it feteches any data given a key in localstorage and then returns it to me
    // this is going to be used to fetch data for dashboard fn as it loads
    return JSON.parse(localStorage.getItem(key));
};

//delete user
export const deleteItem =({key})=>{
    return localStorage.removeItem(key);
}