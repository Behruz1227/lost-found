import React from 'react';
import { Link } from 'react-router-dom';
import { byId } from '../api/api';

export const RegisterNav = () => {

    const goLoginPage = () => byId("login").click();

    return (
        <>
            <Link id='login' to="/login"></Link>
            <header>
                <nav className='fixed-top'>
                    <div className='mobile_nav'></div>
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
                                <h4 onClick={goLoginPage}>Sign in</h4>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
