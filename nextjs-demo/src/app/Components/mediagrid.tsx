import Image from "next/image"
import styles from '../mediagrid.module.css'
import { useState } from "react";
interface mediaprops {
    stateshare: boolean;
}
export default function Media({ stateshare }: mediaprops) {
    let imagepath: Array<string> = ["/images.jpeg", "/images.jpeg", "/images.jpeg", "/images.jpeg", "/images.jpeg", "/images.jpeg"];
    let [selectedImages,setselectedImages] = useState<Array<string>>([]);
    let [color,setcolor] = useState<Boolean>(false);
    function colored(){
        setcolor(true);
    }
    /*function selected(index:number):[]{
        setselectedImages();
        return selectedImages;

    }*/
   {console.log(color)}
    return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div className={styles.grid}>
                    {imagepath.map((path, index) => (
                        <div className={styles.select} key={index}>
                            <Image
                                src={path}
                                alt={`Image ${index}`}
                                height={340}
                                width={450}
                                className={styles.image}
                                onClick={colored}
    
                            />
                            {stateshare && (
                                <div className={color ? styles.blank : styles.selectButton}></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
    )
}