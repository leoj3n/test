import React from 'react';

const Header = ({cart}) => {
    return (
        <div className="header">
            <div className="icon-container">
                <div className="divider"></div>
                <div className="sprite icon logo-name"></div>
                <div style={{width:'20%'}}></div>
                <div className="sprite icon profile"></div>
            </div>
        </div>
    );
};

export default Header;
