import React from 'react'
import {BlogListProps} from '@/lib/types'

type BlogItemsProps = {
    blogItems : BlogListProps[]
}

const BlogItemsList : React.FC<BlogItemsProps> = ({blogItems}) => {
  return (
    <>
        {blogItems.map((blog,index)=>(
            <div key={index}>Eldorado</div>
        ))}
    </>
  )
}

export default BlogItemsList