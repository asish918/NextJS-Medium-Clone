import { createContext, useState, useEffect } from 'react'
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'

const MediumContext = createContext()

const MediumProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

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

    return (
        <MediumContext.Provider
            value={{ posts, users }}>
            {children}
        </MediumContext.Provider>
    )
}

export { MediumContext, MediumProvider }