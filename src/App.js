import React from "react";
import { Routes, Route, HashRouter} from "react-router-dom";
import ListSong from "./components/AddSong";
import AddSong from "./components/ListSong";
function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<ListSong />} />
                <Route path="/add" element={<AddSong />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
