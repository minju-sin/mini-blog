import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    flex-deirection: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background-color : white;
    :hover {
        backgroud: lightgrey;
    }
`;

const ContentText = styled.p`
    font-size: 14px;
`;

function CommentListItem(props) {
    const {comment} = props;

    return (
        <Wrapper>
            <TitleText>{comment.content}</TitleText> 
        </Wrapper>
    )
}

export default CommentListItem;