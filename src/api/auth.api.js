import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const signupAPI = async(values) => {
    const { email, password } = values;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // Signed in
        const user = userCredential.user;
        console.log('User signed up:', user);

        // Send email verification
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('Email verification sent!');
            })
            .catch((error) => {
                console.error('Error sending email verification:', error);
            });

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error('Error signing up:', errorCode, errorMessage);
    }
};

export const loginAPI = (values) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, values.email, values.phone)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user.emailVerified) {
                    resolve({ massege: 'login sucsecfuly' });
                    // localStorage.setItem("loginstatus", 'true');
                    // navigate('/')
                } else {
                    reject({ massege: 'noo' });
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode, '5555');

                if (errorCode.localeCompare("auth/wrong-password") === 0) {
                    reject("wrong password")
                }
            });
    }) 
}