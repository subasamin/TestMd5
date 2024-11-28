import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddSong from './AddSong';
function ListSong() {
    const [songs, setSongs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get('/data/data.json')
            .then(response => {
                setSongs(response.data);
            })
            .catch(error => console.error('Error loading data:', error));
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(searchQuery.toLowerCase()));
    const addSong = (newSong) => {
        setSongs([...songs, newSong]);
    };

    return (
        <div className="App">
            <h1 className={"card-header"}> List Spotify </h1>
                <input className={"input-group-lg"} type="text" placeholder="Tìm kiếm bài hát..." value={searchQuery}
                       onChange={handleSearch}/>

            <AddSong addSong={addSong}/>
            <table className={"table table-striped"}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên bài hát</th>
                    <th>Ca sĩ</th>
                    <th>Thời gian phát</th>
                    <th>Số lượt yêu thích</th>
                    <th>Trạng thái</th>
                </tr>
                </thead>
                <tbody>
                {filteredSongs.map((song, index) => (
                    <tr key={song.id}>
                        <td>{index + 1}</td>
                        <td>{song.title}</td>
                        <td>{song.singer}</td>
                        <td>{song.duration}</td>
                        <td>{song.likes}</td>
                        <td>{song.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListSong;
