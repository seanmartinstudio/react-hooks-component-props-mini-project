import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function Articlelist({posts}) {

const articleComponents = posts.map((post) => {
    return <Article title={post.title} date={post.date} key={post.id} preview={post.preview}/>
    // return Article(post)
})

return <main>{articleComponents}</main>
}




export default Articlelist;