import { collatedChallenges } from '../constants';

export const getCollatedChallenges = selectedProject => 
    collatedChallenges.find(task => task.key === selectedProject);