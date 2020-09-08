import React, {useEffect} from "react";
import Header from "../header/header";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from 'react-redux';

const Layout = ({ children }) => {
    const currentTheme = useSelector(state => state.themes.currentTheme, []);
    const dispatch = useDispatch();
    useEffect(() => {console.log(currentTheme)},[currentTheme])
  return (
    <>
      <Header/>
      <Container component={"main"}>{children}</Container>
    </>
  );
};

export default Layout;
