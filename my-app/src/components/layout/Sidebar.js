import { useSelectedProjectValue } from '../../context';
import { Projects } from '../Projects';
import React, { useState } from 'react';
import { FaCog, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue;
    const [active, setActive] = useState('TODAYS_LIST');
    const [showProjects, setShowProjects] = useState(true);
    const navigate = useNavigate();

    const handleRandomChallengeClick = () => {
        navigate('/Random'); 
    };

    return (
        <div className="sidebar" data-test-id="sidebar">
            <ul className="sidebar__generic">
                <a href="/TODAYS_LIST"><FaHome />Today's List</a>
                <li><a href="/RANDOM_CHALLENGE" onClick={handleRandomChallengeClick}><FaHome />Random Challenge</a></li>
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
