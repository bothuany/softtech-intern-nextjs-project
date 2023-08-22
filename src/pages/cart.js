import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { useCart } from "@/contexts/cartContext";
import Navbar from "@/components/Navbar";
import CustomButton from "@/components/CustomUI/CustomButton";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const calculateTotal = () => {
    return cartItems?.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
          <Typography variant="h4" gutterBottom>
            Shopping Cart
          </Typography>
          <Paper elevation={3} sx={{ padding: "1rem" }}>
            <List sx={{ marginBottom: "1rem" }}>
              {cartItems?.map((item) => (
                <div key={item.id}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <ListItem disableGutters>
                          <img
                            width="150"
                            src={item.thumbnail}
                            alt={item.title}
                          />
                          <ListItemText
                            sx={{ marginLeft: "1rem" }}
                            primary={item.title}
                            secondary={`$${item.price.toFixed(2)}`}
                          />
                        </ListItem>
                      </Grid>
                    </Grid>
                    <CustomButton
                      type="reject"
                      variant="contained"
                      size="small"
                      startIcon={<DeleteSweepIcon color="action" />}
                      text="Remove"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </Stack>
                  <Divider />
                </div>
              ))}
            </List>
            <Divider sx={{ marginY: "1rem" }} />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6">
                ${calculateTotal() ? calculateTotal().toFixed(2) : 0}
              </Typography>
            </Stack>
            <Box ml={"1rem"} maxWidth="100%">
              <CustomButton
                fullWidth
                type="info"
                variant="contained"
                size="large"
                startIcon={<ShoppingCartIcon />}
                text="Proceed to Checkout"
                onClick={() => clearCart()}
              />
            </Box>

            <Typography variant="subtitle1" textAlign="center" mt="1rem">
              or
            </Typography>
            <Box ml={"1rem"}>
              <CustomButton
                fullWidth
                type="reject"
                variant="contained"
                size="large"
                startIcon={<DeleteSweepIcon />}
                text="Clear All"
                onClick={() => clearCart()}
              />
            </Box>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
