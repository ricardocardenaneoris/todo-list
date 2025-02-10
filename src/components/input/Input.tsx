import React from 'react';
import { inputClassNames } from './inputStyles';

export type InputProps = {
    label: string,
    error?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement> ,value: string) => void;
    value: string;
}

const Input = (props: InputProps) => {
    const { label, error, onChange, value } = props;
    const classes = inputClassNames();
    return (
        <div>
            <label className={classes.label}>{label}</label>
            <input
                className={classes.input}
                value={value}
                onChange={(event) => onChange(event, event.target.value)}
            />
            {error && <span className={classes.error}>{error}</span>}
        </div>
    );
}

Input.displayName = 'Input';

export { Input }