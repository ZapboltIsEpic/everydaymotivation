import React from 'react';
import { Sidebar } from './Sidebar';
import { Challenges } from '../Challenges';

export const Content = () => (
    <section>
        <Sidebar />
        <Challenges />
    </section>
);