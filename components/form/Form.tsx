import styles from './form.module.css'

export default function Form({
    children,
}: {
    children: React.ReactNode
}) {


    return (
        <form className={styles.form}>
            {children}
        </form>
    )
}