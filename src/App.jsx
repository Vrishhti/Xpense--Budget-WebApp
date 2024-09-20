// routing will be done here
// use create browser router-> allows to pass in and recieve data from your actual
// route itself. It uses DOM history API to update url and manage history stack
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
//Toasts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ROUTES
import Dashboard, { dashboardAction, dashboardloader } from "./pages/Dashboard"
import Error from "./pages/Error";
//LAYOUTS
import Main, {mainloader} from "./layouts/Main";
import { logoutAction } from "./actions/Logout";
  // createbrowserrouter lets you pass useLoaderData,actions,error elements

const router = createBrowserRouter([
  {
    path:"/",
    // when you hit this base route main element shows up- load whatever data / error
    // if any children that need to be displayed in that outlet will be passed in the below array (children array)
    element: <Main/>,
    loader: mainloader,
    // errorElement:<Error/>, 
    children: [
      {
        index:true,

        // path shows where u look at
        // element is what u want to show
    
        // these are object but  can also use elements to create routes
        // grabbing dashboard.jsx and inserting it in element
        element: <Dashboard/>,
        action: dashboardAction,
        loader: dashboardloader,
        // errorElement:<Error/>  
          //if u go to a route that doesnt exist, this will display an error msg
      },
      {
        // when del user btn is clicked it would submit a form to this Router
        // which will then run this action
        // youre getting this action from logout.js. it dels user and the redirects to homepg
        path:"/logout",
        action: logoutAction,
      }
    ]  ,           
  },

  
  

 

]);
function App() {
  return( <div className="App">
  <RouterProvider router={router} />
  <ToastContainer/>
  </div>
  );
}

export default App;
