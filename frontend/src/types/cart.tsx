import Item from "./Item";

export type CartItem = Item & {
  count: number;
  size: string;
};

type CartList = CartItem[];

export default CartList;
