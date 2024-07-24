import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Library
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Layouts
import Main,{ mainLoader } from "./layouts/Main";

//Routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

//actions
import { logoutAction } from "./actions/logout";
import ExpensesPage, { expensesAction, expensesdLoader } from "./pages/ExpensesPage";
import Budgetpage, { budgetAction, budgetLoader } from "./pages/Budgetpage";
import { deleteBudget } from "./actions/deleteBudget";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement:<Error />,
    children:[
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement:<Error />
        
      },
      {
        path: "budget/:id",
        element: <Budgetpage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement:<Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          }
        ]

        
        
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesdLoader,
        action: expensesAction,
        errorElement:<Error />
        
        
      },
      
      {
        path:"logout",
        action: logoutAction,
      },

    ]
    
  },
  
 
  
]);
function App() {
  return <div className="App">
    <RouterProvider router={router} />
    <ToastContainer/>
  </div>
}

export default App;
