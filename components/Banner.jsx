import Image from "next/image";
import react from "react";
import Logo from '../public/static/banner.png'

const styles = {
    content: 'max-w-7xl flex items-center justify-between',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
    wrapper: 'h-max-[10rem] flex items-centet justify-center bg-[#FCC017] border-y border-black'
}

const Banner = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className="space-y-5 p-10 flex-[3]">
                    <h1 className="max-w-xl text-[6rem] font-mediumSerif">Stay Curious.</h1>

                    <h3 className="text-2xl">Discover stories, thinking, and expertise from writers on any topic.</h3>

                    <button className={styles.accentedButton}>Start Reading</button>
                </div>

                <Image
                    className="hidden p-5 md:inline-flex object-contain"
                    src={Logo}
                    width={500}
                    height={400}
                    alt="banner-image"
                />

            </div>
        </div>
    )
}

export default Banner