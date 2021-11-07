import styles from '../../styles/Home.module.css'

function SelectComponent(props) {
    return (
        <div className={styles.SelectDiv}>
            <h4
                className={styles.labelText}>
                {props.text}
            </h4>

            <input 
            type="checkbox"
            onChange={props.onChange}
            />

        </div>
    )
}

export default SelectComponent;