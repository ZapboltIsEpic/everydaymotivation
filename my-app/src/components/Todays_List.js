import React, { useEffect, useState } from 'react';
import { db } from "../firebase"
import { query, where, getDocs, collection, doc, updateDoc } from 'firebase/firestore';

export const Todays_List = ({ id }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const q = query(
                collection(db, 'challenges'),
                where('date', '==', '')
            );
            
            const querySnapshot = await getDocs(q);

            const tasksData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTasks(tasksData);
        };

        fetchTasks();
    }, []);

    const archiveTask = async (taskId) => {
        const docRef = doc(db, 'challenges', taskId);
      
        await updateDoc(docRef, {
            archived: true
        });
    };
    console.log(tasks);
    return (
        <div>
            <button onClick={() => addTask()}>Add Task</button>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h2>{task.task}</h2>
                    <p>{task.description}</p>
                    <button onClick={() => archiveTask(task.id)}>Archive</button>
                </div>
            ))}
        </div>
    );
};
