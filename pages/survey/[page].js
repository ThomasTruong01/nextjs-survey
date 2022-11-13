import { useRouter } from 'next/router';
import SurveyQuestion from '../../components/questions2/SurveyQuestion';
import { v4 as uuid } from 'uuid';
import { useEffect } from 'react';
import useStore from './responses'

const Page = ({data}) => {
    const router = useRouter();
    const { page } = router.query;
    const buildData =  data.Items[0]

    if (buildData) {
        const lastPage = buildData.pages.length;
        const setUser = useStore((state) => state.setUser);
        const setTimestamp = useStore((state) => state.setTimestamp);
        
        
        useEffect(() => {
            const unique_id = uuid();
            const userid = localStorage.getItem('user_id');
    
            setUser(userid);
            setTimestamp(Math.floor(Date.now() / 1000));
            
            if (!userid) {
                localStorage.setItem('user_id', unique_id);
            }
        },[])
        const myPage = buildData.pages.find(elem => elem.page == page).elems
        
        return (
            <div>
                <SurveyQuestion data={myPage} page={page} lastPage={lastPage} />
            </div>
            )
    }

}

export default Page;


export async function getServerSideProps() {
    // Fetch data from external API
    const tableName = 'SurveyBuild'
    const res = await fetch(`https://rmvse478j7.execute-api.us-west-1.amazonaws.com/default/getSurveyResponses?TableName=${tableName}`)
    const data = await res.json()
    console.log(data);
    // Pass data to the page via props
    return { props: { data } }
  }