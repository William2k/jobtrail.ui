import Link from "next/link";
import styles from "./nav.module.css";

const Nav = () => {
    return (
        <div className={styles.container}>
            <Link href={`/account/sign-in`}>
                <a>Sign In</a>
            </Link>
            <Link href={`/account/sign-up`}>
                <a>Sign Up</a>
            </Link>
        </div>
      )
}

export default Nav;