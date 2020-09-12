import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>Let's Add A New Room</h4>
            <form onSubmit={onsubmit}>
                <input
                type='text'
                placeholder='new name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                />

                <input 
                type='text'
                placeholder='new area'
                onChange={handleAreaInput}
                value={area}/>

                <button type="submit">Add Extra Room</button>
            </form>
        </div>
    )
}
