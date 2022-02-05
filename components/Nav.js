import navStyles from "../styles/nav.module.css"
import Link from "next/link"

function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
