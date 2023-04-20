import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Components and styles
import './App.css';

// Pages
import GuestHome from './pages/GuestHome';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorPage from './pages/ErrorPage';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import PrivateRoute from './pages/PrivateRoute';
import ReduxSandbox from './pages/ReduxSandbox';
import { MatchPage }  from './pages/MatchPage';
import ComponentsPage from './pages/ComponentsTest';
import DemoProfile from './pages/DemoProfile';


/**
 * <App /> is the root component of the app. It renders the root layout and child routes.
 * @returns {JSX.Element} <App />
 */
function App() {
  {/* TODO: we need access to the user or a 'loggedIn' prop here to conditionally show the footer and to allow access to protected routes */ }
  return (
    <div className="App">
      <Toaster /> {/* This allows us to show toasts / notification popups */}
      {/* The <Routes /> component is a React Router feature that renders the first child <Route /> that matches the current URL */}
      {/* <Header /> */}
      <Routes>
        {/* Index attribute specifies what'll be shown at the '/' url. We'll have to extend this to detect
          if the user's logged in and show that appropriate "homepage" */}
        <Route index element={<GuestHome />} />
        {/* The path specifies the URL that'll provide the component specified in the 'element' */}
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password/:key" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/*-- Example page consuming data from Redux store --*/}
        {process.env.NODE_ENV === 'development' && <Route path="/reduxsandbox" element={<ReduxSandbox />} />}
        <Route path="/match-page" element={<MatchPage />} />
        {/* Demo Route to display logged in user's info */}
        <Route path="/demoProfile" element={<DemoProfile />} />
        {/* <Route element={<PrivateRoute user={user} />}> */}
          {/* Any routes that require a user to be logged in go here; */}
        {/* </Route> */}
        {/* The * wildcard path matches any URL that doesn't match any other <Route /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* TODO: { user.loggedIn && <Footer /> } */}
    </div>
  );
}

export default App;
