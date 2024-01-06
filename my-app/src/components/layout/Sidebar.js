import React from 'react';
import { FaCog } from 'react-icons/fa';

export const Sidebar = () => {
    return (
        <div className="sidebar" data-test-id="sidebar">
            <ul className="sidebar__generic">
                <li>Today's List</li>
                <li>Upcoming Tasks/Deadlines</li>
                <li>Today's Challenge</li>
                <li>
                    <span>Settings</span>
                    <span>
                        <FaCog />
                    </span>
                </li>
            </ul>
            <div className="sidebar__middle">
                <span>
                    <FaCog />
                </span>
                <h2>Challenges</h2>
            </div>
        </div>
    );
};
