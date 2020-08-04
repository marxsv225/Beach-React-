import React, { Component } from 'react'
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"Cocktail gratuit",
                info:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem"
            },
            {
                icon:<FaHiking />,
                title:"Randonnée sans fin",
                info:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem"
            },
            {
                icon:<FaShuttleVan />,
                title:"Navette gratuite",
                info:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem"
            },

            {
                icon:<FaBeer />,
                title:"Boisson spéciale",
                info:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem"
            }
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="services"/>
               <div className="services-center">
                    {this.state.services.map((item, index) => {
                    return (
                        <article key={index} className="service">
                            <span>{item.icon} </span>
                            <h6>{item.title} </h6>
                            <p>{item.info} </p>
                        </article>
                    )
                    })}
               </div>
            </section>
        );
    }
}
