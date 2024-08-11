
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

interface CustomButtonProps {
  text: string;
  onClick: () => void;
}

const CustomButtonComponent: React.FC<CustomButtonProps> = ({ text, onClick }) => {
  return (
    <CustomButton onClick={onClick}>
      {text}
    </CustomButton>
  );
};

export default CustomButtonComponent;
