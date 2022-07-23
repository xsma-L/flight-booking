import React from 'react';
import Calendar from 'react-calendar';
import '../styles/calendar.css'
import Navbar from './Navbar';
import { useState, useEffect, useLayoutEffect } from 'react';

function Home(props) {

    const [cityStart, setCityStart] = useState ('Paris');
    const [cityArrive, setCityArrive] = useState('Londres');
    const [nbAdult, setNbAdult] = useState(0);
    const [nbChild, setNbChild] = useState(0);
    const [isActive, setActive] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [dateFrom, setDateFrom] = useState({ day: new Date().getDate(), month: new Date().toLocaleDateString('fr-FR', {month: 'long'}), year: new Date().getFullYear() });
    const [dateTest, setDateTest] = useState(null);
    const [dateTo, setDateTo] = useState({ day: new Date().getDate() + 1, month: new Date().toLocaleDateString('fr-FR', {month: 'long'}), year: new Date().getFullYear() });

    const handleToggle = () => {
        setActive(!isActive);
    }

    const handleToggle2 = () => {
        console.log('ok')
        setActive2(!isActive2);
    }

    const dateFromOnChange = (e) => {
        console.log(e);
    }
    return (
        <main className='homepage'>
            <Navbar />
            <section id='homepage-search'>
                <div className='book-flight-form'>
                    <h4 className='form-tiile'>Rechercher un vol</h4>
                    <form className='form-content'>
                        <div className='from-to'>
                            <div className='from'>
                                <label>Ville de départ</label>
                                <input type='text' value={ cityStart } onChange={e => setCityStart(e.target.value)}/>  
                            </div>
                            <div className='to'>
                                <label>Ville d'arrivé</label>
                                <input type='text' value={ cityArrive } onChange={e => setCityArrive(e.target.value)} />
                            </div>
                        </div>
                        <div className='form-date'>
                            <div className='date-from'>
                              <label>Du</label>
                                <input type='text' value={ dateFrom.day + ' ' + dateFrom.month } className='day-from' onClick={ handleToggle }/>
                                <div className={ isActive ? 'calendar active' : 'calendar' }>
                                    <span onClick={ handleToggle }>x</span>
                                    <Calendar onChange={e => dateFromOnChange(e.target.value)}/>
                                </div>
                            </div>
                            <div className='date-to'>
                                <label>Au</label>
                                <input type='text' value={ dateTo.day + ' ' + dateTo.month } className='day-to' onClick={ handleToggle2 }/>
                                <div className={ isActive2 ? 'calendar active' : 'calendar' }>
                                    <span onClick={ handleToggle2 }>x</span>
                                    <Calendar />
                                </div>
                            </div>
                        </div>
                        <div className='form-passenger'>
                            <div className='adult-passenger'>
                                <label className='adult-title'>Adultes</label>
                                <div className='adult-nb'>
                                    <span>{ nbAdult }</span>
                                    <div className='increment-decrement'>
                                        <button onClick={ (e) => {
                                            e.preventDefault();
                                            setNbAdult(nbAdult + 1);
                                        }}>+</button>
                                        { nbAdult > 0 ? (
                                            <button onClick={ (e) => {
                                                e.preventDefault();
                                                setNbAdult(nbAdult - 1);
                                            }}>+</button> ) 
                                            : <button onClick={ (e) => {
                                                e.preventDefault();
                                            }}>-</button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='children-passenger'>
                                <label className='children-title'>Enfants</label>
                                <div className='children-nb'>
                                    <span>{ nbChild }</span>
                                    <div className='increment-decrement'>
                                        <button onClick={ (e) => {
                                            e.preventDefault();
                                            setNbChild(nbChild +1);
                                        }}>+</button>
                                        { nbChild > 0 ? (
                                            <button onClick={ (e) => {
                                                e.preventDefault();
                                                setNbChild(nbChild -1);
                                            }}>-</button> )
                                            : <button onClick={ (e) => {
                                                e.preventDefault();
                                            }}>-</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='search-flights'>Réserver maintenant</button>
                    </form>
                    <div className='popular-flight'>
                        <h4 className='popular-title'>Vols populaires</h4>
                        {/* <div className='popular-flight-content'> */}
                            <div className='flight-infos'>
                                <div className='popular-flight-info'>
                                    <img src='airplane.png' />
                                    <div className='flight-location-price'>
                                        <span className='city'>Londres</span>
                                        <span className='price'>à partir de 50€</span>
                                    </div>
                                    <span className='book-flight-link'>Réserver</span>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;