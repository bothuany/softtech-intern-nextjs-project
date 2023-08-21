import {
  Box,
  Container,
  Divider,
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
import ButtonInfo from "@/components/CustomUI/CustomButton/buttonInfo";
import ButtonReject from "@/components/CustomUI/CustomButton/buttonReject";
import { useCart } from "@/contexts/cartContext";

export default function CartPage() {
  const {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    clearCart,
    setItemQuantity,
  } = useCart();
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Paper elevation={3} sx={{ padding: "1rem" }}>
        <List sx={{ marginBottom: "1rem" }}>
          {cartItems.map((item) => (
            <div key={item.id}>
              <ListItem disableGutters>
                <Stack direction="row" justifyContent="space-between">
                  <ListItemText
                    primary={item.title}
                    secondary={`$${item.price.toFixed(2)}`}
                  />
                  <ButtonReject
                    color="error"
                    variant="contained"
                    size="small"
                    startIcon={<DeleteSweepIcon />}
                    text="Remove"
                    onClick={removeFromCart(item.id)}
                  />
                </Stack>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
        <Divider sx={{ marginY: "1rem" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h6">${calculateTotal().toFixed(2)}</Typography>
        </Box>
        <ButtonInfo
          variant="contained"
          size="large"
          startIcon={<ShoppingCartIcon />}
          sx={{ marginTop: "1rem", width: "100%" }}
          text="Proceed to Checkout"
          onClick={clearCart}
        />
        <Typography variant="subtitle1" textAlign={"center"} mt={"1rem"}>
          or
        </Typography>
        <ButtonReject
          color="error"
          variant="contained"
          size="large"
          startIcon={<DeleteSweepIcon />}
          sx={{ marginTop: "1rem", width: "100%" }}
          text="Clear All"
          onClick={clearCart}
        />
      </Paper>
    </Container>
  );
}
