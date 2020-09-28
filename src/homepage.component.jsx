import React from 'react';
import './homepage.styles.scss'

const HomePage = () => (
    <div className='homepage'>
    <h1>Welcome to my SES</h1>
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Residential Solar Systems</h1>
                    <span className="subtitle">view now</span>
                </div>
            </div>



        
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">commercial solar systems</h1>
                    <span className="subtitle">view now</span>
                </div>
            </div>


        
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Industrial off-grid</h1>
                    <span className="subtitle">view now</span>
                </div>
            </div>


        
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">batteries & solar storage</h1>
                    <span className="subtitle">view now</span>
                </div>
            </div>


        
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">photovoltaic solar modules</h1>
                    <span className="subtitle">view now</span>
                </div>
            </div>


        

        </div>
    </div>
)

export default HomePage;