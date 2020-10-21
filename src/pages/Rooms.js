import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our Rooms">
                <Link to="/" className="btn-primary">return Home</Link>
            </Banner>
        </Hero>
        <RoomsContainer>
            
        </RoomsContainer>
        </>
    )};

export default Rooms;