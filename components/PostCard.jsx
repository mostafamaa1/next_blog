import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">

    <h1 className="transition duration-700 pt-4 text-center mb-8 cursor-pointer hover:text-blue-400 text-3xl font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className="flex flex-col text-center sm:flex-row items-center justify-center gap-6 mb-6 w-full">
<div
            className='flex items-center justify-center w-auto mr-8'>
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={post.author.name}
          height="30px"
          width="30px"
          className="rounded-full"
          src={post.author.photo.url}
        />
        <p 
        className="inline text-gray-700 dark:text-white ml-2 font-medium text-lg">
          {post.author.name}
          </p>
      </div>
      <div className="font-medium flex items-center justify-center w-auto mr-4  text-gray-700 dark:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
    </div>
    <p className="text-center text-lg text-gray-700 dark:text-white font-normal px-4 lg:px-20 mb-8">
      {post.excerpt}
    </p>
    <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-4 py-2 cursor-pointer">Read More</span>
      </Link>
    </div>
  </div>
);

export default PostCard;
