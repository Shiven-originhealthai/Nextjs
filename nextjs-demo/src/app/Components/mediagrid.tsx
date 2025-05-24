import Image from "next/image"
import styles from '../mediagrid.module.css'
interface mediaprops {
    stateshare: boolean;
}
export default function Media({ stateshare }: mediaprops) {
    let imagepath: Array<string> = ["/images.png", "/images.png", "/images.png", "/images.png", "/images.png", "/images.png"];
    {console.log(stateshare)}
    return (
        <div>
            {stateshare ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <div className={styles.grid}>
                        {imagepath.map((path: string,index:number) => (
                            <div className="select" key={index}>
                                <Image src="/images.jpeg" alt="" height={340} width={450} className={styles.image} key={index}/>
                                <div className={styles.selectButton}>hi</div>
                            </div>
                            
                        ))}
                    </div>
                </div>
            ) : (<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div className={styles.grid}>
                    {imagepath.map((path: string) => (
                        <Image src="/images.jpeg" alt="" height={340} width={450} className={styles.image} />
                    ))}
                </div>
            </div>)
            }
        </div>
    )
}