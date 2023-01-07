import react from "react";
import ReadersNav from "../../components/ReadersNav";
import Recommendations from "../../components/Recommendations";

const styles = {
    content: 'flex'
}

const Post = () => {
    return (
        <div className={styles.content}>
            <ReadersNav />
            <div>Main Article Area</div>
            <Recommendations />
        </div>
    )
}

export default Post