import React from 'react'
import PropTypes from 'prop-types'


function Header({text}) {
    return (
        <div style={{display: "flex"}}>

            <div style={{flex: "2"}}>
        
            </div>

            <h1 style={{flex: "1"}}>{text}</h1>

            <div style={{flex: "2"}}>

            </div>

        </div>
    )
}

Header.defaultProps={text: "Jottero Rocks!"}
Header.propTypes={text:PropTypes.string}

export default Header
