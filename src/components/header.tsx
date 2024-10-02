import Link from "next/link";

function Header() {
    return(
       <div className="header">
        <ul className="header-button">
          
           <Link href={"/"}> <li>portfolio</li></Link>
          <Link href={"/about"}>  <li>About</li> </Link>
          <Link href={"/job"}>  <li>Job</li> </Link>
          <Link href={"/contact"}> <li>Contact</li> </Link>
        </ul>
       </div>
    )
}


export default Header;