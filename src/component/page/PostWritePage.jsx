// 글 작성 페이지 - 제목, 내용, 작성 버튼 

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from './../ui/TextInput';
import Button from './../ui/Button';

const Wraper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function PostWritePage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <Wraper>
            <Container>
                <TextInput 
                    height={20}
                    value={content}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <TextInput 
                    height={400}
                    value={content}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            
            </Container>
        </Wraper>
    )
}

export default PostWritePage;