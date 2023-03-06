import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Profile';

function AppTest() {
    return (
        <Router>
            <Routes>
                <Route path="/:name1" element={<Profile />}></Route>
            </Routes>
        </Router>
    );
}

export default AppTest;
