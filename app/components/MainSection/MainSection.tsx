import Image from "next/image";
import { posts } from "../../../data/posts";
import styles from "./MainSection.module.scss";

const MainSection = () => {
  return (
    <main className={styles.container}>
      {posts.map((post) => (
        <section key={post.id}>
          <div className={styles.container__imageWrapper}>
            <Image
              src={post.imageUrl}
              alt="atmospheric nature"
              className={styles.container__image}
              width={400}
              height={300}
              priority
            />
          </div>
          <h2 className={styles.container__title}>{post.title}</h2>
          <p className={styles.container__description}>{post.description}</p>
        </section>
      ))}
    </main>
  );
};

export default MainSection;
