import { FaUserTie } from "react-icons/fa";
import "./HireMeFloat.css"
function HireMeFloat() {
    return(
        <a
            href="mailto:justderinoduwole@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hireMeFloat"
        >
            <FaUserTie size={30} />
        </a>
    );
}

export default HireMeFloat;