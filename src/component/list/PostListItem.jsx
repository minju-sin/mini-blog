import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background-color : white;
    :hover {
        background: lightgrey;
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

function PostListItem(props) {
    const {post, onClick} = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText> 
            {/* 글의 제목만 표현해주는 간단한 컴포넌트 */}
        </Wrapper>
    )
}

export default PostListItem