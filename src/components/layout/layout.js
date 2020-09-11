import React, {useEffect} from "react";
import Header from "../header/header";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from 'react-redux';
import styled, {ThemeProvider} from "styled-components";
import '../../css/index.css'

const Wrapper = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;

const Layout = ({ children }) => {
    const currentTheme = useSelector(state => state.themes.currentTheme, []);
    const dispatch = useDispatch();
    useEffect(() => {console.log(currentTheme)},[currentTheme])
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <Wrapper>
          <Header/>
          <Container component={"main"}>{children}</Container>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Layout;
