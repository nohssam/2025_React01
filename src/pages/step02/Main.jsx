import List01 from "../step03/List01";
import List02 from "../step03/List02";
import Profile from "../step03/Profile";
import CommentList from "../step04/CommentList";
import FilteredCommandList2 from "../step05/FilteredCommandList2";
import FilteredCommandList from "../step05/FilteredCommentList";
import FindAdminComment from "../step05/FindAdminComment";
import FindAdminComment2 from "../step05/FindAdminComment2";
import ReduceComment from "../step05/ReduceComment";
import SomeEveryCheck from "../step05/SomeEveryCheck";
import IfExam01 from "../step06/IfExam01";
import IfExam02List from "../step06/IfExam02List";
import TextList1 from "../step07/TextList1";
import TextList2 from "../step07/TextList2";
import Event01 from "../step08/Event01";
import Event02 from "../step08/Event02";
import Event03 from "../step08/Event03";
import Event04 from "../step08/Event04";
import InputExam from "../step09/InputExam";
// import CountEx from "../step10/CountEx";
import CountEx2 from "../step10/CountEx2";
import CountEx3 from "../step10/CountEx3";
import CountEx4 from "../step10/CountEx4";
import CountEx5 from "../step10/CountEx5";
import ProfileEx from "../step11/ProfileEx";
import TempEx from "../step12/TempEx";
import Counter from "./Counter";

function Main(props){
    return(
        // 태그의 첫글자가 소문자이면 일반적인 html 태그, 대문자이면 컴포넌트
        <main>
            <h1>WelComa React</h1>
            <Counter />
            <List01 />
            <List02 />
            <Profile />
            <CommentList />
            <FilteredCommandList />
            <FilteredCommandList2 />
            <FindAdminComment />
            <FindAdminComment2 />
            <ReduceComment />
            <SomeEveryCheck />
            <IfExam01 />
            <IfExam02List />
            <TextList1 />
            <TextList2 />
            <Event01 />
            <Event02 />
            <Event03 />
            <Event04 />
            <InputExam />
            <CountEx2 />
            <CountEx3 />
            <CountEx4 />
            <CountEx5 />
            <ProfileEx />
            <TempEx />
        </main>
    );
};

export default Main;