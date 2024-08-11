import React, { useState } from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import ProductForm from '../components/products/ProductForm';
import ProductList from '../components/products/ProductList';
import { Product } from '../types/Product';
import MainLayout from '../layout/MainLayout';

const exampleCategories = [
  'Electrónica',
  'Ropa',
  'Hogar y Cocina',
  'Juguetes',
  'Libros',
  'Deportes',
  'Salud y Belleza',
  'Automotriz',
  'Jardinería',
  'Oficina',
];

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsFormOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleSaveProduct = (product: Product) => {
    if (selectedProduct) {
      setProducts(products.map((p) => (p.id === product.id ? product : p)));
    } else {
      setProducts([
        ...products,
        { ...product, id: new Date().getTime().toString() },
      ]);
    }
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
  };

  return (
    <MainLayout>
      <Box sx={{ p: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddProduct}
          sx={{ mb: 2 }}
        >
          Añadir Producto
        </Button>

        <ProductList
          products={products}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />

        <Dialog open={isFormOpen} onClose={handleCancel} maxWidth="sm" fullWidth>
          <DialogTitle>{selectedProduct ? 'Editar Producto' : 'Añadir Producto'}</DialogTitle>
          <DialogContent>
            <ProductForm
              product={selectedProduct || undefined}
              categories={exampleCategories}
              onSave={handleSaveProduct}
              onCancel={handleCancel}
            />
          </DialogContent>
        </Dialog>
      </Box>
    </MainLayout>
  );
};

export default ProductPage;
