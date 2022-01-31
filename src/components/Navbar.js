import React, { useState } from "react";
import propTypes from 'prop-types';
export default function Navbar(props) {
    const [text,settext] = useState("");
    const handleOnChange = (event) => {
        // console.log(event.target.value);
        settext(event.target.value);
    }
    const handleClick = () =>{
        const newtext = text.toUpperCase();
        settext(newtext);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Link</a>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0"> */}
                    <input className="form-control mr-sm-2" onChange={handleOnChange} type="search" value={text} placeholder="Enter text" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleClick} type="submit">Search</button>
                {/* </form> */}
            </div>
        </nav>

    )
}

Navbar.propTypes = {
     title: propTypes.string.isRequired,
}