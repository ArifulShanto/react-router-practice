import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend , setFriend] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])
    const {name,id,email,website,phone} = friend; 
    return (
        <div>
            <h1>This is friend detail of {friendId}</h1>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{website}</p>
            <p>{phone}</p>
        </div>
    );
};

export default FriendDetail;