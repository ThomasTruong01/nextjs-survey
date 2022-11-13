import Styles from '../../styles/Comment.module.css';
import { v4 as uuid } from 'uuid';

const Comment = ({data, UpdateValue}) => {
    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        const unique_id = uuid();

        UpdateValue({
            id: unique_id,
            userid: localStorage.getItem('user_id'),
            question_id: data.question_id, 
            response_value: value, 
            response_text: value,
            timestamp: Math.floor(Date.now() / 1000)
        })
    }
    return (
        <div className={Styles.comment}>
            <textarea onChange={handleChange} placeholder="Please enter in your comment" />
        </div>
    )
}

export default Comment;