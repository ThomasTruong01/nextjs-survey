import Button from './Button';
import Styles from '../../styles/Responses.module.css'
import { useState } from 'react';

const Responses = ({ data }) => {
    const responses = data.question_responses;
    const question_type = data.question_category == "nps" ? data.question_type + "_" + data.question_category : data.question_type;
    const [ questionValue, setQuestionValue ] = useState();
    console.log('response',data);
    return (<div className={`${Styles.responses} ${Styles[`${question_type}`]}`}>
        {data.question_high_low
            ? <div className={Styles.high_low}>
                <label>{data.question_high_low.low}</label>
                <label>{data.question_high_low.high}</label>
            </div>
            : null
        }
        {responses.map((response, idx) => {
            return (
                <Button data={response} question_id={data.question_id} question_select={data.question_select} key={idx} UpdateValue={setQuestionValue}/>
                )
            })}
    </div>)
}

export default Responses;