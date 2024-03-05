'use client';

import { Textarea } from '~/shared/_shacdn/ui/textarea';
import addPost from '../../_action/add-post';
import { type SetStateAction, useState } from 'react';

export default function PostTweet() {
  const [tweet, setTweet] = useState('');

  const handleTweetChange = (event: { target: { value: SetStateAction<string> } }) => {
    setTweet(event.target.value);
  };

  return (
    <>
      <Textarea
        placeholder="What is happening?!"
        className="mb-5 text-black"
        value={tweet}
        onChange={handleTweetChange}
      />
      <button
        className="rounded-full bg-white px-5 py-2 text-base font-normal text-black hover:bg-white/70"
        onClick={async () => {
          setTweet('')
            await addPost(tweet);
        }}
      >
        Post
      </button>
    </>
  );
}
