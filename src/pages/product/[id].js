import React from "react";
import { useRouter } from "next/router";
import {
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

export default function ProductPage({ data }) {
  const router = useRouter();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container justifyContent={"center"}>
          <Paper sx={{ maxWidth: "80vw",backgroundColor:"rgb(201, 204, 255)" }}>
            <Grid container>
              <Grid item xs={12}>
                <img
                  height="300"
                  width="300"
                  src={data.image}
                  alt={data.title}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">{data.title}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const response = await fetch("https://fakestoreapi.com/products/" + id);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
