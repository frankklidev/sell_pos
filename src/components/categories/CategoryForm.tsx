// src/components/categories/CategoryForm.tsx

import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';
import { Category } from '../../types/category';

interface CategoryFormProps {
  category?: Category;
  onSave: (category: Category) => void;
  onCancel: () => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ category, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Category>(
    category || { id: '', name: '', description: '' }
  );

  useEffect(() => {
    if (category) {
      setFormData(category);
    }
  }, [category]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ id: '', name: '', description: '' }); // Limpiar formulario después de guardar
  };

  const handleCancel = () => {
    setFormData({ id: '', name: '', description: '' }); // Limpiar formulario cuando se cancela
    onCancel();
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {category ? 'Editar Categoría' : 'Añadir Categoría'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Descripción"
          name="description"
          value={formData.description}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          multiline
          rows={3}
        />
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
          <Button variant="contained" color="primary" type="submit">
            Guardar
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default CategoryForm;
