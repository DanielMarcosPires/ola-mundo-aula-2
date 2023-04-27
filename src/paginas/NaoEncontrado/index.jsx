import React from "react";

import style from "./css/style.module.css";
import erro404 from 'assets/erro_404.png'
import BotaoPrincipal from "componentes/BotaoPrincipal";
import { useNavigate } from "react-router-dom";
export default function NaoEncontrado() {
    const nav = useNavigate()
  return (
    <>
    <div className={style.conteudoContainer}>
      <span className={style.texto404}>404</span>
      <h1 className={style.titulo}>Ops! ´página não encontrado.</h1>
      <p>
        Tem certeza de que era isso que você estava procurando? Aguarde uns
        instantes e recarregue a página, ou volte para a página inicial.
      </p>
      <div onClick={()=>nav("/")}  className={style.botaoContainer}>
        <BotaoPrincipal classe="lg">Voltar</BotaoPrincipal>
      </div>
      <img
        className={style.imagemCachorro}
        src={erro404}
        alt="Cachorro de óculos e vestido como humano"
      />
    </div>
      <div className={style.espacoEmBranco}></div>
    </>
  );
}
