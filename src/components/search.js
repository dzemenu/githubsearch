import React, { useState ,useEffect} from 'react'
import styled from 'styled-components'
 const Card=styled.div`
 background-color:#51344d;
 border-radius:20px;
 padding:70px;
 width:70%;
 margin-bottom:30px;
 `;
const Search = ({qstring,qlanguage}) => {
    const [result,setResult]=useState([])
    let url='https://api.github.com/search/repositories?q='
   let qurl=url+qstring +'+'+'language:'+qlanguage+'&sort=stars&order=des'
    useEffect(() => {
fetch(qurl).then(res=>res.json()).then(data=>{setResult(data.items) 
    console.log(data.items   )})       
    }, [qurl])
    return (
        <>
            {result.map((s,idx)=>{
                return <Card key={idx}><h4>{s.full_name}</h4>
                <span><p>{s.description}</p></span>
                <span><a href={s.clone_url}> visit repo</a></span>
                </Card>
            })}
        </>
    )
}

export default Search

