import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import styles from './News.module.css';  // Use import with 'styles' alias

export default function News() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8694270663f849698c2d5766c116343d");
            const response = await data.json();
            setData(response.articles);
        }
        fetchData();
    }, []);

    return (
        <>
            <div className={styles.main}>  {/* Use the 'styles' object to reference the class */}
                <ul className={styles.container}>  {/* Use the 'styles' object to reference the class */}
                    {data.map((item, index) => (
                        <Newsitem key={index} title={item.title} description={item.description}
                            img={item.urlToImage} url={item.url} />
                    ))}
                </ul>
            </div>
        </>
    );
}
