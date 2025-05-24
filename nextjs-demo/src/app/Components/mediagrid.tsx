import Image from "next/image";
import styles from "../mediagrid.module.css";
import { useState } from "react";

interface MediaProps {
  stateshare: boolean;
}

export default function Media({ stateshare }: MediaProps) {
  const imagePaths: string[] = Array(6).fill("/images.jpeg");

  const [selectedIndexes, setSelectedIndexes] = useState<Set<number>>(new Set());

  const toggleSelect = (index: number) => {
    setSelectedIndexes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="mainContainer">
      <div className={styles.grid}>
        {imagePaths.map((path, index) => (
          <div className={styles.select} key={index}>
            <Image
              src={path}
              alt={`Image ${index}`}
              height={340}
              width={450}
              className={styles.image}
              onClick={() => toggleSelect(index)}
            />
            {stateshare && (
              <div
                className={`${styles.selectButton} ${
                  selectedIndexes.has(index) ? styles.selected : ""
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}