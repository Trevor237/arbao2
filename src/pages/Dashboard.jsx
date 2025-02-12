import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  // Charger les posts depuis Firestore
  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  // Ajouter un post
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "posts"), {
      content: newPost,
      createdAt: new Date(),
    });
    setNewPost("");
  };

  return (
    <div>
      <h1>Tableau de bord</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button type="submit">Publier</button>
      </form>
      <div>
        {posts.map(post => (
          <div key={post.id}>{post.content}</div>
        ))}
      </div>
    </div>
  );
}