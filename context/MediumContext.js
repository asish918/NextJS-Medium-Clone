import { createContext, useState, useEffect } from 'react'
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { db, auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

const MediumContext = createContext()

const MediumProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'user'))

            setUsers(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        email: doc._document.data.value.mapValue.fields.email.stringValue,
                        followerCount: doc._document.data.value.mapValue.fields.followerCount.stringValue,
                        imageurl: doc._document.data.value.mapValue.fields.imageurl.stringValue,
                        name: doc._document.data.value.mapValue.fields.name.stringValue,
                    }
                }
            }));
        }

        getUsers();
    }, [])

    useEffect(() => {
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, 'articles'));

            setPosts(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        author: doc._document.data.value.mapValue.fields.author.stringValue,
                        authorEmail: doc._document.data.value.mapValue.fields.authorEmail.stringValue,
                        bannerImage: doc._document.data.value.mapValue.fields.bannerImage.stringValue,
                        body: doc._document.data.value.mapValue.fields.body.stringValue,
                        brief: doc._document.data.value.mapValue.fields.brief.stringValue,
                        category: doc._document.data.value.mapValue.fields.category.stringValue,
                        postLength: doc._document.data.value.mapValue.fields.postLength.stringValue,
                        postedOn: doc._document.data.value.mapValue.fields.postedOn.timestampValue,
                        title: doc._document.data.value.mapValue.fields.title.stringValue,
                    }
                }
            }));
        }

        getPosts();
    }, [])

    const addUserToFirebase = async (user) => {
        await setDoc(doc(db, 'user', user.email), {
            email: user.email,
            name: user.name,
            imageurl: user.imageUrl,
            followerCount: 0
        })
    };

    const handleUserAuth = async () => {
        const userData = await signInWithPopup(auth, provider)
        const user = {
            name: userData.user.displayName,
            email: userData.user.email,
            imageUrl: userData.user.photoURL
        }

        setCurrentUser(user);
        addUserToFirebase(user);
    };

    return (
        <MediumContext.Provider
            value={{ posts, users, handleUserAuth, currentUser }}>
            {children}
        </MediumContext.Provider>
    )
}

export { MediumContext, MediumProvider }