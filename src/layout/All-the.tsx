import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
const Allth = () => {
    const [inputval, setInputval] = useState<any>("")
    const [show, setShow] = useState<boolean>(false)
    const [ValueArr,setValueArr]=useState<any>(["Apple","Mango","Grapes","Oragne"])
    let dc=1
    const ViewPassword = () => {
        dc++
        console.log(dc)
        if (dc === 2) {
            setShow(true)  
        } else {            
            setShow(false)
            dc=0
        }
        
    }
    const HidePass = () => {
        setShow(false)
        dc=0
    }
    useEffect(() => {
        axios.post("https://jsonplaceholder.typicode.com/users").then((res)=>console.log(res)).catch((e)=>console.log(e.toJSON().message))
    }, [])
    
    const Shuffleval = () => {
        let dc:any = [...ValueArr].sort(() => Math.random() - 0.6)
        setValueArr(dc)
       
    
    }

  return (
    <div className='container-fluid'>
          <div className='row'>
              <div className='col-4 pass-input'>
                  <input type={show? "text":"password"}  className='form-control' onChange={(e)=>setInputval(e.target.value)} value={inputval} placeholder='Type Passowrd' />
                  <FontAwesomeIcon onClick={ViewPassword} onMouseLeave={HidePass} icon={faEyeLowVision} /> 
                  {ValueArr.map((item:any, ind:any) => {
                      return <p key={ind}>{item }</p>
                  })}
                  <button type='button' onClick={Shuffleval} className='btn btn-primary'>Change Order</button>
              </div>
          </div>
          
    </div>
  )
}
export default Allth;