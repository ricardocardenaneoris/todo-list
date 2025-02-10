import React from "react"
import { buttonClassNames } from './buttonStyles'

export type ButtonProps =  {
    variant: 'primary' | 'secondary',
    inverse?: boolean,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    const { variant = "primary", inverse = false, ...rest } = props
    const classes = buttonClassNames(variant, inverse)
    return (
        <button className={classes} {...rest}>Click me</button>
    )
}

Button.displayName = 'Button'

export { Button }