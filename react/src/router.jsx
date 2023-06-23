import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import InstructorLayout from "./components/layouts/InstructorLayout";
import DefaultLayout from "./components/layouts/DefaultLayout";
import InstructorDashboard from "./pages/InstructorDashboard";

import CreateCourseForm from "./components/instructor/dashboard/main/courses/CreateCourseForm";
import Courses from "./components/instructor/dashboard/main/courses/Courses";
import CreatePackForm from "./components/instructor/dashboard/main/packs/CreatePackForm";
import ProfileEdit from "./components/instructor/dashboard/main/profile/ProfileEdit";
import Profile from "./components/instructor/dashboard/main/profile/Profile";
import VisitorPage from "./pages/VisitorPage";
import Instructors from "./components/Visitor/InstructorsPage/Instructors";
import Signupage from "./pages/Signupage";
import GuestLayout from "./components/layouts/GuestLayout";
import SignIn from "./components/SignIn/SignIn";
import ForgetPasswordForm from "./components/SignIn/ForgetPasswordForm";
import VCourses from "./components/Visitor/Courses/VCourses";
import Pack from "./components/Visitor/Packs/Pack";
import Packs from "./components/Visitor/Packs/Packs";
import PacksInstructor from "./components/instructor/dashboard/main/packs/PacksInstructor";
import InstructorProfile from "./components/Visitor/InstructorsPage/InstructorProfile";
import Dashbord from "./components/instructor/dashboard/main/dashboard/Dashbord";
import PricingCard from "./components/Visitor/Pricing/PricingCards";
import DefaultPage from "./pages/DefaultPage";
import ChangePassword from "./components/instructor/dashboard/main/profile/ChangePassword";
import EditCourse from "./components/instructor/dashboard/main/courses/EditCourse";
import SubVideo from "./components/Visitor/Courses/SubVideo";
import Live from "./components/instructor/dashboard/main/Lives/Live";
import PaymentForm from "./components/Visitor/payment/paymentForm";
import BecomeInstructor from "./components/Visitor/Become Instructor/BecomeInstructor";

// Admin routes : 

import DashbordPage from './pages/DashbordPage';
import InstructorsAdmin from './components/admin/dashbord/main/instructors/InstructorsAdmin';
import Students from './components/admin/dashbord/main/students/Students';
import DashbordAdmin from './components/admin/dashbord/main/DashbordAdmin';
import CoursesAdmin from './components/admin/dashbord/main/courses/CoursesAdmin';
import Admins from './components/admin/dashbord/main/admins/Admins';
import CreateAdmin from './components/admin/dashbord/main/admins/CreateAdmin';
import Subscription from './components/admin/dashbord/main/paiements/Subscribers';
import SupportClient from './components/admin/dashbord/main/supportClient/SupportClient';
import Decipline from './components/admin/dashbord/main/courses/Decipline';
import NewCourses from './components/admin/dashbord/main/courses/NewCourses';
import PacksAdmin from './components/admin/dashbord/main/courses/PacksAdmin';
import NewPacks from './components/admin/dashbord/main/courses/NewPacks';
import Subscribers from './components/admin/dashbord/main/students/Subscribers';
import AdminLayout from "./components/layouts/AdminLayout";
import DeciplineForm from "./components/admin/dashbord/main/courses/DeciplineForm";
import DeciplineFormEdit from "./components/admin/dashbord/main/courses/DeciplineFormEdit";

import AddClassForm from './components/admin/dashbord/main/courses/AddClassForm';
import EditClassForm from './components/admin/dashbord/main/courses/EditClassForm';
import RequestsInstructor from './components/admin/dashbord/main/instructors/RequestsInstructor';


