import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';

function Home(props) {

    const [nbAdult, setNbAdult] = useState(0);
    const [nbChild, setNbChild] = useState(0); 

    return (
        <main className='homepage'>
            <Navbar />
            <section id='homepage-search'>
                <div className='book-flight-form'>
                    <h4 className='form-tiile'>Rechercher un vol</h4>
                    <div className='form-content'>
                        <div className='from-to'>
                            <div className='from'>
                                <span>Ville de départ</span>
                                <input type='text' value='Londres' />  
                            </div>
                            <div className='to'>
                                <span>Ville d'arrivé</span>
                                <input type='text' value='Paris' />
                            </div>
                        </div>
                        <div className='form-date'>
                            <div className='date-from'>
                                <span>Du</span>
                                <input type='text' value='23 Avril' className='day-from' />
                            </div>
                            <div className='date-to'>
                                <span>Au</span>
                                <input type='text' value='34 Juin' className='day-to' />
                            </div>
                        </div>
                        <div className='form-passenger'>
                            <div className='adult-passenger'>
                                <span className='adult-title'>Adultes</span>
                                <div className='adult-nb'>
                                    <span>{ nbAdult }</span>
                                    <div className='increment-decrement'>
                                        <button onClick={ () => setNbAdult(nbAdult + 1) }>+</button>
                                        { nbAdult > 0 ? (
                                            <button onClick={ () => setNbAdult(nbAdult - 1) }>+</button> ) 
                                            : <button>-</button> }
                                    </div>
                                </div>
                            </div>
                            <div className='children-passenger'>
                                <span className='children-title'>Adultes</span>
                                <div className='children-nb'>
                                    <span>{ nbChild }</span>
                                    <div className='increment-decrement'>
                                        <button onClick={ () => setNbChild(nbChild +1) }>+</button>
                                        { nbChild > 0 ? (
                                            <button onClick={ () => setNbChild(nbChild -1) }>-</button> )
                                            : <button>-</button> }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='search-flights'>Réserver maintenant</button>
                    </div>
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