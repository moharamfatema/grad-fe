import React, { FC } from 'react';
import { IPerson } from '../../../types/person';
import './card.css';
interface ICard {
    person: IPerson;
}

const Card: FC<ICard> = ({ person }) => {
    // Person information card
    return (
        <div className='card w-fit max-h-fit grid grid-cols-1 shadow-md rounded-md items-center bg-primary p-0'>
            <div className='wrap p-5'>
                <div className='card__image h-fit w-fit rounded-full box-border bg-white border-2 m-auto'>
                    <img
                        src={person.picture}
                        alt={person.name}
                        className='rounded-full shadow-xl'
                        width={100}
                    />
                </div>
            </div>
            <div className='card__content flex flex-col gap-3 bg-white bg-opacity-70 h-full p-5'>
                <div className='title'>
                    <h3 className='card__name text-3xl font-light mb-1'>
                        {person.name}
                    </h3>
                    <h4 className='card__subtitle text-sm  text-gray-700'>
                        {person.title}
                    </h4>
                </div>
                <div className='divider w-full h-px bg-gray-700'></div>
                <p className='card__text text-sm max-w-sm text-justify text-gray-900'>
                    {person.bio}
                </p>
                <div className='card__links flex gap-3 align-middle h-min self-end'>
                    {person.linkedin && (
                        <a
                            href={person.linkedin}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='card-link'
                        >
                            <i className='fab fa-linkedin-in'></i>
                        </a>
                    )}
                    {person.github && (
                        <a
                            href={person.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='card-link'
                        >
                            <i className='fab fa-github'></i>
                        </a>
                    )}
                    {person.kaggle && (
                        <a
                            href={person.kaggle}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='card-link kaggle'
                        >
                            <i className='fab fa-kaggle'></i>
                        </a>
                    )}
                    {person.portfolio && (
                        <a
                            href={person.portfolio}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='card-link'
                        >
                            <i className='fas fa-globe'></i>
                        </a>
                    )}
                    {person.email && (
                        <a
                            href={`mailto:${person.email}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='card-link'
                        >
                            <i className='fas fa-envelope'></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
