import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function Articlelist({posts}) {

const articleComponents = posts.map((post) => {
    // return <Article title={post.title}/>
    return Article(post)
})

return <main>{articleComponents}</main>
}




export default Articlelist;