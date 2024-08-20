import styles from './sobreMim.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.jpg'

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre Mim'
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Bernardo!
            </h3>

            <img 
            src={fotoSobreMim} 
            alt='Foto minha sorrindo'
            className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            Oi, tudo bem? Eu sou aluno de Front-end na Alura e estou feliz de te ver aqui.
            </p>
            <p className={styles.paragrafo}>
            Minha história com programação começou na Matriz da Nutriz em Lagoa Vermelha, RS, quando começei a estudar programação graças a uma oportunidade incrivel que me foi dada. Eu aprendi lógica de programação e o básico de JavaScript, mas sem me aprofundar nele (por enquanto). Eu gostava muito de programação, e já esperava trabalhar com ela, mas eu planejava trabalhar com ela de outra maneira.
            </p>
            <p className={styles.paragrafo}>
            No ensino superior, eu espero cursar engenharia elétrica ou programação avaçada na FIAP. Espero poder conseguir me qualificar para uma vaga nessa faculdade pelo ENEM, e lá, espero evoluir ainda mais meu conhecimento sobre as coisas.
            </p>
            <p className={styles.paragrafo}>
            E com isso ter minha eperiência como desenvolvedor mais próxima da realidade, com prazos de implementação paa os projetos.
            </p>
            <p className={styles.paragrafo}>
            Por enquanto, tem sido apenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores. Hoje sou muito feliz de ter a oportunidade de gtrazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante!
            </p>
        </PostModelo>
    );
}