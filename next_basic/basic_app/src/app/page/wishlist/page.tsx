'use client'

import { useState } from "react"

const WishList=()=>{
    let _wish=['복슴복슴','심바','고구마']
    let [count, setCount] =useState<number[]>([0,0,0])
    const CountPlus = (i:number)=>{
        let countCopy = [...count];
        countCopy[i]++;
        console.log(countCopy)
        setCount(countCopy)
    }
    const CountMinus = (i:number)=>{
        let countCopy = [...count];
        countCopy[i]--;
        console.log(countCopy)
        setCount(countCopy)
    }
    return(
        <section className="wishListWrap">
            <ul>
            {
                _wish.map((item,i)=>{
                    return(
                        <li key={i}>
                            <p>{item}</p>
                            <span>{count[i]}</span>
                            <button onClick={()=>{CountPlus(i)}}>+</button>
                            <button onClick={()=>{CountMinus(i)}}>-</button>
                        </li>
                    )
                })
            }

            </ul>
      
        </section>
    )
}

export default WishList;