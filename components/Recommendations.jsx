import react from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import ReplitLogo from '../public/static/replit.png'
import TutorialImg from '../public/static/tutorial.jpg'
import CPLogo from '../public/static/cp.png'
import Logo from '../public/static/qazi.jpg'
import JSLogo from '../public/static/jsLogo.png'
import Image from "next/image";

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
    recommendationProfileImageContainer: 'rounded-full overflow-hidden h-[1.4.rem] w-[1.4rem]',
    recommendationAuthorName: 'text-sm',
    recommendationAuthorContainer: 'flex items-center gap-[.6rem]',
    recommendationTitle: 'font-bold',
    recommendationThumbnailContainer: 'flex flex-1 items-center justify-center h-[4rem] w-4[rem]',
    recommendationThumbnail: 'object-cover',
    articleContentWrapper: 'flex items-center justify-between cursor-pointer my-[1rem]',
    articleContent: 'flex-[4]'
}

const Recommendations = () => {
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
                        src={Logo}
                        width={100}
                        height={100}
                        alt='profile-image'
                    />
                </div>

                <div className={styles.authorName}>Asish Mahapatra</div>
                <div className={styles.authorFollowing}>1M followers</div>
                <div className={styles.authorActions}>
                    <button className={styles.actionButton}>Follow</button>
                    <button className={styles.actionButton}><MdMarkEmailUnread /></button>
                </div>
            </div>

            <div className={styles.recommendationContainer}>
                <div>More from Medium</div>
                <div className={styles.articlesContainer}>
                    <div className={styles.articleContentWrapper}>
                        <div className={styles.articleContent}>
                            <div className={styles.recommendationAuthorContainer}>
                                <div className={styles.recommendationProfileImageContainer}>
                                    <Image src={Logo} height={100} width={100} alt='article-image' />
                                </div>
                                <div className={styles.recommendationAuthorName}>
                                    Asish Mahapatra
                                </div>
                            </div>
                            <div className={styles.recommendationTitle}>
                                The Ultimate Terminal Tutorial for Beginners
                            </div>
                        </div>

                        <div className={styles.recommendationThumbnailContainer}>
                            <Image className={styles.recommendationThumbnail} src={JSLogo} height={100} width={100} alt='article-image' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommendations