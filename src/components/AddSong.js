import React, { useState } from 'react';
import axios from 'axios';

function AddSong({ addSong }) {
    const [song, setSong] = useState('');
    const [title, setTitle] = useState('');
    const [singer, setSinger] = useState('');
    const [composer, setComposer] = useState('');
    const [duration, setDuration] = useState('');
    const [likes, setLikes] = useState(0);
    const [status, setStatus] = useState('Private');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && singer && composer && duration) {
            const newSong = {title, singer, composer, duration, likes, status};
            addSong(newSong);
        } else {
            alert("Không được để trống !");
        }
    };
    return (
        <div>
            <h2>Đăng ký bài hát mới</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Tên bài hát" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <input type="text" placeholder="Ca sĩ" value={singer} onChange={(e) => setSinger(e.target.value)} maxLength={30} required/>
                <input type="text" placeholder="Nhạc sĩ" value={composer} onChange={(e) => setComposer(e.target.value)} maxLength={30} required/>
                <input type="text" placeholder="Thời gian phát (hh:mm)" value={duration} onChange={(e) => setDuration(e.target.value)} pattern="^(?:[01]?\d|2[0-3]):([0-5]?\d)$" required/>
                <input type="number" value={likes} onChange={(e) => setLikes(e.target.value)} min="0"/>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Private">Lưu trữ</option>
                    <option value="Public">Công khai</option>
                </select>
                <button type="submit">Đăng ký bài hát</button>
            </form>
        </div>
    );
}
export default AddSong;
