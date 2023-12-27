'use client'

import { useParams, useReducer, useSearchParams } from "next/navigation"


export default function DetailLink(){
    let roter = useReducer();
    let Pathname = useParams();
    let SearchParameter = useSearchParams();
    
    return(
        <button onClick={roter.back()}>Router</button>
    )
    /*  
        뒤로가기 router.back()
        앞으로가기 router.forward()
        바뀐내용만 새로고침(soft refresh) router.refresh()
        페이지 미리로드 routr.preFetch()

        현재 URL출력 usePathname()

    */
}