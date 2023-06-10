import React, { FC } from 'react';
import { team } from '../../assets/data/team';
import Card from './components/Card';

const About: FC = () => {
    return (
        <section
            id='about'
            className='p-10 grid grid-flow-col grid-rows-2 gap-16 justify-center'
        >
            {team.map(person => (
                <Card key={person.name} person={person} />
            ))}
        </section>
    );
};

export default About;
