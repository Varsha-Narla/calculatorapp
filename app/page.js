'use client'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState(" ")
  const [expression, setExpression] = useState(" ")
  const buttonClick = (value) =>{
    // press = -> to show result 
    if (value === '='){
      try{
        setResult(eval(expression).toString())
        setExpression(eval(expression).toString())
      }
      catch(error){
        setResult ('error')
      }
        
      
    }
    // clear button 
    else if (value === 'C'){
      setResult(" ")
      setExpression(' ')
    }
    else{
      setExpression((prev)=>prev+value)
    }
  }
  const buttons=['7','8','9','/'
                ,'4','5','6','*',
                '1','2','3','-',
                '0','.','+',
                '=','C']
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      {/* padding is distance from div 
      margin is distance from boundary */}
      <h1 className=' text-4xl font-bold mb-10'>Calculator</h1>
      <div className=' bg-gray-50 rounded-lg shadow-lg'>
        <input type='text' value={expression} readOnly className='w-full text-3xl mb-2 border-b-4 border-gray-600 focus:outline-none'/>
        <input type='text' value={result} readOnly className='w-full text-4xl mb-4 focus:outline-none font-bold'/>
        <div className='grid grid-cols-4 gap-3'> 
            {
              buttons.map(
                (btn)=>(<button key={btn} onClick={()=>buttonClick(btn)} className='text-2xl bg-gray-400 hover:bg-gray-600 p-2'>
                  {
                    btn
                  }
                </button>))
                
            }
        </div>
      </div>
      
       </main>
    );
}

//grid and flex and tailwind 