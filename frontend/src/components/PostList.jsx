import { useEffect, useState } from "react"
import axios from "axios";

export const PostList = () => { 
    const [posts, setPosts] = useState(new Array());
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/portfolio/posts/?format=json`)
            .then(res => res.data)
            .then(data => setPosts(data))
    }, [])

    return (
        <>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <img src={post.post_image_url} alt="" />
                        <p>{post.text}</p>
                    </div>
                ) 
            
            })}
        </>
    )
}