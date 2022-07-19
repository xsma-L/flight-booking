import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import AllFlights from './Components/AllFlights';
import Calendar from './Components/Calendar';
import ContactUs from './Components/ContactUs'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all-flights" element={<AllFlights />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
