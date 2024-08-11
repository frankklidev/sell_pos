import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Paper, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { Product } from '../../types/Product';

interface ProductFormProps {
  product?: Product;
  categories: string[];
  onSave: (product: Product) => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, categories, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Product>(
    product || { id: '', name: '', description: '', price: 0, stock: 0, category: '' }
  );

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setFormData({
      ...formData,
      category: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        {product ? 'Editar Producto' : 'Añadir Producto'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Descripción"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          variant="outlined"
          fullWidth
          multiline
          rows={3}
        />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="Precio"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            required
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Stock"
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleInputChange}
            required
            variant="outlined"
            fullWidth
          />
        </Box>
        <FormControl fullWidth variant="outlined" required>
          <InputLabel>Categoría</InputLabel>
          <Select
            label="Categoría"
            name="category"
            value={formData.category}
            onChange={handleSelectChange}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 48 * 4.5, // Altura de un elemento (48px) * 4.5 para mostrar 4 elementos y parte de uno más
                  overflowY: 'auto', // Activar el scroll vertical
                },
              },
            }}
          >
            {categories?.length > 0 ? (
              categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>No hay categorías disponibles</MenuItem>
            )}
          </Select>
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button onClick={onCancel} variant="outlined" color="secondary">
            Cancelar
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Guardar
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductForm;
