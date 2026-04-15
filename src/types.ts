export interface ShoppingItem {
  id: string;
  name: string;
  addedBy?: string;
  isCompleted: boolean;
}

export interface ShoppingList {
  id: string;
  name: string;
  creatorId: string;
  members: string[];
  createdAt: string;
  items: ShoppingItem[];
}

export interface ToastMessage {
  id: number;
  text: string;
  type: 'success' | 'error' | 'info';
}
