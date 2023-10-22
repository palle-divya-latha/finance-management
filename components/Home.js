import React from 'react';
import './home.css';
import homeimg from '../imgs/homeimg.png';
import LearnmoreBtn from '../components/learnmore/LearnmoreBtn';

const Home = () => {
    return (
        <>
            <div className='home'>
               
                <div className='home-background card'>
                    
                    <div className='title-card'>
                        <div className='title'>
                            <h1 className='heading'
                                style={{
                                    color: 'purple',
                                    fontSize: '45px',
                                    margin: '10px',
                                    marginLeft: '30px',
                                    width: 'fit-content'
                                }}
                            >Finance Management</h1>
                        </div>
                        <div
                            style={{
                                color: '#A865C9',
                                margin: '10px',
                                marginLeft: '30px',
                                width: 'fit-content'
                            }}>
                            <div className='app-description'>
                                <b>Manage your spending habits with our app and build a path to financial success.</b>
                            </div>
                            <div
                            style={{
                                margin: '10px',
                                marginTop: '10px'
                            }}>
                            
                                <LearnmoreBtn className='btn'/>
                           
                            </div>
                        </div>
                    </div>
                    <img className='image' src={homeimg} alt='img' />
                </div>
            </div>
        </>
    );
}

export default Home;
