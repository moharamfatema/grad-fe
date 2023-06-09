import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/50.png';
import appPaths from '../../shared/paths';

const NavBar = () => {
    const paths =
        appPaths.at(appPaths.length - 1)?.name === '404'
            ? appPaths.slice(0, -1)
            : appPaths;

    return (
        <nav className='navbar grid grid-flow-col grid-rows-1 grid-cols-3 bg-primary text-white font-bold shadow-md sticky top-0 w-full'>
            <div
                id='logo'
                className='logo flex flex-row items-center col-span-1 p-3 gap-2 font-extrabold'
            >
                <img
                    src={Logo}
                    alt='logo'
                    className='p-1 bg-white rounded-2xl'
                />
                <div className='logo-text flex flex-row items-center h-full gap-2'>
                    <h1 className='text-2xl w-min'>Vivit Violence</h1>
                    <div className='divider h-full w-px bg-white'></div>
                    <div className='decription text-sm font-normal '>
                        Video Vision Transformers For Hierarchical Anomaly
                        Detection
                    </div>
                </div>
            </div>
            <ul className='navbar__elements flex-row items-center justify-evenly col-span-2 text-xl hidden sm:flex'>
                {paths.map(path => (
                    <li className='navbar__element p-3' key={path.path}>
                        <Link to={path.path}>{path.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
