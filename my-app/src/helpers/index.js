import { collatedChallenges } from '../constants';

export const collatedChallengesExist = selectedProject => 
    collatedChallenges.find(challenge => challenge.key === selectedProject);