import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappFloat.css";
function WhatsappFloat() {
    return(
        <a
            href="https://wa.me/+2349011071916"
            target="_blank"
            className="whatsapp-float"
            rel="noopener noreferrer"
        >
            <FaWhatsapp size={30} />
        </a>
    );
}

export default WhatsappFloat;