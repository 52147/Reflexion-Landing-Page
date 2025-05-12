"use client";
import { auth, provider, db } from "../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function LoginButton() {
    const router = useRouter(); // 🚨 這裡會觸發 Invalid Hook Call

    const handleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
    
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
    
          if (!userSnap.exists()) {
            await setDoc(userRef, {
              email: user.email,
              displayName: user.displayName,
              uid: user.uid,
              createdAt: new Date(),
            });
          }
    
          router.push("/thank-you");
        } catch (error) {
          console.error("Login error", error);
        }
      };

  return (
    <button onClick={handleLogin} className="rounded-xl bg-[#707B9E] px-5 py-3 text-white hover:bg-[#5f6988]">
      Sign in with Google
    </button>
  );
}