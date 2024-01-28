import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',
})

export const HeaderContainer = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
})

export const IconCartWrapper = styled('div', {
    position: 'relative',
    padding: '1rem',
    background: '$gray800',
    borderRadius: 8,
    cursor: 'pointer',
    alignItems: 'center',

    img: {
        width: '1.5rem',
        height: '1.5rem'
    }
})

export const ItemCounter = styled('div', {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.75rem',
    top: -6,
    right: -6,
    width: '0.5rem',
    height: '0.5rem',
    background: '$green300',
    borderRadius: '50%',
})