import React from 'react'
import './css/style.css'
import { useNavigate, useParams } from 'react-router-dom'
import PostsJSON from 'assets/json/posts.json'
import PostModelo from 'componentes/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NaoEncontrado from 'paginas/NaoEncontrado';
export default function Post() {
    const parametro = useParams();

    const post = PostsJSON.find((post)=> {
      return post.id === Number(parametro.id)
    })

    if(!post)
     return <NaoEncontrado />
      
    return (
      <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
      </PostModelo>
      )
}
