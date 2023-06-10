import { IPerson } from '../../types/person';
import Fatema from '../../assets/img/team/fatema.png';
import Khafaga from '../../assets/img/team/Khafaga.png';
const placeholder = 'https://dummyimage.com/100x100/fff/333';

export const team: IPerson[] = [
    {
        name: 'Fatema Moharam',
        title: 'SWE | ML Engineer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel.',
        picture: Fatema,
        github: 'https://github.com/moharamfatema',
        portfolio: 'https://moharamfatema.github.io',
        linkedin: 'https://linkedin.com/in/moharamfatema',
        email: 'moharamfatema@gmail.com',
        kaggle: 'https://kaggle.com/fatemamoharam',
    },
    {
        name: 'Youssef Khafaga',
        title: 'SWE | ML Engineer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel.',
        picture: Khafaga,
        github: 'https://github.com/YoussefKhafaga',
        linkedin: 'https://www.linkedin.com/in/youssef-khafaga-655b18205/',
        email: 'ykhfaga@gmail.com',
        kaggle: '',
    },
    {
        name: 'Nourhan Aboelsoaoud',
        title: 'SWE | ML Engineer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel.',
        picture: placeholder,
    },
    {
        name: 'Mohamed Raslan',
        title: 'SWE | ML Engineer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel.',
        picture: placeholder,
    },
    {
        name: 'Mohanad Bashar',
        title: 'SWE | ML Engineer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel.',
        picture: placeholder,
    },
];
