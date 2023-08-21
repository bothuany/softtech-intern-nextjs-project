import { useRouter } from "next/router";
import {
  Box,
  CardMedia,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo } from "react";
import CustomCard from "../CustomUI/CustomCard/CustomCard";
import ButtonSuccess from "../CustomUI/CustomButton/buttonSuccess";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Star } from "@mui/icons-material";

export default function Product({ product }) {
  const router = useRouter();

  const productLink = useMemo(() => {
    return `/product/${product.id}`;
  }, [product.id]);

  const handleClick = () => {
    router.push(productLink);
  };
  return (
    <Grid item xs={12} md={4} key={product.id}>
      <CustomCard>
        <CardMedia
          component="img"
          height="200"
          image={product.thumbnail}
          alt={product.title}
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
        />
        <Container>
          <Typography
            variant="h6"
            sx={{ marginTop: "1rem", cursor: "pointer" }}
            onClick={handleClick}
          >
            {product.title}
          </Typography>
          <Chip
            label={product.brand}
            color="info"
            sx={{ marginBottom: "0.5rem" }}
          />
          <Stack direction="row" justifyContent={"space-between"}>
            <Typography
              variant="subtitle1"
              color="primary"
              sx={{ marginRight: "0.5rem" }}
            >
              ${product.price.toFixed(2)}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <Star color="primary" sx={{ marginRight: "0.5rem" }} />
              <Typography variant="body2">
                {product.rating.toFixed(2)}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginLeft: "0.5rem" }}
              >
                ({product.stock} reviews)
              </Typography>
            </Box>
          </Stack>
          <Stack direction={"row"}  mb="1rem" >
            <ButtonSuccess
              text="Add to Cart"
              variant="contained"
              size="small"
              startIcon={<ShoppingCartIcon color="action" />}
            />
          </Stack>
        </Container>
      </CustomCard>
    </Grid>
  );
}
