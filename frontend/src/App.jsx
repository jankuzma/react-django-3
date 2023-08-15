import './App.css'
import AddTrackForm from "./components/AddTrackForm.jsx";
import LoginForm from "./components/LoginForm.jsx";
import {useAuth} from "./contexts/AuthContext.jsx";

function App() {
    const {user} = useAuth();


    return (
    <>
        <LoginForm />

        {user ? <AddTrackForm />: <div>log in to add a track</div>}

    </>
  )
}

export default App
