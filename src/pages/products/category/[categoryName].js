import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import { Container, Grid, Typography } from "@mui/material";
import React, { useMemo } from "react";
import dir from "@/config/dir.json";

export default function CategoryPage({ categoryName, data }) {
  const categoryTitle = useMemo(() => {
    return categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  }, [categoryName]);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>

      <Grid item xs={12}>
        <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
          <Typography variant="h4" gutterBottom mb={"2rem"}>
            {categoryTitle}
          </Typography>
          <Grid container spacing={3}>
            <Products products={data.products} />
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
export async function getServerSideProps(context) {
  const categoryName = context.params.categoryName;
  const response = await fetch(dir.api + "products/category/" + categoryName);
  const data = await response.json();

  return {
    props: {
      categoryName,
      data,
    },
  };
}
