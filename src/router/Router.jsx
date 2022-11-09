import AllCategoryPage from "../component/allCategoryPage/AllCategoryPage";
import ErrorPage from "../component/errorpage/ErrorPage";
import FoodAddForm from "../component/foodCategoryAddForm/FoodAddForm";
import FoodDetails from "../component/foodDetails/FoodDetails";
import Home from "../component/home/Home";
import Login from "../component/login/Login";
import Main from "../component/main/Main";
import Myreview from "../component/myreview/Myreview";
import Register from "../component/register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <ErrorPage></ErrorPage>,
            children:[
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/foodAdd',
                    element: <PrivateRoute><FoodAddForm></FoodAddForm></PrivateRoute>
                },
                {
                    path: '/allFood',
                    element: <PrivateRoute><AllCategoryPage></AllCategoryPage></PrivateRoute>
                },
                {
                    path: '/foodDetails/:id',
                    element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
                    loader: async({params})=> fetch(`http://localhost:5000/food/${params.id}`)
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/myReview',
                    element: <Myreview></Myreview>
                }
            ]
        }
])