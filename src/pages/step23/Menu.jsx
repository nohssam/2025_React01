import { Link } from "react-router-dom";

export default function Menu(){
    return(
       <nav>
        <ul>
            <li>
                <Link>홈</Link>
            </li>
            <li><Link>첫번째</Link></li> 
            <li><Link>두번째</Link></li>  
            <li><Link>세번째</Link></li> 
        </ul>
       </nav> 
    )
}