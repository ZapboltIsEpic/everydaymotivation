import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collatedChallengesExist } from '../helpers';
import { collection, query, where, onSnapshot, orderBy, getDocs } from 'firebase/firestore';
import moment from 'moment';

const collatedChallenges = () => {};

export const useChallenges = selectedProject => {
    const [challenges, setChallenges] = useState([]);
    const [archivedChallenges, setArchivedChallenges] = useState([]);

    useEffect(() => {
        let challengesQuery = query(
            collection(db, 'challenges'),
            where('userId', '==', '0')
        );

        challengesQuery = selectedProject && !collatedChallengesExist(selectedProject)
            ? query(challengesQuery, where('projectId', '==', selectedProject))
            : selectedProject === 'TODAYS_LIST'
                ? query(challengesQuery, where('date', '==', moment().format('DD/MM/YYYY')))
                : selectedProject == 'UPCOMING_TASKS' || selectedProject === 0
                    ? query(challengesQuery, where('date', '==', ''))
                    : challengesQuery;

        const unsubscribe = onSnapshot(challengesQuery, snapshot => {
            const newChallenges = snapshot.docs.map(challenge => ({
                id: challenge.id,
                ...challenge.data()
            }));

            setChallenges(newChallenges);
        });

        return unsubscribe;
    }, [selectedProject]);

    return { challenges, archivedChallenges };
};

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const projectsQuery = query(
                collection(db, 'projects'),
                where('userId', '==', '0'),
                orderBy('projectId')
            );

            const snapshot = await getDocs(projectsQuery);

            const allProjects = snapshot.docs.map(project => ({
                ...project.data(),
                docId: project.id,
            }));

            if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                setProjects(allProjects);
            }
        };

        fetchProjects();
    }, [projects]);

    return { projects, setProjects };
};