import React from 'react'
import Checkbox from '../Checkbox'
import { useChallenges } from '../hooks'

export const Challenges = () => {
    const { challenges } = useChallenges('1');

    console.log(challenges);

    const projectName = '';

    return (
        <div className = "challenges" data-test-id = "challenges">
            <h2 data-test-id = "project-name">{projectName}</h2>

            <ul className = "challenges__list">
                {challenges.map(challenge => (
                    <li key = {`${challenge.id}`}>
                        <Checkbox id = {challenge.id} />
                        <span>{challenge.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
