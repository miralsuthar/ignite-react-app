import React,{useState} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
//REDUX AND ROUTES

import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';

import logo from '../img/logo.svg';

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('');
    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    }
    const clearSearch = () => {
        dispatch({type: "CLEAR_SEARCH"});
    }
    return (
        <StyledNav>
            <Logo onClick={clearSearch}>
                <img src={logo} alt="logo"/>
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text"/>
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 2px 5px 30px rgba(0,0,0,0.2);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    button{
        padding-top: 1.1rem;
        padding-bottom: 0.6rem;
        padding-left: 2rem;
        padding-right: 2rem; 
        border: none;
        background: none;
        background-color: #F6F705;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.1);
        text-align: center;
        cursor: pointer;
        border-left: 3px solid black;
        font-weight: bold;
        font-size: 1rem;
    }
`;

const Logo = styled(motion.div)`
    cursor: pointer;
`;

export default Nav
