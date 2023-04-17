import { useState, useEffect } from "react";
import Image from "next/image";
import { FiBookmark } from 'react-icons/fi'
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const styles = {
    authorContainer: 'flex gap-[.4rem]',
    authorImageContainer: 'grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
    postDetails: 'flex flex-col',
    authorImage: 'object-cover',
    authorName: 'font-semibold',
    title: 'font-bold text-2-xl',
    briefing: 'text-[#787878]',
    detailsContainer: 'flex items-center justify-between text-[#787878]',
    articleDetails: 'my-2 text-[0.8rem]',
    category: 'bg-[#F2F3F2] p-1 rounded-full',
    bookmarkContainer: 'cursor-pointer',
    wrapper: 'flex max-w-[30rem] h-[10rem] items-center gap-[1rem] cursor-pointer justify-between',
    thumbnailContainer: 'flex'
}

const PostCard = ({ post }) => {
    const [authorData, setAuthorData] = useState({});

    useEffect(() => {
        const getAuthorData = async () => {
            const data = await getDoc(doc(db, 'user', post.data.authorEmail))
            setAuthorData({
                ...data._document.data.value.mapValue.fields
            });
        }

        getAuthorData();
    }, [])

    return (
        <Link href={`/post/${post.id}`}>
            <div className={styles.wrapper}>
                <div className={styles.postDetails}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorImageContainer}>
                            <Image
                                // src="https://picsum.photos/200/300"
                                src={authorData.imageurl?.stringValue}
                                className={styles.authorImage}
                                width={40}
                                height={40}
                                alt='author-image'
                            />
                        </div>

                        <div className={styles.authorName}>
                            {post.data.author}
                        </div>
                    </div>

                    <h1 className={styles.title}>{post.data.title}</h1>
                    <div className={styles.briefing}>{post.data.brief}</div>

                    <div className={styles.detailsContainer}>
                        <span className={styles.articleDetails}>{new Date(post.data.postedOn).toLocaleString('en-US', {
                            day: 'numeric',
                            month: 'short'
                        })} • {post.data.postLength} min read • <span className={styles.category}>{post.data.category}</span></span>
                        <span className={styles.bookmarkContainer}>
                            <FiBookmark className="h-5 w-5" />
                        </span>
                    </div>
                </div>

                <div className={styles.thumbnailContainer}>
                    <Image
                        src={post.data.bannerImage}
                        height={100}
                        width={100}
                        alt='thumbnail'
                    />
                </div>
            </div>
        </Link>
    )
}

export default PostCard