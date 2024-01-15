import React, { useState } from 'react';

const Random = () => {
    const [message, setMessage] = useState('');

    const messages = [
        'You are capable of amazing things!',
        'Believe in yourself and all that you are.',
        'The future belongs to those who believe in the beauty of their dreams.',
        'You are stronger than you think.',
        'Every day is a new beginning. Take a deep breath and start again.',
    ];

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        setMessage(messages[randomIndex]);
    };

    return (
        <div>
            <button onClick={handleClick}>Generate Random Challenge</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Random;
