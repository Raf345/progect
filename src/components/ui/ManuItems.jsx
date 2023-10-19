import {List} from "react-router-dom"

export default finction MenuItems () {
    return(
        <ul>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>

    )
}