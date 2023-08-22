import React, { useMemo } from "react";
import {
  Box,
  Stack,
  Card,
  CardMedia,
  Chip,
  Container,
  Grid,
  Divider,
  Typography,
} from "@mui/material";

import { Star } from "@mui/icons-material";
import ButtonSuccess from "@/components/CustomUI/CustomButton/buttonSuccess";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import dir from "@/config/dir.json";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { useCart } from "@/contexts/cartContext";
import Navbar from "@/components/Navbar";
import ButtonReject from "@/components/CustomUI/CustomButton/buttonReject";

export default function ProductPage({ data }) {
  const categoryTitle = useMemo(() => {
    return data.category.charAt(0).toUpperCase() + data.category.slice(1);
  }, [data.category]);
  const { addToCart, isCartIncludesProduct, removeFromCart } = useCart();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="400"
                  image={data.thumbnail}
                  alt={data.title}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" color={"gray"} gutterBottom>
                {categoryTitle}
              </Typography>
              <Typography variant="h4" gutterBottom>
                {data.title}
              </Typography>
              <Chip
                label={data.brand}
                color="info"
                sx={{ marginBottom: "1rem" }}
              />
              <Typography variant="body1" gutterBottom>
                {data.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{ marginRight: "0.5rem" }}
                >
                  ${data.price.toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.discountPercentage}% off
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <Star color="primary" sx={{ marginRight: "0.5rem" }} />
                <Typography variant="body2">
                  {data.rating.toFixed(2)}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginLeft: "0.5rem" }}
                >
                  ({data.stock} reviews)
                </Typography>
              </Box>
              <Chip
                label={`In Stock: ${data.stock}`}
                color="success"
                sx={{ marginBottom: "1rem" }}
              />

              <Stack direction={"row"} justifyContent={"flex-end"}>
                <ButtonSuccess
                  text="Add to Cart"
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCartIcon color="action" />}
                  onClick={() => addToCart(data)}
                />
                {isCartIncludesProduct(data.id) ? (
                  <ButtonReject
                    text="Remove from Cart"
                    variant="contained"
                    color="error"
                    size="large"
                    sx={{ marginLeft: "1rem" }}
                    startIcon={<DeleteSweepIcon color="action" />}
                    onClick={() => removeFromCart(data.id)}
                  />
                ) : (
                  ""
                )}
              </Stack>
            </Grid>
          </Grid>
          <Divider sx={{ marginY: "2rem" }} />
          <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
            Product Images
          </Typography>
          <Grid container spacing={2}>
            {data.images.map((image, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="150"
                    image={image}
                    alt={`${data.title} Image ${index + 1}`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await fetch(dir.api + "products/" + id);

  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
