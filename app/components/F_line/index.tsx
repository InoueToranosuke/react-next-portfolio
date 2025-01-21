"use client"; // この行を追加

import React, { useEffect, useState, useRef } from "react";
import styles from "./index.module.css";

export default function F_line() {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={barRef}
        className={`${styles.bar} ${isVisible ? styles.animate : ""}`}
      ></div>
    </div>
  );
}
