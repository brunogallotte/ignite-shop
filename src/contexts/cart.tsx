import { ReactNode, createContext, useState } from "react"

interface CartItemsState {
    priceId: string,
    quantity: number
}

interface CartContextType {
    cartItems: CartItemsState[]
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItemsState[]>([])

    return(
        <CartContext.Provider value={{ cartItems }}>
            {children}
        </CartContext.Provider>
    )
}