import Styles from '../../styles/ResponseButton.module.css';
import { v4 as uuid } from 'uuid';

const Button = ({data, responses, UpdateValue}) => {
    const type = data.question_select == "multi" ? "checkbox" : "radio";
    const value = data.question_select == "multi" ? responses.text : responses.value;

    const handeOnClick = (e) => {
        e.preventDefault();
        const qid = "#" + e.target.attributes['for'].value;
        const unique_id = uuid();
        document.querySelector(qid).checked = !document.querySelector(qid).checked;

        if ( data.question_select == "multi" ) {
            const checked = document.querySelectorAll(`#${data.question_id} input:checked`);
            let selectedValues = []
            Array.from(checked).map(elem => {
                selectedValues.push(elem.value)
            })
            const values = {
                id: unique_id,
                userid: localStorage.getItem('user_id'),
                question_id: data.question_id, 
                response_value: selectedValues, 
                response_text: responses.text,
                timestamp: Math.floor(Date.now() / 1000)
            }
            UpdateValue(values)
        } else {
            const value = document.querySelector(`${qid}`).value

            UpdateValue({
                id: unique_id,
                userid: localStorage.getItem('user_id'),
                question_id: data.question_id, 
                response_value: value, 
                response_text: responses.text,
                timestamp: Math.floor(Date.now() / 1000)
            })
        }
    }
    return (
        <div className={`${Styles.response} ${Styles[`${data.question_type}`]}`}>
            <input type={type} name={data.question_id} value={value} id={data.question_id + "_" + responses.value} />
            <label className={`${Styles.selectionBox}`} htmlFor={data.question_id + "_" + responses.value} onClick={handeOnClick}>{responses.text}</label>
        </div>
    )
};

export default Button;


