import { Post } from "@/types";

export const sortPostsByDateAsc = (arr: Post[]) => {
  const sortedPosts = [...arr].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA - dateB;
  });
  return sortedPosts;
};

export const sortPostsByDateDsc = (arr: Post[]) => {
  const sortedPosts = [...arr].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
  return sortedPosts;
};
