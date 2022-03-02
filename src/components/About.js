import React from "react";


function About({about, image="https://via.placeholder.com/215",}) {
return (
<aside>
    <img src={image} alt="blog logo"></img>
    <ap>{about}</ap>
</aside>
)
}




export default About;