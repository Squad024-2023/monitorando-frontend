import styles from '../form.module.css'

type Props = {
    type: 'submit' | 'button';
    texto: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

}

export default function BotaoFormSec({ type, texto, onClick }: Props) {
    return (
        <button
            className={styles.BotaoFormSec}
            type={type}
            onClick={onClick}
        >
            {texto}
        </button>
    )
}