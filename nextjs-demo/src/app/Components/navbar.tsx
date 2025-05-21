'use client'
import style from  '../navbar.module.css';
import { useRouter } from "next/navigation"
export default function Navbar(){
    const route = useRouter();
    function Direct(){
        console.log('clicked');
    }
    return( 
        <div>
            <nav className={style.navbar}>
                <button className={style.share} onClick={Direct}>Share</button>
            </nav>
        </div>
    )
}