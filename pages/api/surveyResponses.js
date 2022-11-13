import axios from 'axios';

const url = 'https://rmvse478j7.execute-api.us-west-1.amazonaws.com/default/getSurveyResponses';

const surveyResponses = () => {
    axios.get(url, {
        params: {
            "TableName": "SurveyResponses"
        }
    })
        .then(function (response) {
            return (response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default surveyResponses;

// export default function handler(req, res) {
//     res.status(200).json(surveyData)
//   }

