import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RoomDetails = () => {
    // Selector
    const roomdetails = useSelector((state) => state.userReducer.roomdetails);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set a timeout for 3 seconds to simulate loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className="loader">Loading...</div>; // Custom loader element
    }

    return (
        <div className="projcard-container">
            {
                roomdetails?.map((val, ind) => (
                    <div className="projcard projcard-blue" key={ind}>
                        <div className="projcard-innerbox">
                            <img className="projcard-img" src={val.IMAGGE} alt={val.type} />
                            <div className="projcard-textbox">
                                <div className="projcard-title">{val.type}</div>
                                <div className="projcard-title">{val.name}</div>
                                <div className="projcard-subtitle">{val.limit}</div>
                                <div className="projcard-bar"></div>
                                <div className="projcard-description">{val.description}</div>
                                <div className="projcard-tagbox">
                                    <Link to="/reservation">
                                        <button>{val.price}</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default RoomDetails;
