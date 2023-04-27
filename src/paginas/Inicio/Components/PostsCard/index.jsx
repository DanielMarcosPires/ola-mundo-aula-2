import React from "react";
import style from "./css/style.module.css";

import {Link} from 'react-router-dom'
import BotaoPrincipal from "componentes/BotaoPrincipal";
export default function PostsCard({ post }) {
  console.log(post);
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={style.post}>
        <img
          className={style.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />
        <h2 className={style.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
        );
}
