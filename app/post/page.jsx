
export default function PostPage() {
    const post = {
        title: "Sample Post Title",
        date: "2025-01-01",
      };
    if (!post) {
      return (
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg text-gray-700">Post not found</p>
        </div>
      );
    }
  
    return (
      <article className="max-w-3xl mx-auto px-4 py-16">
        <nav className="text-sm text-gray-500 mb-4">
          <a href="/" className="hover:underline">Home</a> /
          <a href="/news" className="hover:underline ml-1">News</a> /
          <span className="ml-1">{post.category || "Uncategorized"}</span>
        </nav>
  
        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
  
        <div className="text-sm text-gray-600 mt-2">
          {post.date || "No date"} · {post.author || "Anonymous"} ·
          <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {post.category || "General"}
          </span>
        </div>
  
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-xl my-6 shadow"
          />
        )}
  
        <div className="prose prose-lg text-gray-800 max-w-none mt-8">
          {post.intro && <p className="lead">{post.intro}</p>}
          {post.body?.map((block, idx) => {
            switch (block.type) {
              case "heading":
                return <h2 key={idx}>{block.text}</h2>;
              case "image":
                return <img key={idx} src={block.src} alt={block.alt} />;
              case "quote":
                return <blockquote key={idx}>{block.text}</blockquote>;
              default:
                return <p key={idx}>{block.text}</p>;
            }
          }) || <p>No content available.</p>}
        </div>
  
        <div className="mt-12 flex justify-between border-t pt-6 text-sm text-gray-500">
          <div>
            Tags:
            {post.tags?.length
              ? post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block ml-2 px-2 py-1 bg-gray-200 rounded"
                  >
                    {tag}
                  </span>
                ))
              : <span className="ml-2 text-gray-400">None</span>}
          </div>
          <div>
            <span>Share:</span>
            <a href="#" className="ml-2 underline">Facebook</a>
            <a href="#" className="ml-2 underline">X</a>
            <a href="#" className="ml-2 underline">LinkedIn</a>
          </div>
        </div>
      </article>
    );
  }