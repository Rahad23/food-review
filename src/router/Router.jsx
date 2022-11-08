import AllCategoryPage from "../component/allCategoryPage/AllCategoryPage";
import FoodAddForm from "../component/foodCategoryAddForm/FoodAddForm";
import FoodDetails from "../component/foodDetails/FoodDetails";
import Home from "../component/home/Home";
import Main from "../component/main/Main";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children:[
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/foodAdd',
                    element: <FoodAddForm></FoodAddForm>
                },
                {
                    path: '/allFood',
                    element: <AllCategoryPage></AllCategoryPage>
                },
                {
                    path: '/foodDetails/:id',
                    element: <FoodDetails></FoodDetails>,
                    loader: async({params})=> fetch(`http://localhost:5000/food/${params.id}`)
                }
            ]
        }
])