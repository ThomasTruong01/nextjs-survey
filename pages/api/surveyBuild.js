import axios from 'axios';

// const url = 'https://rmvse478j7.execute-api.us-west-1.amazonaws.com/default/getSurveyResponses';

// const surveyBuild = () => {
//     return axios.get(url, {
//         params: {
//             "TableName": "SurveyBuild"
//         }
//     })
//         .then(response => response.data)

// }
// console.log(surveyBuild)

// export default surveyBuild;

export default function handler(req, res) {
    req
    res.status(200).json(surveyData)
  }

