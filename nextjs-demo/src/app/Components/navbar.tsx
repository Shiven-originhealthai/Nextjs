'use client'
import style from '../navbar.module.css';
import { useState } from 'react';
import { useRouter } from "next/navigation"
import Media from './mediagrid';
export default function Navbar() {
    const route = useRouter();
    const [state, setState] = useState<boolean>(false);
    function Direct() {
        console.log('clicked');
        setState(true);
    }
    return (
        <div>
            <nav className={style.navbar}>
                <button className={style.share} onClick={Direct}>Share</button>
            </nav>
            <Media stateshare={state}/>
        </div>
    )
}