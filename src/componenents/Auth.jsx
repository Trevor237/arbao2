import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../services/firebase";

export default function Auth() {
  // Connexion Google
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Erreur de connexion :", error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Connexion avec Google</button>
      <button onClick={() => signOut(auth)}>Déconnexion</button>
    </div>
  );
}