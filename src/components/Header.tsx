import { HeaderContainer, IconCartWrapper, ItemCounter } from "@/styles/pages/app"

import Image from 'next/image'
import { ShoppingCart } from "lucide-react"
import logoImg from '../assets/logo.svg'
import { useContext } from "react"
import { CartContext } from "@/contexts/cart"

export function Header() {
    const { cartItems } = useContext(CartContext)
    
    return(
        <HeaderContainer>
            <Image src={logoImg} alt="" />
            <IconCartWrapper>
                <ShoppingCart size={16} />
                <ItemCounter>
                    <span>{cartItems.length}</span>
                </ItemCounter>
            </IconCartWrapper>
        </HeaderContainer>
    )
}