export type PostInList = {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
};

export type PostsResponse = PostInList[];
