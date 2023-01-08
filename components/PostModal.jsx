import react from "react";

const styles = {
    wrapper: 'w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll',
    title: 'my-[2rem] font-bold text-3xl',
    smallField: 'w-full flex justify-between gap-[1rem]',
    fieldTitle: 'flex-1 text-end',
    inputContainer: 'flex-[5] h-min border-2 border-[#787878] rounded-lg',
    inputField: 'w-full border-0 outline-none bg-transparent'
}

const PostModal = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Create a New Post</div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Title</span>
                <span className={styles.inputContainer}>
                    <input
                        className={styles.inputField}
                        type="text"
                    // value={title} 
                    />
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Brief</span>
                <span className={styles.inputContainer}>
                    <input
                        className={styles.inputField}
                        type="text"
                    // value={title} 
                    />
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Banner Image URL</span>
                <span className={styles.inputContainer}>
                    <input
                        className={styles.inputField}
                        type="text"
                    // value={title} 
                    />
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Category</span>
                <span className={styles.inputContainer}>
                    <input
                        className={styles.inputField}
                        type="text"
                    // value={title} 
                    />
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Estimated Read Length (in minutes)</span>
                <span className={styles.inputContainer}>
                    <input
                        className={styles.inputField}
                        type="text"
                    // value={title} 
                    />
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Article Text</span>
                <span className={styles.inputContainer}>
                    <textarea
                        className={styles.inputField}
                        type="text"
                        rows={12}
                    // value={title} 
                    />
                </span>
            </div>
        </div>
    )
}

export default PostModal