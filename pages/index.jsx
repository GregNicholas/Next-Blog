import fs from 'fs' // MUST use below in getStaticProps..on the server side
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import {sortByDate} from '../utils'

export default function Home({posts}) {
	console.log(posts)
  return (
    <div>
      <Head>
        <title>WebDev Blog</title>
        <meta name="site with a blog about web development" content="Anything related to web development, especially JavaScript, Typescript, React, HTML, CSS, headless CMS is fair game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="posts">
		{posts.map((post, index) => (
		  <Post key={index} post={post} />
		))}  
	  </div>
    </div>
  )
}


export const getStaticProps = async () => {
	// could get data from a headless CMS
	// Get files from posts directory
	const files = fs.readdirSync(path.join('posts'))
	// Get slug and frontmatter from posts
	const posts = files.map(filename => {
		//Create Slug
		const slug = filename.replace('.md', '')
		
		// Get frontmatter
		const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
		
		const {data:frontmatter} = matter(markdownWithMeta)
		
		return {
			slug,
			frontmatter,
		}
	})
	

	return {
		props: {
			posts: posts.sort(sortByDate),
		}
	}
}