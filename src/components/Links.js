import React from "react";

function Links(props) {
    console.log(props)
    return (
        <div>
            <h3>Links</h3>
            <a href={props.links.github}>Github</a>
            <a href={props.links.linkedin}>Linkedin</a>
        </div>
    )
}

export default Links;