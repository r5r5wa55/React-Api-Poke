import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import ReactLoading from 'react-loading';
//component

import Like from './component/Like';


function App() {
  const [poke, setPoke] = useState("");
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error , setError] = useState("")
  const [nextOne , setNetOne] = useState(1)
  const [fav ,setLikePoke] = useState([])

  useEffect(()=>{
    let abortController =new AbortController();
    const loadPoke = async ()=>{
      try{
        setLoading(true);
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nextOne}`,
        {signal:abortController.signal});
     
        setPoke(response.data)
        setError("");
      }catch(error){

        setError("Someting went wrong",error);
      }finally{
        setLoading(false);
      }
    }
    loadPoke();
    return ()=>abortController.abort();
  },[nextOne])

  const btnGo = ()=>{
    setNetOne(nextOne+1)
  }
  const btnPrv = ()=>{
    setNetOne(nextOne-1)
  }

  const btnLike =()=>{
    setLikePoke((oldpoke)=>[...oldpoke,poke])
  }
 
  return (
    
    <div className='max-w-10xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    
        <div >
          {loading? <><ReactLoading type='spin' height='20%' width='20%' color='black' /></>
          :
          <>
            <h1>{poke?.name}</h1>
            <button className="addLike" onClick={btnLike}>กดชื่นชอบ</button><br/>
            <img src={poke?.sprites?.other?.home.front_default} alt={poke?.name} /> 
            {poke?.abilities?.map((abi,index)=>(
              <li key={index}>{abi.ability.name}</li>
            ))}
            {nextOne-1? <button className="btnPrvious" onClick={btnPrv}>ย้อนกลับ</button>:null}
            <button className="btnNext" onClick={btnGo}>ถัดไป</button>
       
          </>
          }
        </div>
        <div className='h-full'>
              <h2>Pokemon ของคุณ</h2>
              {fav.length>0 ? <Like likePoke={fav}/> : <div className='flex justify-center items-center h-full'><p>Pokemon</p></div>}
        
            </div>
      </div>
    </div>

  )
}

export default App
