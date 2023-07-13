import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp({
	apiKey: "AIzaSyC-FkOiL16DzMtsvZUDr4gic9DKXIwz9Mg",
	authDomain: "liteflix-7359f.firebaseapp.com",
	projectId: "liteflix-7359f",
	storageBucket: "liteflix-7359f.appspot.com",
	messagingSenderId: "637571163143",
	appId: "1:637571163143:web:eb211f469d6bef5160f6a2",
	measurementId: "G-4L3XJ8S3XG"
})

export const firestore = getFirestore(firebaseApp)
export const analytics = getAnalytics(firebaseApp)
export const storage = getStorage(firebaseApp)