import axios from 'axios'
import React,{useState} from 'react'
import { DictionaryWrapper, Half, Halfs, Textarea, Phone } from './mainPage/style'



function MainPage() {
   const [dictionary, setDictionary] = useState([])

const apiKey="dict.1.1.20211024T131641Z.ba977e812799dfe7.a7f0c63273da71d64f57f2dd072fa27606dd1dcf"

    const translate=(e)=>{

        const link=
        `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${apiKey}&lang=en-ru&text=${e.target.value}`
 console.log(link);
 axios
 .get(link)
 .then((res)=>{
     console.log(res.data.def);
     setDictionary(res.data.def)
 })
 .catch((err)=>{
console.log(err);
 })
    }


    return (

       <DictionaryWrapper>
           <center>yandex dictionary</center>
<Half>
<Textarea onChange={translate} rows='10'/>
<p className='create'>created by Abdullo</p>
</Half>


<Halfs>

{
    dictionary.map(({text, pos, ts, tr}, index)=>(
        <div className='divs' key={index}>
     <b className='text2'> {text} <br /></b>
     <Phone>      
          <p className='pos'>{pos}</p> <br />
       <p className='ts'>{ts}</p><br />
       </Phone>
<span >
    {tr.map(({text, pos, gen, fr, syn}, index)=>(
        <b className='text'>  <br /> {text}, <br /></b>
    ))}
            </span>
        </div>
    ))
}


</Halfs>

       </DictionaryWrapper>
    )
}

export default MainPage
