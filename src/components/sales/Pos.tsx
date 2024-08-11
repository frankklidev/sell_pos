import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Snackbar,
  Alert,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import MainLayout from "../../layout/MainLayout";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const Pos: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState<number | string>("");
  const [productQuantity, setProductQuantity] = useState<number | string>(1);
  const [discount, setDiscount] = useState<number | string>(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  const addToCart = () => {
    if (!productName || !productPrice || !productQuantity) return;

    const newItem: CartItem = {
      id: new Date().getTime().toString(),
      name: productName,
      price: Number(productPrice),
      quantity: Number(productQuantity),
    };

    setCart([...cart, newItem]);
    setProductName("");
    setProductPrice("");
    setProductQuantity(1);

    // Mostrar notificación de éxito
    setSnackbarMessage("Producto agregado al carrito");
    setSnackbarSeverity("success");
    setOpenSnackbar(true);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
    // Mostrar notificación de éxito
    setSnackbarMessage("Producto eliminado del carrito");
    setSnackbarSeverity("success");
    setOpenSnackbar(true);
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const discountAmount = subtotal * (Number(discount) / 100);
    return subtotal - discountAmount;
  };

  const finalizeSale = () => {
    const total = calculateTotal();
    setCart([]);
    setDiscount(0);
    // Mostrar notificación de éxito
    setSnackbarMessage(`Venta finalizada. Total: $${total.toFixed(2)}`);
    setSnackbarSeverity("success");
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <MainLayout>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Punto de Venta (POS)
        </Typography>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={4}>
            <TextField
              label="Producto"
              variant="outlined"
              fullWidth
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Precio"
              variant="outlined"
              fullWidth
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Cantidad"
              variant="outlined"
              fullWidth
              type="number"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
            />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" onClick={addToCart}>
          Agregar Producto
        </Button>

        <Table sx={{ mt: 3 }}>
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>${item.price.toFixed(2)}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  ${(item.price * item.quantity).toFixed(2)}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => removeFromCart(item.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box sx={{ mt: 3 }}>
          <TextField
            label="Descuento (%)"
            variant="outlined"
            fullWidth
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: ${calculateTotal().toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={finalizeSale}
            sx={{ mt: 2 }}
          >
            Finalizar Venta
          </Button>
        </Box>
      </Paper>

      {/* Snackbar para notificaciones */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </MainLayout>
  );
};

export default Pos;
