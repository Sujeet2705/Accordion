import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'; 

export default function AccordianComponent(){
  
  const [question,setQuestion] = useState("Hello");
  const [answer,setAnswer] = useState("World")
  
  return (
    <>
     <div>
       {question}
       <FontAwesomeIcon icon={faCaretDown} />
     </div>
     <div>
       {answer}
     </div>
    </>
  )
}
