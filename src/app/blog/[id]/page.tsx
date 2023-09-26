import React from 'react';
import styles from "./page.module.css";
import Image from "next/image";
import {Metadata} from "next";

async function getData(id: any) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return await res.json();
}

export async function generateMetadata({ params }: any){
    const post = await getData(params.id)
    return {
        title: post.result.title,
        description: post.result.desc,
    };
}

const BlogId = async ({ params }: any) => {
    const data = await getData(params.id);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.result.title}</h1>
                    <p className={styles.desc}>{data.result.desc}</p>
                    <div className={styles.author}>
                        <Image
                            src={data.result.img}
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>{data.result.username}</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={data.result.img} alt="" fill={true} className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>{data.result.content}</p>
            </div>
        </div>
    );
};

export default BlogId;