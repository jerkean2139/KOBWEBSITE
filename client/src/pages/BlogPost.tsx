import { useParams, Link, Redirect } from "wouter";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getBlogPostBySlug, getAllBlogPosts } from "@/data/blogPosts";
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, Linkedin, Twitter, Facebook, BookOpen, Bot, Sparkles, Users } from "lucide-react";

function renderMarkdown(content: string): string {
  let html = content
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl md:text-2xl font-semibold text-gray-900 mt-10 mb-4">$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4 class="text-lg font-semibold text-gray-900 mt-8 mb-3">$1</h4>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold text-gray-900">$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, (match, text, url) => {
      const isExternal = url.startsWith('http');
      if (isExternal) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/80 underline underline-offset-4 font-medium">${text}</a>`;
      }
      return `<a href="${url}" class="text-primary hover:text-primary/80 underline underline-offset-4 font-medium">${text}</a>`;
    })
    .replace(/^\- (.*$)/gim, '<li class="ml-6 mb-2 text-gray-700 leading-relaxed">$1</li>')
    .replace(/^\| (.+) \|$/gim, (match, content) => {
      const cells = content.split(' | ').map((cell: string) => `<td class="px-4 py-3 border border-gray-200">${cell.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    })
    .replace(/^(\d+)\. (.*$)/gim, '<li class="ml-6 mb-2 text-gray-700 leading-relaxed"><span class="font-semibold">$1.</span> $2</li>');

  const paragraphs = html.split('\n\n');
  html = paragraphs.map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<li') || p.startsWith('<tr') || p.startsWith('<table')) return p;
    if (p.includes('<li')) {
      return `<ul class="my-6 space-y-1">${p}</ul>`;
    }
    return `<p class="text-gray-700 leading-relaxed mb-6">${p}</p>`;
  }).join('\n');

  return html;
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(params.slug || "");
  const allPosts = getAllBlogPosts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (!post) {
    return <Redirect to="/blog" />;
  }

  const currentIndex = allPosts.findIndex(p => p.id === post.id);
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const shareUrl = `https://keanonbiz.com/blog/${post.slug}`;
  const shareText = encodeURIComponent(post.title);

  const categoryIcons: Record<string, React.ReactNode> = {
    "AI Automation": <Bot className="w-4 h-4" />,
    "Business Strategy": <Sparkles className="w-4 h-4" />,
    "Business Mindset": <Users className="w-4 h-4" />,
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": `https://keanonbiz.com${post.featuredImage}`,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "url": "https://keanonbiz.com",
      "jobTitle": post.author.title
    },
    "publisher": {
      "@type": "Organization",
      "name": "KeanOnBiz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://keanonbiz.com/kean-on-biz-logo-blue.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl
    },
    "articleSection": post.category,
    "keywords": post.tags.join(", ")
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://keanonbiz.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://keanonbiz.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": shareUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <Navigation />
      <main id="main-content" className="min-h-screen bg-white" role="main">
        <article itemScope itemType="https://schema.org/Article">
          <header className="relative pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
            </div>
            
            <div className="container relative z-10">
              <AnimatedSection animation="fade-in">
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                  <span>/</span>
                  <span className="text-gray-700">{post.category}</span>
                </nav>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={0.1}>
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-6">
                    <Badge variant="outline" className="flex items-center gap-1.5">
                      {categoryIcons[post.category]}
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center gap-1.5">
                      <Clock size={14} />
                      {post.readTime} min read
                    </span>
                  </div>
                  
                  <h1 
                    itemProp="headline"
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    {post.title}
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <img
                        src={post.author.image}
                        alt={post.author.name}
                        itemProp="image"
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div itemProp="author" itemScope itemType="https://schema.org/Person">
                        <p itemProp="name" className="font-semibold text-gray-900">{post.author.name}</p>
                        <p className="text-gray-500 text-sm">{post.author.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <time itemProp="datePublished" dateTime={post.publishedAt} className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                      {post.updatedAt !== post.publishedAt && (
                        <span className="text-gray-400">
                          Updated: {new Date(post.updatedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </header>

          <AnimatedSection animation="fade-in" delay={0.2}>
            <div className="relative aspect-video max-w-5xl mx-auto -mt-8 px-4">
              <img
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                itemProp="image"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </AnimatedSection>

          <div className="container py-16">
            <div className="grid lg:grid-cols-12 gap-12">
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-32 flex flex-col items-center gap-4">
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">Share</span>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-500 flex items-center justify-center transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${shareText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 flex items-center justify-center transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-700 flex items-center justify-center transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </aside>

              <div className="lg:col-span-7">
                <AnimatedSection animation="fade-in" delay={0.3}>
                  <div 
                    itemProp="articleBody"
                    className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
                  />
                </AnimatedSection>

                {post.faqs.length > 0 && (
                  <AnimatedSection animation="slide-up" delay={0.4}>
                    <div className="mt-16 pt-12 border-t border-gray-200">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                        Frequently Asked Questions
                      </h2>
                      <div className="space-y-6">
                        {post.faqs.map((faq, index) => (
                          <Card key={index} className="border-0 shadow-md">
                            <CardContent className="p-6">
                              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {faq.question}
                              </h3>
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                )}

                <AnimatedSection animation="fade-in" delay={0.5}>
                  <div className="mt-12 flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              <aside className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                  <AnimatedSection animation="slide-left" delay={0.3}>
                    <Card className="border-0 shadow-lg overflow-hidden">
                      <div className="bg-gradient-to-br from-primary to-blue-600 p-6 text-white">
                        <BookOpen className="w-8 h-8 mb-4" />
                        <h3 className="text-xl font-bold mb-2">The Manumation Method</h3>
                        <p className="text-white/90 text-sm">
                          Get the complete framework for transforming your business with AI automation.
                        </p>
                      </div>
                      <CardContent className="p-6">
                        <Button className="w-full" asChild>
                          <a href="https://manumation.ai" target="_blank" rel="noopener noreferrer">
                            Get The Book <ArrowRight className="ml-2" size={16} />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedSection>

                  <AnimatedSection animation="slide-left" delay={0.4}>
                    <Card className="border-0 shadow-lg overflow-hidden">
                      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white">
                        <Bot className="w-8 h-8 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Zenoflo Automation</h3>
                        <p className="text-white/90 text-sm">
                          Ready-to-deploy AI workflows for insurance agencies and businesses.
                        </p>
                      </div>
                      <CardContent className="p-6">
                        <Button variant="outline" className="w-full" asChild>
                          <a href="https://zenoflo.com" target="_blank" rel="noopener noreferrer">
                            Explore Solutions <ArrowRight className="ml-2" size={16} />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedSection>

                  <AnimatedSection animation="slide-left" delay={0.5}>
                    <Card className="border-0 shadow-lg p-6">
                      <h3 className="font-bold text-gray-900 mb-4">About the Author</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={post.author.image}
                          alt={post.author.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{post.author.name}</p>
                          <p className="text-sm text-gray-500">{post.author.title}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {post.author.bio}
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/jeremys-calendar">
                          Book a Strategy Call
                        </Link>
                      </Button>
                    </Card>
                  </AnimatedSection>
                </div>
              </aside>
            </div>

            <AnimatedSection animation="fade-in" delay={0.6}>
              <nav className="mt-16 pt-12 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                  {prevPost && (
                    <Link href={`/blog/${prevPost.slug}`}>
                      <Card className="group cursor-pointer h-full border-0 shadow-md hover:shadow-lg transition-all p-6">
                        <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                          <ArrowLeft size={14} /> Previous Article
                        </p>
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                          {prevPost.title}
                        </h4>
                      </Card>
                    </Link>
                  )}
                  {nextPost && (
                    <Link href={`/blog/${nextPost.slug}`}>
                      <Card className="group cursor-pointer h-full border-0 shadow-md hover:shadow-lg transition-all p-6 text-right md:col-start-2">
                        <p className="text-sm text-gray-500 mb-2 flex items-center gap-2 justify-end">
                          Next Article <ArrowRight size={14} />
                        </p>
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                          {nextPost.title}
                        </h4>
                      </Card>
                    </Link>
                  )}
                </div>
              </nav>
            </AnimatedSection>
          </div>
        </article>

        <footer className="py-8 bg-gray-900 text-white">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} KeanOnBiz. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="https://manumation.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Manumation
                </a>
                <a href="https://zenoflo.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Zenoflo
                </a>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
