import './App.css'
import AddTrackForm from "./components/AddTrackForm.jsx";
import LoginForm from "./components/LoginForm.jsx";
import {useAuth} from "./contexts/AuthContext.jsx";
import {useEffect, useState} from "react";
import RegisterForm from "./components/RegisterForm.jsx";
import axios from "axios";
import TrackList from "./components/TrackList.jsx";

function App() {
    const {user} = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const fetchData = () => {
        axios
            .get('http://localhost:8000/api/track/list/')
            .then(response =>{
                setTracks(response.data);
            })
            .catch(error =>{
                console.log('error while fetching tracks', error)
            })
    }

    return (
        <>
            {user ? (

                <div>
                    <AddTrackForm/>
                    <TrackList tracks={tracks}/>
                </div>
            ) : (
                <>
                    {isModalOpen
                        ? (
                            <>
                            <RegisterForm />
                            <button onClick={toggleModal}>back to login</button>
                            </>
                        )

                        : (
                            <>
                            <LoginForm/>
                            <button onClick={toggleModal}>Not a member?</button>
                            </>
                        )
                    }

                </>
            )}

        </>
    )
}

export default App
