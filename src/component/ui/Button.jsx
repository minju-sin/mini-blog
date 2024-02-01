import React from 'react';
import styled from 'styled-components';

// button 태그에 스타일링을 한 StyledButton 컴포넌트 생성 
const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props) {
    const { title, onClick } = props;

  return <StyledButton onClick={onClick}>{ title || "button"}</StyledButton>
}

export default Button;