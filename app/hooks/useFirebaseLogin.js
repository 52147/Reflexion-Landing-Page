// app/hooks/useFirebaseLogin.js
"use client";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, provider, db } from "../lib/firebase";
import { useRouter } from "next/navigation";

export default function useFirebaseLogin() {
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Firestore 儲存資料（如果還沒寫過才寫）
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

      router.push("/thank-you"); // 登入成功後導向
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return loginWithGoogle;
}