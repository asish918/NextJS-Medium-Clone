import { useContext, useEffect, useState } from "react";
import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReadersNav";
import Recommendations from "../../components/Recommendations";
import { MediumContext } from "../../context/MediumContext";
import { useRouter } from "next/router";

const styles = {
    content: 'flex'
}

const Post = () => {
    const { posts, users } = useContext(MediumContext);
    const [post, setPost] = useState({});
    const [author, setAuthor] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (posts.length === 0)
        return;

        let data = posts.find(element => element.id === router.query.slug);
        setPost(data);

        data = users.find(user => user.id === post.data?.authorEmail)
        setAuthor(data);

    }, [post])

    return (
        <div className={styles.content}>
            <ReadersNav />
            <ArticleMain post={post} author={author} />
            <Recommendations />
        </div>
    )
}

export default Post