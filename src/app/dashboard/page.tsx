"use client"
import styles from "./page.module.css";
import {useState, useEffect} from "react";


const Dashboard = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    /*useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                cache: "no-store",
            });

            if (!res.ok) {
                setError(true);
            }

            const data = await res.json();
            setData(data as any);
            setIsLoading(false)
        };
        getData();
    }, []);

    console.log(data);*/

    const fetcher = (...args: any) => fetch(...args).then(res => res.json());

    return (
        <div className={styles.container}></div>
    );
};

export default Dashboard;