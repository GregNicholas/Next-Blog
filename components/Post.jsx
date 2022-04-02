import Link from 'next/link'

export default function Post({post}) {
	return (
	  <div className="card">
			{post.frontmatter.cover_image && <img src={post.frontmatter.cover_image} alt="cover image" />}
			
		<div className="post-date">Posted on {post.frontmatter.date}</div>
		<h3>{post.frontmatter.title}</h3>
			
		<p>{post.frontmatter.exerpt}</p>
			
		<Link href={`/blog/${post.slug}`}>
		  <a className="btn">read more</a>
		</Link>
	  </div>
	)
}