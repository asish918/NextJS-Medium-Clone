import {useContext} from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'

import Image from "next/image";
import { MediumContext } from '../context/MediumContext'
import RecommendationCard from "./RecommendationCard";

const styles = {
    wrapper: 'h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]',
    accentedButton: 'flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full cursor-pointer',
    searchBar: 'flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full',
    searchInput: 'border-none outline-none bg-none w-full',
    authorContainer: 'my-[2rem]',
    authorImageContainer: 'h-[5rem] w-[5rem] rounded-full overflow-hidden',
    authorName: 'font-semibold mb-[.2rem[ mt-[1rem]',
    authorFollowing: 'text-[#787878]',
    authorActions: 'flex gap-[.6rem] my-[1rem]',
    actionButton: 'bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm',
    articleContent: 'flex-[4]'
}

const Recommendations = ({ author }) => {
    const { posts } = useContext(MediumContext);

    return (
        <div className={styles.wrapper}>
            <div className={styles.accentedButton}>
                Get unlimited access
            </div>
            <div className={styles.searchBar}>
                <AiOutlineSearch />
                <input className={styles.searchInput} type="text" placeholder="Search..." />
            </div>

            <div className={styles.authorContainer}>
                <div className={styles.authorImageContainer}>
                    <Image
                        src={author?.data?.imageurl}
                        width={100}
                        height={100}
                        alt='profile-image'
                    />
                </div>

                <div className={styles.authorName}>{author?.data?.name}</div>
                <div className={styles.authorFollowing}>{author?.data?.followerCount ? author?.data?.followerCount : 0}M followers</div>
                <div className={styles.authorActions}>
                    <button className={styles.actionButton}>Follow</button>
                    <button className={styles.actionButton}><MdMarkEmailUnread /></button>
                </div>
            </div>

            <div className={styles.recommendationContainer}>
                <div>More from Medium</div>
                <div className={styles.articlesContainer}>
                    {posts.map((post, index) => (
                        <RecommendationCard post={post} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Recommendations