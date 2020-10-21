import React from 'react';
import { withRoomConsumer, RoomContext } from '../context';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from '../components/Loading';

function RoomsContainer({context}){
    const {loading, sortedRooms, rooms} = context
    if(loading){
        return <Loading/>
    }
    return (
        <>
            {/* <RoomsFilter rooms={rooms}></RoomsFilter> */}
            <RoomsList rooms={sortedRooms}></RoomsList>
        </>
    )
}

export default withRoomConsumer(RoomsContainer)



// import React from 'react';
// import { RoomConsumer, RoomContext } from '../context';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import Loading from '../components/Loading';


// const RoomsContainer = () => {
//     return (
//         <>
// <RoomConsumer>
//     {
//         (value) => {
//             const {loading, sortedRooms, rooms} = value
//             if(loading){
//                 return <Loading/>
//             }
//             return (
//                 <div>
//                     <h2>hello from rooms container</h2>
//                     <RoomsFilter rooms={rooms}></RoomsFilter>
//                     <RoomsList rooms={sortedRooms}></RoomsList>
//                 </div>
//             )
//         }
//     }
// </RoomConsumer>

//         </>
//     );
// };

// export default RoomsContainer;