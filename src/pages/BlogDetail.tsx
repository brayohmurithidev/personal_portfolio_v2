import {Link, useParams} from "react-router";
import {usePortfolioData} from "@/hooks/usePortfolioData";
import {useEffect} from "react";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";
import {Calendar, Clock} from "lucide-react";
import DOMPurify from "dompurify";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {sanitizeTitle} from "@/lib/utils.ts";
import {Helmet} from "react-helmet-async";

const BlogDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { title } = useParams<{ title: string }>();
  const { data, loading, error } = usePortfolioData();

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500">Error loading blog</div>;

  const blog = data?.blogPosts.find(
    (post) => sanitizeTitle(post.title) === title,
  );

  if (!blog)
    return <div className="text-center text-muted py-20">Post not found</div>;

  const relatedPosts = data.blogPosts.filter(
    (post) =>
      post.id !== blog.id && post.tags.some((tag) => blog.tags.includes(tag)),
  );

  return (
    <>
      <Helmet>
        <title>{blog.title} | Fazilabs Blog</title>
        <meta name="description" content={blog.excerpt} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="w-full h-[400px] object-cover rounded-xl shadow-md mb-8"
        />

        <div className="mb-4 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="capitalize">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-4xl font-bold tracking-tight leading-snug mb-4">
          {blog.title}
        </h1>
        <p className="text-muted-foreground text-lg mb-6">{blog.excerpt}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Avatar className="h-6 w-6">
              <AvatarFallback>{blog.author[0]}</AvatarFallback>
            </Avatar>
            <span>{blog.author}</span>
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(blog.date).toDateString()}</span>
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Content */}
        <Card>
          <CardContent className="prose prose-gray dark:prose-invert max-w-none mt-6 prose-headings:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.content),
              }}
            />
          </CardContent>
        </Card>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.title.toLowerCase().replace(/ /g, "-")}`}
                  className="group block rounded-xl border hover:shadow-md transition"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover rounded-t-xl"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogDetail;
