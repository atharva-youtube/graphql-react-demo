import useAllPosts from "@/utils/useAllPosts";

export default function RQ() {
  const { data, isLoading } = useAllPosts();

  return (
    <div className="max-w-7xl w-full mx-auto">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((post) => (
          <div key={post.id} className="my-5 text-lg">
            {post.title}
          </div>
        ))
      )}
    </div>
  );
}
