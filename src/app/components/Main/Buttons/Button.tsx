'use client';

import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    button: {
        name: string;
        href: string;
    }[];
}

const Button = ({ button }: ButtonProps) => {
    return (
        <StyledWrapper>
            {button.map((btn, index) => (
                <button key={index} className="button type1">
                    <span className="btn-txt">{btn.name}</span>
                </button>
            ))}
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .button {
        height: 50px;
        width: 350px;
        position: relative;
        background-color: transparent;
        cursor: pointer;
        border: 2px solid #252525;
        overflow: hidden;
        border-radius: 30px;
        color: #333;
        transition: all 0.5s ease-in-out;
    }

    .btn-txt {
        z-index: 1;
        font-size: 18px;
        font-family: 'Manrope';
        font-weight: 600;
        letter-spacing: 4px;
    }

    .type1::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        transition: all 0.5s ease-in-out;
        background-color: #333;
        border-radius: 30px;
        visibility: hidden;
        height: 10px;
        width: 10px;
        z-index: -1;
    }

    .button:hover {
        box-shadow: 1px 1px 200px #252525;
        color: #fff;
        border: none;
        background-color: #333;
    }

    .type1:hover::after {
        visibility: visible;
        transform: scale(100) translateX(2px);
    }
`;

export default Button;
