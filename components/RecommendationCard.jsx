import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Image from "next/image";

const styles = {
    recommendationProfileImageContainer: 'rounded-full overflow-hidden h-[1.4.rem] w-[1.4rem]',
    recommendationAuthorName: 'text-sm',
    recommendationAuthorContainer: 'flex items-center gap-[.6rem]',
    recommendationTitle: 'font-bold',
    recommendationThumbnailContainer: 'flex flex-1 items-center justify-center h-[4rem] w-4[rem]',
    recommendationThumbnail: 'object-cover w-[3rem] h-[3rem]',
    articleContentWrapper: 'flex items-center justify-between cursor-pointer my-[1rem]',
    articleContent: 'flex-[4]'
}

const RecommendationCard = ({ post }) => {
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

    console.log(authorData);

    return (
        <>
            <div className={styles.articleContentWrapper}>
                <div className={styles.articleContent}>
                    <div className={styles.recommendationAuthorContainer}>
                        <div className={styles.recommendationProfileImageContainer}>
                            <Image src={authorData?.imageurl?.stringValue} height={100} width={100} alt='article-image' />
                        </div>
                        <div className={styles.recommendationAuthorName}>
                            {authorData?.name?.stringValue}
                        </div>
                    </div>
                    <div className={styles.recommendationTitle}>
                        {post.data.title}
                    </div>
                </div>

                <div className={styles.recommendationThumbnailContainer}>
                    <Image className={styles.recommendationThumbnail} src={post.data.bannerImage} height={100} width={100} alt='article-image' />
                </div>
            </div>
        </>
    )
}

export default RecommendationCard;