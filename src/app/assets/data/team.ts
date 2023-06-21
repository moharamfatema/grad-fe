import { IPerson } from '../../types/person';
import Fatema from '../../assets/img/team/fatema.png';
const placeholder = 'https://dummyimage.com/100x100/fff/333';
import Nourhan from '../../assets/img/team/nourhan.png';
import Raslan from '../../assets/img/team/Raslan.png';
import Yousef from '../../assets/img/team/Khafaga.png';

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
        name: 'Yousef Khafaga',
        title: 'SWE | ML Engineer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel.',
        picture: Yousef,
    },
    {
        name: 'Nourhan Aboelsoaoud',
        title: 'SWE | ML Engineer',
        bio: 'A hardworking machine learning engineer with passion for research and development, and always learning about new technologies.',
        picture: Nourhan,
        github: 'https://github.com/NourhanWaleed',
        linkedin: 'https://www.linkedin.com/in/nourhan-waleed-964230214',
        email: 'nourhanaboelsoaoud@gmail.com',
    },
    {
        name: 'Mohamed Raslan',
        title: 'SWE | ML Engineer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel.',
        picture: Raslan,
    },
    {
        name: 'Mohanad Bashar',
        title: 'SWE | ML Engineer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel.',
        picture: placeholder,
    },
];
