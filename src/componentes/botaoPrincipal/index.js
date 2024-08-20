import styles from './botaoPrincipal.module.css'

export default function BotaoPrincipal(props) {
  const { children, tamanho } = props;
  return (
    <button className={`${styles.botao} ${styles[tamanho]}`}>
      {children}
    </button>
  );
}