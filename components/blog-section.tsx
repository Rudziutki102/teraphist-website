import React from 'react'
import SectionHeader from './section-header'
import {client} from '@/sanity/lib/client'
import { BlogListProps } from '@/lib/types'
import BlogItemsList from '@/components/blog-items-list'

async function getBlogItems(){
    const query : string = `
    *[_type == 'post' && !(_id in path('drafts.**'))] | order(_updatedAt asc){
        slug,
        title,
        tags,
        publishedAt,
        titleImage
    }     
    `
    const data = await client.fetch(query)
    return data
  }
const BlogSection = async () => {
    const blogList : BlogListProps[] = await getBlogItems()
  return (
    <>
        <SectionHeader name="Blog"/>
        {blogList && <BlogItemsList blogItems={blogList} />}
    </>
  )
}

export default BlogSection