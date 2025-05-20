import { createContext } from "react";

// Context 생성
// 컴포넌트 계층 구조 전체에서 데이터를 전달할때, 여러 단계의 props 전달을 피하기 위한 방법
// 상위에서 하위 컴포넌트로 데이터를 전달할때, props를 사용하지 않고 공유하는 방법
// 주요 사용 : 테마, 사용자 인증, 다국어 지원
// 단점 : Context 값이 변경되면, 모든 하위 컴포넌트가 리 렌더링이 되어야 한다.
//       복잡한 상태 관리하는데 부적절, 디버깅이 어렵다. 

export const ThemeContext = createContext(null);