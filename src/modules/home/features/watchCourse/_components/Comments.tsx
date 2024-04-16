import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AttatchmentIcon from 'modules/shared/assets/icons/courseDetails/fielText.svg';
import replayIcon from 'modules/shared/assets/icons/courseDetails/replayIcon.svg';
import Button from 'modules/shared/components/Button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'modules/shared/components/ui/avatar';
import { Input } from 'modules/shared/components/ui/input';
type Comment = {
  id: number;
  name: string;
  avatar: string;
  date: string;
  content: string;
  children: Comment[] | [];
};

const mockComments: Comment[] = [
  {
    id: 1,
    name: 'Ronald Richards',
    avatar: 'https://avatars.githubusercontent.com/u/112077899?v=4',
    date: '1 week ago',
    content:
      'Maecenas risus tortor, tincidunt nec purus eu, gravida suscipit tortor.',
    children: [
      {
        id: 1,
        name: 'Ronald Richards',
        avatar: 'https://avatars.githubusercontent.com/u/112077899?v=4',
        date: '1 week ago',
        content:
          'Maecenas risus tortor, tincidunt nec purus eu, gravida suscipit tortor.',

        children: [],
      },
    ],
  },

  // Add more mock data as needed
];
interface CommentProps {
  comment: Comment;
  key: number;
  onReply: (id: number) => void;
}
const CommentComponent: React.FC<CommentProps> = ({ comment, onReply }) => {
  const [replyOpen, setReplyOpen] = useState(false);

  const handleReply = () => {
    setReplyOpen(!replyOpen);
    onReply(comment.id);
  };

  return (
    <>
      <div className="flex items-center gap-x-3 ">
        <Avatar className="self-start mt-2 w-[45px] h-[45px] ">
          <AvatarImage src={comment.avatar} alt="@Firas" />
          <AvatarFallback>{comment.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-y-[12px]">
          <div className="text-gray-900">
            {comment.name}
            <span className="text-gray-600 text-[14px]">{comment.date}</span>
          </div>
          <div className="text-gray-700 text-[15px] font-[400] w-full">
            {comment.content}
          </div>
          <div className="flex items-center gap-2">
            <img src={replayIcon} alt="" />
            <span
              className="text-gray-500 font-[500] cursor-pointer"
              onClick={handleReply}
            >
              REPLY
            </span>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {replyOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            className="pt-5  ml-[16px]    border-l border-gray-100 w-full flex items-center "
          >
            <div className="self-start w-[100px] mt-6 border-b border-gray-100"></div>
            <div className="flex items-center justify-between w-full ">
              <div className="border-gray-100 border-[1px]   flex items-center justify-center pl-2 pr-2 w-[82%]  ">
                <img src={replayIcon} alt="scoopIcon" />
                <Input
                  type="text"
                  className="w-full border-none outline-none placeholder:text-gray-500"
                />
              </div>
              <div>
                <Button text="Post reply" variant="primary" size="lg" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export const Comments = (props: {}) => {
  const [replayOpen, setReplayOpen] = useState<number | null>(null);

  const handleReply = (id: number) => {
    setReplayOpen(id);
  };
  const renderComments = (comments: Comment[]) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <CommentComponent
          comment={comment}
          key={comment.id}
          onReply={handleReply}
        />
        {comment.children.length > 0 && (
          <div className="pt-2  ml-[16px]  border-l after:h-3 border-gray-100">
            <div className="h-full border-l-2 w-[30px] bg-red duration-300"></div>
            {/* children */}
            <div className="flex items-center duration-300 gap-x-3">
              <div className="self-start w-[100px] mt-9 border-b border-gray-100 "></div>
              <div className="flex flex-col w-full">
                {renderComments(comment.children)}
              </div>
            </div>
          </div>
        )}
      </div>
    ));
  };
  return (
    <div className="flex flex-col w-full gap-8 pt-6 pb-6">
      <div className="text-2xl font-semibold tracking-tight scroll-m-20">
        Comments (154)
      </div>
      <div className="w-full">
        {/* <renderComments comments={mockComments} /> */}
        {renderComments(mockComments)}
      </div>
    </div>
  );
};
