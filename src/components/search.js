import React, { useState ,useEffect} from 'react'

const Search = ({qstring,qlanguage}) => {
    const [result,setResult]=useState([])
    let url='https://api.github.com/search/repositories?q='
   let qurl=url+qstring +'+'+'language:'+qlanguage+'&sort=stars&order=des'
    useEffect(() => {
fetch(qurl).then(res=>res.json()).then(data=>{setResult(data.items) 
    console.log(data.items   )})       
    }, [qurl])
    return (
        <div>
            {result.map(s=>{
                return <><h4>{s.full_name}</h4>
                <span><p>{s.description}</p></span>
                </>
            })}
        </div>
    )
}

export default Search

