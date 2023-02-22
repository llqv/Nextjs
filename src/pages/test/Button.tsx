import React from 'react'
import styled from 'styled-components'
interface button { }
const StyledButton = styled.button<button>`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0069d9;
  }
`;
const Button = () => {
    return (
        <div>
            <StyledButton>Show Time</StyledButton>
        </div>
    )
}

export default Button