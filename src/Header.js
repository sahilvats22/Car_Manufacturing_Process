import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">Car Manufacturing Process</div>
            <a
                className="github-link"
                href="https://github.com/sahilvats22/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} className="github-icon" />
                GitHub
            </a>
        </div>
    );
};

export default Header;
