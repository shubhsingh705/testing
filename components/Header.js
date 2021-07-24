import react from "react"
import styles from "../styles.css"

function Header(){
    const date=new Date();
    const hours=date.getHours();
    let Time;

    if(hours<12) Time='Morning';
    else if(hours>12 && hours<17) Time='Afternoon';
    else Time='Evining'; 


    return(
        <div>
            <navbar>
                <h2 className="Navbar">Good {Time} Boss!</h2>
            </navbar>
        </div>
    )
}

export default Header;