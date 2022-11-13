import Styles from '../../styles/Question.module.css';

const Question = ({data}) =>{ 
    return (
        <div className={Styles.question} >
            <p>{data.question}</p>
        </div>
    )
}

export default Question;