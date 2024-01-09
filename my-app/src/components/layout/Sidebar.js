import React, { useState } from 'react';
import { FaCog, FaHome } from 'react-icons/fa';

import { useSelectedProjectValue } from '../../context';
import { Projects } from '../Projects';

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue;
    const [active, setActive] = useState('TODAYS_LIST');
    const [showProjects, setShowProjects] = useState(true);

    return (
        <div className="sidebar" data-test-id="sidebar">
            <ul className="sidebar__generic">
                <a href="/TODAYS_LIST"><FaHome />Today's List</a>
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
            <Projects />
        </div>
    );
};
