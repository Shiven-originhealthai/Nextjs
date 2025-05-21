import Image from "next/image"
import styles from '../mediagrid.module.css'
export default function Media(){
    let imagepath: Array<string> = ["/images.png", "/images.png", "/images.png","/images.png", "/images.png", "/images.png"];
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <div className={styles.grid}>
                {imagepath.map((path:string)=>(
                        <Image src="/images.jpeg" alt="" height={330} width={460} className={styles.image}/>
                ))}
            </div>
        </div>
    )
}