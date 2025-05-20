import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function Page(){
    return(
        <div className="page">
           <Header  />
           <Main />
           <Footer />
        </div>
    )
}