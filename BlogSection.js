import React from 'react';
import './BlogSection.css';
import App from './App';

const blogPosts = [
  {
    id: 1,
    title: "Steve",
    summary: "E-commerce is where technology meets convenience, turning ideas into experiences and customers into lifelong partners. It’s a world where trust drives loyalty",
    image: "https://i.postimg.cc/BQzbfFSR/pexels-rk-photography-29440599.jpg",
    date: "January 1, 2024",
    author: "Author 1",
    link: "/blog-post1",
  },
  {
    id: 2,
    title: "William",
    summary: "Trust, service, and experience are the cornerstones of this digital revolution. In this space, we don’t just sell—we create connections",
    image: "https://i.postimg.cc/xdZVcv7S/pexels-phumlani-nangu-20453403-7543055.jpg",
    date: "January 5, 2024",
    author: "Author 2",
    link: "/blog-post2",
  },
  {
    id: 3,
    title: "Adam",
    summary: "Trust and service form the foundation of successful online businesses. In e-commerce, your website isn’t just a store—it’s a story waiting to connect with your audience.",
    image: "https://i.postimg.cc/BQzbfFSR/pexels-rk-photography-29440599.jpg",
    date: "January 10, 2024",
    author: "Author 3",
    link: "/blog-post3",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2 className="section-title">Latest Blog Posts</h2>
      <div className="blog-container">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={`Blog Image ${post.id}`} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-summary">{post.summary}</p>
              <span className="blog-meta">By {post.author} | {post.date}</span>
              <a href={post.link} className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
      <a href="/blog" className="view-all">View All Posts</a>
    </section>
  );
};

export default BlogSection;
