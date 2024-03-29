import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.5rem solid var(--lightblue);
    border-color: ${props => props.cart ? "var(--mainYellow)": "var(--lightblue)"};
    color: ${props => props.cart ? "var(--mainYellow)": "var(--lightblue)"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transistion: all 0.5s ease-in-out;
    &:hover{
        background: ${props => props.cart ? "var(--mainYellow)": "var(--lightblue)"};
        color: var(--mainBlue);
    }

    &:focus{
        outline: none;
    }
`;

export const NavWrapper = styled.button`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;