import { Input } from "../input/input"
import type { SigninProps } from "./types";
import { useForm } from "../../hooks";

const initialState = {
    email: '',
    password: ''
}

export const Signin = ({ onSubmit }: SigninProps) => {
    const { handleChange, handleSubmit } = useForm(initialState, onSubmit);

    return (
        <>
            <h2>Signin</h2>
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <Input 
                    name="email"
                    type='email'
                    placeholder={'example@example.com'}
                    label={'Email'}
                    description={'Enter your email'}
                />
                <Input 
                    name="password"
                    type='password'
                    placeholder={'Authentication password'}
                    label={'Password'}
                    description={'Enter your password'}
                />
                <button type='submit' style={{"marginTop": "15px"}}>Sign in</button>
            </form>
        </>
  )
}