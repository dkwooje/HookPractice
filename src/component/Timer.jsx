import { useEffect } from "react"

export default function Timer(props){

    useEffect(()=>{
        const timer = setInterval(() => {
            console.log('타이머 돌아가는중...');
        }, 1000);

        return () => {
             clearInterval(timer);
             console.log('타이머가 종료되었습니다');
        }
 //리턴값이 있어야 종료할 수 있다.
    }, [])

    return(
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!</span>
        </div>
    );
}