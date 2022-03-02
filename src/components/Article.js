import React from "react";


function Article({title, date="January 1, 1970", key, preview}) {
return (
<article key={key}>
    <h3>{title}</h3>
    <small>{date}</small>
    <p>{preview}</p>

</article>
)
}



export default Article;