import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "./requests";

export default function useAllPosts() {
  const data = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  return data;
}
