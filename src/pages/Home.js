import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from "../components/FeaturedRooms";
 function Home() {
    return (
        <>
            <Hero>
                <Banner title="Monogaga plages" subtitle="Super hotels au coût de 20.000 F le jour">
                    <Link to="/rooms" className="btn-primary">
                        Nos chambres
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}
export default Home;