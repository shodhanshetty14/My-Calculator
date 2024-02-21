import React, { useState} from 'react'
import { FaCalculator } from "react-icons/fa";

const Calculator = () =>{

    const [value, setValue] = useState('')

    const clearHandler = () =>{
        setValue('')
    }

    const backspaceHandler = () =>{
        setValue(value.slice(0,-1))
    }

    const onClickHandler =(e) =>{
        setValue(value.concat(e.target.value))
    }
    
    const equateHandler=(e)=>{
        try{
            // eslint-disable-next-line
            setValue(eval(value).toString())
        }
        catch(error){
            setValue('ERROR')
        }
    }


    return(
        <>
            {/*  Heading Section */}
            <section >
                <div className='bg-gray-800 w-96 h-screen mx-auto rounded-2xl overflow-hidden mt-5'>
                    <div className='text-white w-full text-4xl space-x-5 pt-6 mx-auto flex justify-center'>
                        <FaCalculator />
                        <p className='font-bold'>My Calculator</p>
                    </div>

        {/* Display Section */}
            <div className='bg-inherit w-full h-20 mt-7 px-3 text-5xl justify-center  text-slate-300 border-b-2 border-gray-700 rounded-xl'>
                <input type="text"
                placeholder='0'
                value={value}
                className='bg-inherit w-full h-full text-right'
                disabled
                 />
            </div>
            
        {/* Button Section */}
            <div className='grid grid-cols-4 gap-2 mx-4  mt-5'>
                <button onClick={clearHandler} className='bg-red-600 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 hover:text-black ...'>AC</button>
                <button onClick={backspaceHandler} className='bg-red-600 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 hover:text-black ...'>C</button>
                <button onClick={onClickHandler} value='/' className='bg-slate-700 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>/</button>
                <button onClick={onClickHandler} value='*' className='bg-slate-700 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>*</button>

                <button onClick={onClickHandler} value='7' className='bg-slate-700 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>7</button>
                <button onClick={onClickHandler} value='8' className='bg-slate-700 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>8</button>
                <button onClick={onClickHandler} value='9' className='bg-slate-700 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>9</button>
                <button onClick={onClickHandler} value='-' className='bg-slate-700 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>-</button>

                <button onClick={onClickHandler} value='4' className='bg-slate-700 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>4</button>
                <button onClick={onClickHandler} value='5' className='bg-slate-700 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>5</button>
                <button onClick={onClickHandler} value='6' className='bg-slate-700 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>6</button>
                <button onClick={onClickHandler} value='+' className='bg-slate-700 w-20  rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow row-span-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>+</button>

                <button onClick={onClickHandler} value='1' className='bg-slate-700 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>1</button>
                <button onClick={onClickHandler} value='2' className='bg-slate-700 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>2</button>
                <button onClick={onClickHandler} value='3' className='bg-slate-700 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>3</button>


                <button onClick={onClickHandler} value='.' className='bg-slate-700 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>.</button>
                <button onClick={onClickHandler} value='0' className='bg-slate-700 w-20 h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:text-black ...'>0</button>
                <button onClick={equateHandler} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 hover:text-black ... bg-orange-500  h-20 rounded-2xl font-bold text-lg text-white flex justify-center items-center shadow col-span-2'>=</button>

            </div>
            

                </div>
            </section>
        </>
    );
}

export default Calculator;