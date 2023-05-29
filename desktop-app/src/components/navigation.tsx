import '../css/App.css';
import { useState } from 'react';

export const Navigation = (props: {currentActive: string, callback: any}) => {
    var active = props.currentActive;
    var setActive = props.callback;

    return (
        <div className="navigation">
            <NavElement name="Home"  currentActive = {active} callback={setActive} />
            <NavElement name="Stats" currentActive = {active} callback={setActive}/>
        </div>
    )
};


const NavElement = (props: { name: string, currentActive: string,  callback: any }) => {
    let className = "nav-element";
    if (props.name === props.currentActive) {
        className += " active";
    }

    return (
        <div className= {className} onClick={() => {props.callback(props.name)}} >
            <p>{ props.name } </p>
        </div>
    )
};
