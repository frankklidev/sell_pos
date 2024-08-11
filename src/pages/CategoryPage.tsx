import React, { useState } from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import CategoryList from '../components/categories/CategoryList';
import CategoryForm from '../components/categories/CategoryForm';
import { Category } from '../types/category';
import MainLayout from '../layout/MainLayout';

const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddCategory = () => {
    setSelectedCategory(null);
    setIsDialogOpen(true);
  };

  const handleEditCategory = (category: Category) => {
    setSelectedCategory(category);
    setIsDialogOpen(true);
  };

  const handleDeleteCategory = (categoryId: string) => {
    setCategories(categories.filter((category) => category.id !== categoryId));
  };

  const handleSaveCategory = (category: Category) => {
    if (selectedCategory) {
      setCategories(categories.map((c) => (c.id === category.id ? category : c)));
    } else {
      setCategories([...categories, { ...category, id: new Date().getTime().toString() }]);
    }
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
  };

  return (
    <MainLayout>
      <Box sx={{ p: 3 }}>
        <Button variant="contained" color="primary" onClick={handleAddCategory} sx={{ mb: 2 }}>
          Añadir Categoría
        </Button>
        
        <CategoryList categories={categories} onEdit={handleEditCategory} onDelete={handleDeleteCategory} />

        <Dialog open={isDialogOpen} onClose={handleCancel}>
          <DialogTitle>{selectedCategory ? 'Editar Categoría' : 'Añadir Categoría'}</DialogTitle>
          <DialogContent>
            <CategoryForm category={selectedCategory || undefined} onSave={handleSaveCategory} onCancel={handleCancel} />
          </DialogContent>
        </Dialog>
      </Box>
    </MainLayout>
  );
};

export default CategoryPage;
