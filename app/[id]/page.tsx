import { posts } from "../../data/posts";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({ params: { id } }: Props) => {
  const post = posts.find((post) => post.id.toString() === id);
  return {
    title: `${post?.title}`,
  };
};

const PostPage = ({ params: { id } }: Props) => {
  const post = posts.find((post) => post.id.toString() === id);
  return <div>{post?.title}</div>;
};

export default PostPage;

export const generateStaticParams = () => {
  return posts.map((post) => ({ id: post.id.toString() }));
};
