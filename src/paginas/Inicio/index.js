import style from "./css/style.module.css";
import Posts from "./Components/PostsCard";
import postsJSON from 'assets/json/posts.json'

export default function Inicio() {
  return (
      <ul className={style.posts}>
        {postsJSON.map((post)=><li key={post.id}><Posts post={post} /></li>)}
      </ul>
  );
}
