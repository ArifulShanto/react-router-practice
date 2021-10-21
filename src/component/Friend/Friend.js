import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name , email , id} = props.friend;
    const friendStyle = {
        border : '1px solid purple',
        padding : '20px',
        margin : '20px', 
        borderRadius : '20px'
    }
    return (
        <div style = {friendStyle}>
            <h4>Name : {name}</h4>
            <p><small>E-mail : {email}</small></p>
            <p><Link to={`/friend/${id}`}>Show detail of {id}</Link></p>
        </div>
    );
};

export default Friend;