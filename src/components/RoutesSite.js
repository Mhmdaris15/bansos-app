import {Routes, BrowserRouter, Route} from 'react-router-dom';
import FormBansos from './FormBansos';
import LandingPage from './LandingPage';

const RoutesSite = props => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<LandingPage/>}/>
                <Route path='/form' exact element={<FormBansos />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default RoutesSite;