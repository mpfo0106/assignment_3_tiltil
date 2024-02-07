import { PostInList } from "./posts.response";

const endpoint = `https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const getAllPosts = async (): Promise<PostInList[]> => {
  const response = await fetch(endpoint, options);
  const data: PostInList[] = await response.json();
  return data;
};

const postsAPI = {
  getAllPosts,
};

export default postsAPI;
