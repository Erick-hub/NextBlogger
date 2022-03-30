import PostContent from "../../components/PostContent";
import { firestore, getUserWithUsername, postToJSON } from "../../lib/firebase";

export async function getStaticProps({ param }) {
  const { username, slug } = params;
  const userDoc = await getUserWithUsername(username);
  let post;
  let path;

  if (username) {
    const postRef = userDoc.ref.collections("posts").doc(slug);
    post = postToJSON(await postRef.get());
    path = postRef.path;

    return {
      props: { post, path },
      revalidate: 5000,
    };
  }
}

export async function getStaticPaths() {
  const snapshot = await firestore.collectionGroup("posts").get();

  const paths = snapshot.docs.map((doc) => {
    const { username, slug } = doc.data();
    return {
      params: { username, slug },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export default function PostPage({}) {
  return (
    <main>
      <h1>User Profile</h1>
    </main>
  );
}

// export default function Post(props){
//   const postRef=firestore.doc(props.path);
//   const [realtimePost]= useDocumentData(postRef);

//   const post= realtimePost || props.post;

//   return(
//     <main className={styles.container}>
//       <section>
//         <PostContent post={post}/>
//       </section>
//       <aside className="card">

//         <p>
//           <strong>{post.heartCount || 0}🤍</strong>
//         </p>

//       </aside>
// //     </main>
// //   )
// }
