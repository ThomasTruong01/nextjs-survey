import Question from './Question';
import Responses from './Responses';
import Link from 'next/link'
import Styles from '../../styles/SurveyQuestion.module.css';
import useStore from "../../pages/survey/responses";


const SurveyQuestion = ({ data, page, lastPage }) => {
    const removeResponses = useStore((state) => state.removeResponses);
    const responses = useStore((state) => state);
    const pagePrevious = parseInt(page) - 1;
    const pageNext = parseInt(page) + 1;

    const handleClick = (e) => {
        e.preventDefault();
        console.log(responses)
        const data = { "object": responses }

        const { DynamoDB } = require("@aws-sdk/client-dynamodb");
        const { marshall } = require("@aws-sdk/util-dynamodb");

        // const client = new DynamoDB(clientParams);
        console.log('marshall', marshall(responses));
        // putData(item);
        // localStorage.removeItem('user_id')
        // removeResponses();

    }
    const putData = (data) => {
        console.log(data)
    }
    return (
        <div className={Styles.container}>
            {data.map((question, idx) => {
                return (
                    <div id={question.question_id} key={idx}>
                        <Question data={question} />
                        <Responses data={question} />
                    </div>
                )
            })}
            <div className={Styles.navButton}>
                {page > 1 ? <Link className={`${Styles.prev} ${Styles.btn}`} href={`/survey/${pagePrevious}`}>Previous Page</Link> : null}
                {
                    page != lastPage
                        ? <Link className={`${Styles.next} ${Styles.btn}`} href={`/survey/${pageNext}`}>Next</Link>
                        : <Link className={`${Styles.finish} ${Styles.btn}`} href='/survey' onClick={handleClick}>Finish</Link>
                }
            </div>

        </div>
    )
}

export default SurveyQuestion;