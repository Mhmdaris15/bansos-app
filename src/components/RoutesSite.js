import {Routes, BrowserRouter, Route} from 'react-router-dom';
import FormBansos from './FormBansos';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';

const RoutesSite = props => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<LandingPage/>}/>
                <Route path='/form' exact element={<FormBansos />}/>
                <Route path='/login' exact element={<Login />} />
                <Route path='/register' exact element={<Register />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default RoutesSite;