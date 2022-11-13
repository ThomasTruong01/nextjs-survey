import Styles from '../../styles/ResponseButton.module.css'

const Button = ({data, question_id, question_select, UpdateValue}) => {
    const type = question_select == "multi" ? "checkbox" : "radio"
    // const handeOnClick = (e) => {
        // const qid = "#" + e.target.attributes['for'].value;

    // }
    const handeOnClick2 = (e) => {
        e.preventDefault();
        const qid = "#" + e.target.attributes['for'].value;
        document.querySelector(qid).checked = !document.querySelector(qid).checked;

        if ( question_select == "multi" ) {
            const checked = document.querySelectorAll(`#${question_id} input:checked`);
            let selectedValues = []
            Array.from(checked).map(elem => {
                selectedValues.push(parseInt(elem.value))
            })
            UpdateValue(selectedValues)
        } else {
            const value = document.querySelector(`${qid}`).value
            UpdateValue(value)
        }
    }
    return (
        <div className={`${Styles.response}`}>
            <input type={type} name={question_id} value={data.value} id={question_id + "_" + data.value} />
            <label className={`${Styles.selectionBox}`} htmlFor={question_id + "_" + data.value} onClick={handeOnClick2}>{data.text}</label>
        </div>
    )
};

export default Button;


