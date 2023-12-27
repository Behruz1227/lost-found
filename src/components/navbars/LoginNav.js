import React from 'react';
import { Link } from 'react-router-dom';
import { byId } from '../api/api';

export const LoginNav = () => {

    const goRegisterPage = () => byId("register").click();

    return (
        <>
            <Link id='register' to="/register"></Link>
            <header>
                <nav className='fixed-top'>
                    <div className='destop_nav'>
                        <div className='container py-4 login_nav'>
                            <div className='nav_brand'>
                                <Link to="/">
                                    <span>Lost</span>
                                    <span>and</span>
                                    <span>Found</span>
                                </Link>
                            </div>
                            <div className='nav_search'>
                                <h4 onClick={goRegisterPage}>Sign up</h4>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
