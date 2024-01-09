import React from "react";
import { FaPizzaSlice, FaBolt } from 'react-icons/fa';

export const Header = () => { 
    const x = 1;

    return (
        <header className="header" data-testid="header">
            <div className="logo">
                <span><FaBolt />EverydayMotivation</span>
            </div>
        </header>
    );
};