import Image from "next/image";
import react from "react";
import Logo from '../public/static/qazi.jpg'
import Banner from '../public/static/banner.png'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { HiOutlineLink } from 'react-icons/hi'
import { BiBookmarks } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'

const styles = {
    wrapper: 'flex items-center justify-center flex-[3] border-l border-r',
    content: 'h-screen w-full p-[2rem]',
    postHeaderContainer: 'flex justify-between items-center mt-[2.2rem] mb-[1.2rem]',
    authorContainer: 'flex gap-[1rem]',
    authorProfileImageContainer: 'h-[3rem] w-[3rem] grid center rounded-full overflow-hidden',
    column: 'flex-1 flex flex-col justify-center',
    postDetails: 'flex gap-[.2rem] text-[#787878]',
    listenButton: 'flex items-center gap-[.2rem] text-[#1A8917]',
    socials: 'flex gap-[1rem] text-[#787878] cursor-pointer',
    bannerContainer: 'h-[18rem] w-full grid center overflow-hidden mb-[2rem]',
    articleMainContainer: 'flex flex-col gap-[1rem]',
    image: 'object-cover',
    title: 'font-bold text-3xl',
    subtitle: 'font-mediumSerifItalic text-[1.4rem] text-[#292929]',
    articleText: 'font-mediumSerif text-[1.4rem] text-[#292929]'
}

const ArticleMain = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.postHeaderContainer}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorProfileImageContainer}>
                            <Image
                                src={Logo}
                                className='object-cover'
                                height={100}
                                width={100}
                                alt='authorprofileimage'
                            />
                        </div>
                        <div className={styles.column}>
                            <div>Asish Mahapatra</div>
                            <div className={styles.postDetails}>
                                <span>Jan 7 • 7 min read • </span>
                                <span className={styles.listenButton}>
                                    <AiFillPlayCircle /> Listen
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <IoLogoTwitter />
                        <FaFacebook />
                        <GrLinkedin />
                        <HiOutlineLink />
                        <div className="w-[.5rem]" />
                        <BiBookmarks />
                        <FiMoreHorizontal />
                    </div>
                </div>

                <div className={styles.articleMainContainer}>
                    <div className={styles.bannerContainer}>
                        <Image
                            className={styles.image}
                            src={Banner}
                            alt='bannerimg'
                        />
                    </div>

                    <h1 className={styles.title}>7 Tricks That Will Make You More Productive In 2023</h1>
                    <h4 className={styles.subtitle}>
                        <div>
                            Asish Mahapatra, Jan 15 2023
                        </div>
                        <div>Brief: Productivity is a skill that can be learned.</div>
                    </h4>
                    <div className={styles.articleText}>
                        I love being productive every day as it helps me sort out all my
                        priorities very quickly. Being Productive is a superpower we all must acquire early in our lives.
                        So, for this same quest, I keep searching for some of the best Productive tools
                        that will help me to stay productive all day long. So, here I have curated some of the best
                        Productive Tools that will also make you more productive so that you can achieve most of the day very easily.
                        Let&apos;s get started.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleMain