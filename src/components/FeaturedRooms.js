import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from '../components/Title';

class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let { loading, featuredRooms: rooms } = this.context
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}></Room>
        })

        return (
            <section className="featured-rooms">
                <Title title="Featured Room"></Title>
                <div className="subTitle">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in dolorem eligendi inventore, necessitatibus consequuntur?</p>
                </div>
                <div className="featured-rooms-center">
                    {loading ? <Loading></Loading> : rooms}
                </div>
            </section>
        );
    }
}

export default FeaturedRooms;