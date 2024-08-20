import { Link } from 'react-router-dom';
import styles from './post.module.css';
import BotaoPrincipal from 'componentes/botaoPrincipal';

export default function PostCard({post}) {
    return (
        <Link to={`/posts/${post.id}?capa.png`}>
        <div className={styles.post}>
            <img alt='Imagem de capa do post' className={styles.capa} src={`/assets/posts/${post.id}/capa.png`}/>
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <BotaoPrincipal>Ler</BotaoPrincipal>
        </div>
        </Link>
        
    )
}