import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

import { Container } from "@/styles/pages/app";

import { CartContext, CartContextProvider } from "@/contexts/cart";
import { Header } from "@/components/Header";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
    

    return (
        <CartContextProvider>
            <Container>
                <Header />

                <Component {...pageProps} />
            </Container>
        </CartContextProvider>
    )
}
