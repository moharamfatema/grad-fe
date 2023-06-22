import { IPerson } from '../../types/person';
import Fatema from '../../assets/img/team/fatema.png';
const placeholder = 'https://dummyimage.com/100x100/fff/333';
import Nourhan from '../../assets/img/team/nourhan.png';
import Raslan from '../../assets/img/team/Raslan.png';
import Yousef from '../../assets/img/team/Khafaga.png';
import Khafaga from '../../assets/img/team/Khafaga.png';

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
        bio: 'Hard working software engineer with machine learning skills, Played a key role in object detection problem, feature extraction and classification problem beside being the team leader.',
        picture: Khafaga,
        email: 'ykhfaga@gmail.com',
        linkedin: 'https://www.linkedin.com/in/youssef-khafaga-655b18205/',
        github: 'https://github.com/YoussefKhafaga',
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
        bio: 'Mohamed is a driven student and dedicated machine learning enthusiast with a strong interest in data science and research. With a background in data analysis and deep learning algorithms, he played a vital role in the development and fine-tuning of our violence detection model. Mohamed\'s expertise extended to exploring datasets, annotating video frames, and implementing transfer learning techniques to improve the model\'s generalization across different datasets. Additionally, he made valuable contributions to designing the backend for this website and its docker container deployment.',
        picture: Raslan,
        email: 'raslanmohamed.mr@gmail.com',
        linkedin: 'www.linkedin.com/in/mohamed-raslan1',
        kaggle: 'https://www.kaggle.com/mohamedraslann',
    },
    {
        name: 'Mohanad Bashar',
        title: 'SWE | ML Engineer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel.',
        picture: placeholder,
    },
];
