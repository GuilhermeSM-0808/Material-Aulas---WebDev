import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function PostUsuario(){

    const parametros = useParams()

    const [posts, setPosts] = useState([]);
    
      useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userID=${parametros.id}`)
          .then((res) => res.json())
          .then((data) => setPosts(data));
      }, []);

    return (
        <>
            {posts.map(pegaItem => (
                <div class="bg-blue-200 m-2 p-3 rounded-2xl">
                    <h2 class="text-red-600">{pegaItem.title}</h2>
                    <p>{pegaItem.body}</p>
                </div>
            ))}
        </>
    )



}