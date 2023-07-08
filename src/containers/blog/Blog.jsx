import React from 'react'
import './blog.css'
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';


const Blog = () => {
  return (
    <div className='gpt3__blog section_padding'>
      
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
      </div>

      <div className='gpt2__blog-container'>

          <div className='gpt3__blog-container_groupA'>
            <Article imgURL={blog01} title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 26, 2021' />
          </div>

          <div className='gpt3__blog-container_groupB'>
            <Article imgURL={blog02} title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 26, 2021' />
            <Article imgURL={blog03} title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 26, 2021' />
            <Article imgURL={blog04} title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 26, 2021' />
            <Article imgURL={blog05} title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 26, 2021' />
          </div>

        </div>

    </div>
  )
}

export default Blog