import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { collatedChallengesExist } from '../helpers';

const collatedChallenges = () => {};

export const useChallenges = selectedProject => {
    const { challenges, setChallenges } = useState([]);
    const { archivedChallenges, setArchivedChallenges } = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('challenges')
            .where('userId', '==', '0');

        unsubscribe = selectedProject && !collatedChallengesExist(selectedProject)
            ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
            : selectedProject === 'TODAYS_LIST'
                ? (unsubscribe = unsubscribe.where(
                    'date',
                    '==',
                    moment().format('DD/MM/YYYY')
                ))
                : selectedProject == 'UPCOMING_TASKS' || selectedChallenge === 0
                    ? (unsubscribe = unsubscribe.where('date', '==', ''))
                    : unsubscribe;
        
        unsubscribe = unsubscribe.onSnapshot(snapshot => {  
            const newChallenges = snapshot.docs.map(challenge => ({
                id: challenge.id,
                ...challenge.data()
            }));

            setChallenges(
                selectedProject === 'TODAYS_LIST'
                    ? newChallenges.filter(
                        challenge => challenge.date === moment().format('DD/MM/YYYY')
                    )
                    : newChallenges
            );

            setArchivedChallenges(newChallenges.filter(challenge => challenge.archived !== false));
        });

        return () => unsubscribe();
    }, [selectedProject]);

    return { challenges, archivedChallenges };
};

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collections('projects')
            .where('userId', '==', '0')
            .orderBy('projectId')
            .get()
            .then(snapshot => {
                const allProjects = snapshot.docs.map(project => ({
                    ...project.data(),
                    docId: project.id,
                }));

                if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                    setProjects(allProjects);
                }
            });
    }, [projects]);

    return { projects, setProjects };
};