const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "",
        element: <VisitorPage />,
      },
      {
        path: "/explore",
        element: "",
        children: [
          {
            path: "/explore/instructors/",
            element: <Instructors />,
          },
          {
            path: "/explore/instructors/:id",
            element: <InstructorProfile />,
          },
          {
            path: "/explore/Courses",
            element: <VCourses />,
          },
          {
            path: "/explore/Packs",
            element: <Packs />,
          },
          {
            path: "/explore/Evenments",
            element: <Instructors />,
          },
        ],
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <Signupage />,
      },

      {
        path: "/reset-password",
        element: <ForgetPasswordForm />,
      },
    ],
  },
  {
    path: "/instructor",
    element: <InstructorLayout />,
    children: [
      {
        path: "",
        element: <Dashbord />,
      },
      {
        path: "/instructor/dashboard",
        element: <InstructorDashboard />,
        children: [
          {
            path: "/instructor/dashboard/courses",
            element: <Courses />,
          },
          {
            path: "/instructor/dashboard/courses/create",
            element: <CreateCourseForm />,
          },
          {
            path: "/instructor/dashboard/courses/:id/edit",
            element: <EditCourse />,
          },
          {
            path: "/instructor/dashboard/packs",
            element: <PacksInstructor />,
          },
          {
            path: "/instructor/dashboard/packs/create",
            element: <CreatePackForm />,
          },
          {
            path: "/instructor/dashboard/create-live",
            element: <Live />,
          },
        ],
      },
      {
        path: "/instructor/profile",
        element: <Profile />,
      },
      {
        path: "/instructor/profile/edit",
        element: <ProfileEdit />,
      },
      {
        path: "/instructor/profile/change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/user",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <DefaultPage />,
      },
      {
        path: "/user/pricing",
        element: <PricingCard />,
      },
      {
        path: "/user/courses",
        element: <VCourses />,
      },
      {
        path: "/user/packs",
        element: <Packs />,
      },
      {
        path: "/user/instructors",
        element: <Instructors />,
      },
      {
        path: "/user/instructors/:id",
        element: <InstructorProfile />,
      },

      {
        path: "/user/courses/:id",
        element: <SubVideo />,
      },
      {
        path: "/user/profile",
        element: <ProfileEdit />,
      },
      {
        path: "/user/payement",
        element: <PaymentForm />,
      },
      ,
      {
        path: "/user/become-instructor",
        element: <BecomeInstructor />,
      },
    ],
  },
  
  // admin routes 



{
  path: "/admin",
  element: <AdminLayout/>,
  children: [
      {
          path: "",
          element: <DashbordPage/>,
          children: [
              {
                  path:'/admin/',
                  element: <DashbordAdmin/>
              },
              {
                  path:'/admin/courses',
                  children: [
                      {
                          path:'/admin/courses',
                          element:<CoursesAdmin/>
                      },
                      {
                          path:'/admin/courses/new-courses',
                          element: <NewCourses/>
                      },
                      {
                          path:'/admin/courses/packs',
                          element: <PacksAdmin/>
                      },
                      {
                          path:'/admin/courses/new-packs',
                          element: <NewPacks/>
                      },
                      {
                          path:'/admin/courses/decipline',
                          element: <Decipline/>
                      },
                      {
                          path:'/admin/courses/decipline/create-decipline',
                          element: <DeciplineForm/>
                      },
                      {
                          path: '/admin/courses/decipline/edit-decipline/:id',
                          element: <DeciplineFormEdit />
                      },
                      {
                          path: '/admin/courses/decipline/delete-decipline/:id',
                          element: <Decipline />
                      },
                      {
                          path: '/admin/courses/decipline/create-class/:id',
                          element: <AddClassForm />
                      },
                      {
                          path: '/admin/courses/decipline/edit-class/:id',
                          element: <EditClassForm />
                      },
                      {
                          path: '/admin/courses/decipline/delete-classe/:id',
                          element: <Decipline />
                      },
                      {
                          path: '/admin/courses/new-courses/approve-course/:id',
                          element: <NewCourses />
                      },
                      {
                          path: '/admin/courses/new-courses/decline-course/:id',
                          element: <NewCourses />
                      },
                      {
                          path: '/admin/courses/new-packs/approve-pack/:id',
                          element: <NewPacks />
                      },
                      {
                          path: '/admin/courses/new-packs/decline-pack/:id',
                          element: <NewPacks />
                      }
                        
                  ]
              },
              {
                  path:'/admin/instructors',
                  children: [
                      {
                          path:'/admin/instructors',
                          element:<InstructorsAdmin/>
                      },
                      {
                          path:'/admin/instructors/requests',
                          element: <RequestsInstructor/>
                      },
                      {
                          path:'/admin/instructors/activate',
                          element: <InstructorsAdmin/>
                      },
                      {
                          path:'/admin/instructors/desactivate',
                          element: <InstructorsAdmin/>
                      },
                      {
                          path:'/admin/instructors/requests/accept',
                          element: <RequestsInstructor/>
                      },
                      {
                          path:'/admin/instructors/requests/refuse',
                          element: <RequestsInstructor/>
                      }
                  ]
              },
              {
                  path:'/admin/students',
                  children: [
                      {
                          path: '/admin/students',
                          element: <Students/>,
                      },
                      {
                          path: '/admin/students/subscribers',
                          element: <Subscribers/>,
                      }

                  ]
              },
              {
                  path:'/admin/paiements',
                  element: <Subscription/>
              },
              {
                  path:'/admin/support-client',
                  element: <SupportClient/>
              },
              {
                  path:'/admin/admins',
                  children: [
                      {
                          path:'/admin/admins',
                          element:<Admins/>
                      },
                      {
                          path:'/admin/admins/create-admin',
                          element: <CreateAdmin/>
                      }
                  ]
              },
          ]
      }
  ]
}
]);
export default router;
