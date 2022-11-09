
import { useEffect } from 'react';
const useTitle=(title)=>{
    useEffect(()=>{
        document.title = `${title}-KRUTON`;
    },[title])
}

export default useTitle;