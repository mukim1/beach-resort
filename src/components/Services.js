import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail></FaCocktail>,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque quam Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                icon: <FaHiking></FaHiking>,
                title: "endless hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque quam Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque"
            },
            {
                icon: <FaShuttleVan></FaShuttleVan>,
                title: "free shuttle",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque quam Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur"
            },
            {
                icon: <FaBeer></FaBeer>,
                title: "strongest beer",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque quam Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro"
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="subTitle">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in dolorem eligendi inventore, necessitatibus consequuntur?</p>
                </div>
                <div className="services-center">
                    {
                        this.state.services.map((item, index) => {
                            return (<article key={index}>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>)
                        })
                    }
                </div>
            </section>
        );
    }
}

export default Services;