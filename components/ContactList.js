import react from "react"
import Image from "../me.jpg"

function ContactList(props){
    return(
        <div>
            <img src={Image} height="100" width="100" />
            <h3>{props.contact.name}</h3>
            <h3>{props.contact.profession}</h3>
        </div>
    )
}

export default ContactList;