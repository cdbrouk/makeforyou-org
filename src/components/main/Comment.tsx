import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import VizSensor from 'react-visibility-sensor';
import CommentImg from '../../static/img/comment.png';

const CommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

interface CommentTextBlockProps {
  isRendered?: boolean;
}

const CommentTextBlock = styled.div<CommentTextBlockProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  color: black;
  font-weight: bold;
  z-index: 1001;
  opacity: 0;
  transform: translateY(50px);
  transition: all 600ms ease-in-out;

  ${(props) =>
    props.isRendered &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const CommentTextBold = styled.span`
  font-size: 1rem;
  text-align: center;

  @media (min-width: 420px) {
    font-size: 1.5rem;
  }
  @media (min-width: 760px) {
    font-size: 2rem;
  }
`;

const CommentText = styled.p`
  padding-top: 50px;
  font-size: 0.8rem;
  text-align: center;

  @media (min-width: 420px) {
    font-size: 1rem;
  }
  @media (min-width: 760px) {
    font-size: 1.5rem;
  }
`;

const CommentImage = styled.img.attrs({
  src: CommentImg,
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Comment: React.FC = () => {
  const [showTitle, setShowTitle] = useState<boolean>(false);
  const [showComment, setShowComment] = useState<boolean>(false);

  const renderTitle = useCallback(
    (bool: boolean) => {
      if (showTitle) return;
      setShowTitle(bool);
    },
    [showTitle],
  );

  useEffect(() => {
    const renderComment = () => {
      if (showTitle) setShowComment(true);
    };
    setTimeout(renderComment, 800);
  }, [showTitle]);

  return (
    <CommentBlock>
      <CommentImage />
      <VizSensor onChange={renderTitle}>
        <CommentTextBlock isRendered={showTitle}>
          <CommentTextBold>세상의 모든 제작소 MAKE 4 U</CommentTextBold>
        </CommentTextBlock>
      </VizSensor>
      <CommentTextBlock isRendered={showComment}>
        <CommentText>
          메이크 포 유에서 공장검색과 견적비교를 한번에 하세요
          <br />
          <br />
          지역, 업종 별로 정리된 다양한 공장들 <br />
          도면 한 장만으로 견적 비교를 한번에!
          <br />
          <br />
          간단한 양식 작성으로 쉽게 비교해 보세요
          <br />
        </CommentText>
      </CommentTextBlock>
    </CommentBlock>
  );
};

export default Comment;
