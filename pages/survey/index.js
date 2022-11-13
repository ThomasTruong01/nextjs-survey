import Link from "next/link";
import Styles from '../../styles/survey2.module.css';
import SurveyData from './survey.json';

const Survey = () => {
    
    return (
        <div className={Styles.container}>
            <h1>Do you want to take a survey?</h1>
            <Link href="./survey/1">Go to Survey</Link>
        </div>
    )
}
export default Survey;