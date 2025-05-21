import Image from "next/image"
export default function share(){
    let imagepath: Array<string> = ["apple", "banana", "cherry"];
    return (
        <div>
            <div className="grid">
                {imagepath.map((path:string)=>(
                        <p id="p">{path}</p>
                ))}
            </div>
        </div>
    )
}