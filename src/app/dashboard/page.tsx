"use client"
import styles from "./page.module.css";
import {useState, useEffect} from "react";
import useSWR from "swr";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";


const Dashboard = () => {
    /*const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);*/

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

    const session = useSession();
    const router = useRouter();

    // @ts-ignore
    const fetcher = (...args: any) => fetch(...args).then(res => res.json());

    const {data, error, isLoading} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);


    if (session.status == "loading"){
        return <p>Loading</p>
    }
    if (session.status == "unauthenticated"){
        router?.push("/dashboard/login")
    }

    return (
        <div className={styles.container}>Dashboard</div>
    );
};

export default Dashboard;