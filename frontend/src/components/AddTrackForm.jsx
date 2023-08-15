import React, { useState } from 'react';
import axios from 'axios';

const AddTrack = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [audioFile, setAudioFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('artist', artist);
        formData.append('audio_file', audioFile);

        axios.post('http://localhost:8000/api/track/add/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log('Track added successfully', response.data);
                setTitle('');
                setArtist('');
                setAudioFile(null);
            })
            .catch(error => {
                console.error('Error adding track', error);
            });
    };

    return (
        <div>
            <h2>Add a Track</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Artist"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
                <input
                    type="file"
                    accept="audio/*"
                    onChange={(e) => setAudioFile(e.target.files[0])}
                />
                <button type="submit">Add Track</button>
            </form>
        </div>
    );
};

export default AddTrack;
