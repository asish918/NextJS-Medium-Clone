import react from "react";
import SmallLogo from '../public/static/smallLogo.png'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import Logo from '../public/static/qazi.jpg'
import Image from "next/image";
import Link from "next/link";
import { MediumContext } from '../context/MediumContext'
import { useContext } from 'react'

const styles = {
    logoContainer: 'cursor-pointer',
    wrapper: 'w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]',
    iconsContainer: 'flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]',
    divider: 'border-b',
    profileImage: 'object-cover',
    profileImageContainer: 'w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center'
}

const ReadersNav = () => {
    const { currentUser } = useContext(MediumContext);
    console.log(currentUser);
    return (
        <>
            <div className={styles.wrapper}>
                <Link href='/'>
                    <div className={styles.logoContainer}>
                        <Image
                            src={SmallLogo}
                            alt='small-logo'
                        />
                    </div>
                </Link>

                <div className={styles.iconsContainer}>
                    <HiOutlineHome />
                    <FiBell />
                    <BiBookmarks />
                    <RiArticleLine />
                    <div className={styles.divider} />
                    <BsPencilSquare />
                </div>

                <div className={styles.profileImageContainer}>
                    <Image
                        className={styles.profileImage}
                        src={currentUser?.imageUrl || "https://picsum.photos/200/200"}
                        alt='profile-img'
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </>
    )
}

export default ReadersNav