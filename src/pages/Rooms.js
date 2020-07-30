import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom"

 const Rooms = () => {
    return (
        <Hero hero="roomsHero">
            <Banner title="Nos chambres">
                <Link to="/" className="btn-primary">Retour à la page d'accueil</Link>
            </Banner>
        </Hero>
    )
}
export default Rooms;