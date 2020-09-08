import React from "react";
import Layout from "../components/layout/layout";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const IndexPage = () => {
  return (
    <>
      <CssBaseline />
      <Container className={`wrapper`}>
        <Layout>
          <Typography variant={`overline`}>{`Choose location`}</Typography>
        </Layout>
      </Container>
    </>
  );
};

export default IndexPage;
