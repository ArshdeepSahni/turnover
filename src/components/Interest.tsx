import React, { useEffect } from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'
import type { Interest, User } from '@prisma/client';
import { api } from '../utils/api';

export type InterestProps = {
  interest: Interest & {
    author: User | null;
  }
}

const Interest: React.FC<InterestProps> = ({ interest, email }) => {
  const interestMutation = api.interest.togglePublish.useMutation()
  const [published, setPublished] = React.useState<boolean>(interest.published)
  const authorName = interest.author ? interest.author.name : 'Unknown author'
  let togglePublish = async () => {

      console.log("togglePublish", interest)
      await interestMutation.mutateAsync({
        id: interest?.id,
        published: !published, email:email
      });
      setPublished(!published)
    }
  return (
    <div className='flex items-center space-x-3'>
      <input type="checkbox" className="w-4 h-4 accent-black" checked={published} onChange={togglePublish}/>
      <h2>{interest.interest}</h2>
    </div>
  )
}

export default Interest