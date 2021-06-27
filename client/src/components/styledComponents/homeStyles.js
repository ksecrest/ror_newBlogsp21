import { FormInput } from 'semantic-ui-react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';


const HomeTitle = styled.h1`
    background: linear-gradient(to bottom right, yellow, black);
    color: white;
    font-size: ${props => props.large ? "8rem" : "2rem"};
    
    `
export const HomeSubTitle = styled.h2`
    background: green;
    color: white;
    font-size: 15px;
    `
// this is how to style a package button
export const MyButton = styled(Button)`
    border-radius: 50% 50% 49% 51% / 55% 57% 43% 45% !important;
    color: red !important;
    
`

export default HomeTitle;