export interface InventoryActionsProps {
    addRow: () => void;
    exportToExcel: () => void;
    importFromExcel: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }