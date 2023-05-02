"use client";

import { sortPostsByDateAsc, sortPostsByDateDsc } from "@/app/utils/sort";
import { useContext, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types";
import Select from "../Select/Select";
import { ThemeContext } from "@/app/contexts/ThemeContext";
import { posts } from "../../../data/posts";
import styles from "./MainSection.module.scss";

const MainSection = () => {
  const [sortedPosts, setSortedPosts] = useState<Post[]>(posts);
  const { theme } = useContext(ThemeContext);

  const handleSortChange = (selectedValue: string) => {
    if (selectedValue === "byDateAsc") {
      setSortedPosts(sortPostsByDateAsc(posts));
    } else if (selectedValue === "byDateDsc") {
      setSortedPosts(sortPostsByDateDsc(posts));
    }
  };

  return (
    <section className={styles.wrapper}>
      <Select handleSortChange={handleSortChange} />
      <div className={styles.container}>
        {sortedPosts.map((post) => (
          <article key={post.id}>
            <Link href={`/${post.id}`}>
              <div className={styles.container__imageWrapper}>
                <Image
                  src={post.imageUrl}
                  alt="atmospheric nature"
                  className={`${styles.container__image} ${
                    theme === "light"
                      ? styles.container__sun
                      : styles.container__moon
                  }`}
                  width={400}
                  height={300}
                  priority
                />
              </div>
              <h2 className={styles.container__title}>{post.title}</h2>
              <p className={styles.container__description}>
                {post.description}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MainSection;
