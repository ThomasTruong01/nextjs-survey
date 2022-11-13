import Button from './ResponseButton';
import Comment from './Comment';
import Styles from '../../styles/Responses.module.css'
import { useEffect, useState } from 'react';
import useStore from '../../pages/survey/responses'



const Responses = ({ data }) => {
    const responses = data.question_responses;
    const question_type = data.question_category == "nps" ? data.question_type + "_" + data.question_category : data.question_type;
    const [questionValue, setQuestionValue] = useState({});
    const setResponses = useStore((state) => state.setResponses);
    const updateResponse = useStore((state) => state.updateResponse);
    const removeResponses = useStore((state) => state.removeResponses);
    const storedResponses = useStore((state) => state.responses);

    useEffect(() => {
        let respFound = false;
        if (JSON.stringify(questionValue) != '{}') {
            storedResponses.map(item => {
                if ( item.question_id === questionValue.question_id ) {
                    respFound = true;
                }
            });
            if (respFound) {
                updateResponse(questionValue)
            } else {
                if (questionValue) {
                    setResponses(questionValue)
                }
            }
        }
    }, [questionValue])

    return (
        <div className={`${Styles.responses} ${Styles[`${question_type}`]}`}>
            {data.question_high_low
                ? <div className={Styles.high_low}>
                    <label>{data.question_high_low.low}</label>
                    <label>{data.question_high_low.high}</label>
                </div>
                : null
            }

            {question_type == "comment" ? <Comment data={data} UpdateValue={setQuestionValue} /> : null}

            {question_type.substring(0, 1) == "r"
                ? responses.map((response, idx) => {
                    return (
                        <Button data={data} responses={response} key={idx} UpdateValue={setQuestionValue} />
                    )
                })
                : null
            }
        </div>)
}

export default Responses;