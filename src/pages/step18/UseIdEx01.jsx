
// useId 는 클라이언트와 서버 렌더링 환경에서 고유한 ID를 생성
// 이 ID는 컴포넌트 간 중복되지 않으며, 접근성을 위해 label과 input 쌍을 연결할 때  사용

import { useEffect, useId, useRef } from "react"

// 형식) const id = useId()
export default function UseIdEx01(){
    const id = useId();
  //  const age = useId();

 //   const nameRef = useRef();
  //  const ageRef = useRef();
    useEffect(()=>{
        // 가져올수없음
        // const element = document.querySelector("#id");
        // console.log(element);

        // useRef로 가져올수 있음
        //  const element = nameRef.current;
        //  console.log(element);

        // const element2 = ageRef.current;
        // console.log(element2);
    },[])
    return(
        <div>
            {/*  하나일때 
            <label htmlFor={id}>이름 : </label>
            <input id={id} ref={inputRef}/> */}

            {/* 여러개 일때  */}
            {/* <label htmlFor={id}>이름 : </label>
            <input id={id} ref={nameRef}/>

            <label htmlFor={age}>나이 : </label>
            <input id={age} ref={ageRef}/> */}

            <label htmlFor={`${id}-name`}>이름 : </label>
            <input id={`${id}-name`}  />

            <label htmlFor={`${id}-age`}>나이 : </label>
            <input id={`${id}-age`}  />
        </div>
    )
}