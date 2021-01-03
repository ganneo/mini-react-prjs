import React from "react";

type post = {
    title: string,
    post: string
}

const Post: React.FC<post> = (prods) => {
    return (
        <div className="post">
            <h1>{prods.title}</h1>
            <p>{prods.post}</p>
        </div>
    )
}

export default Post