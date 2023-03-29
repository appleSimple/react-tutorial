import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '김기역',
    comment: '안녕하세요?',
  },
  {
    name: '김니은',
    comment: '반갑습니다?',
  },
  {
    name: '김디귿',
    comment: '친하게 지내요?',
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
