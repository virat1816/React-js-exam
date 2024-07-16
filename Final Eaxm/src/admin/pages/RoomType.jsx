import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const RoomType = () => {
    const [loading, setLoading] = useState(true);

    const roomlist = useSelector((state) => state.userReducer.roomlist);

    // useEffect(() => {
    //     //    setTimeout(() => {
    //     if (roomlist) {
    //         setLoading(false);
    //     }
    //     //    }, roomlist);   // you provide time to default an right way to roomlist
    // }, [roomlist]);

    // Separate available and unavailable rooms
    const availableRooms = roomlist?.filter(room => room.status === 'available');
    console.log("🚀 ~ RoomType ~ availableRooms:", availableRooms);
    const unavailableRooms = roomlist?.filter(room => room.status === 'unavailable');

    // Separate type by sort 
    const businessroom = availableRooms?.filter(room => room.type === 'BUSINESS');
    console.log("🚀 ~ RoomType ~ businessroom:", businessroom);

    const deluxeroom = availableRooms?.filter(room => room.type === 'DELUXE');
    console.log("🚀 ~ RoomType ~ deluxeroom:", deluxeroom);

    const generalroom = availableRooms?.filter(room => room.type === 'GENERAL');
    console.log("🚀 ~ RoomType ~ generalroom:", generalroom);

    const commonroom = availableRooms?.filter(room => room.type === 'COMMON');
    console.log("🚀 ~ RoomType ~ commonroom:", commonroom);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <h5>AVAILABLE BUSINESS ROOM</h5>
            <table className="table table-bordered table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">ROOM</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {businessroom?.map((val, index) => (
                        <tr key={index} style={{ height: "10px" }}>
                            <td>{val.room}</td>
                            <td>{val.status}</td>
                            <td>3000$</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h5>AVAILABLE DELUXE ROOM</h5>
            <table className="table table-bordered table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">ROOM</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {deluxeroom?.map((val, index) => (
                        <tr key={index} style={{ height: "10px" }}>
                            <td>{val.room}</td>
                            <td>{val.status}</td>
                            <td>2000$</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h5>AVAILABLE GENERAL ROOM</h5>
            <table className="table table-bordered table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">ROOM</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {generalroom?.map((val, index) => (
                        <tr key={index} style={{ height: "10px" }}>
                            <td>{val.room}</td>
                            <td>{val.status}</td>
                            <td>1000$</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h5>AVAILABLE COMMON ROOM</h5>
            <table className="table table-bordered table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">ROOM</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {commonroom?.map((val, index) => (
                        <tr key={index} style={{ height: "10px" }}>
                            <td>{val.room}</td>
                            <td>{val.status}</td>
                            <td>500$</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default RoomType;
