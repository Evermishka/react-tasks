import { TextInput } from "../text-input/text-input"
import type { SignupProps } from "./types";
import { useForm } from "../../hooks";
import { RadioInput } from "../radio-input/radio-input";
import { RadioInputGroup } from "../radio-input-group/radio-input-group";

const initialState = {
    user_name: '',
    nickname: '',
    email: '',
    gender: '',
    password: ''
}

export const Signup = ({ onSubmit }: SignupProps) => {
    const { handleChange, handleSubmit } = useForm(initialState, onSubmit);

    return (
        <>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <TextInput 
                    name="user_name"
                    type='text'
                    placeholder={'Ivan'}
                    label={'Name'}
                    description={'Enter your name'}
                />
                <TextInput 
                    name="nickname"
                    type='text'
                    placeholder={'Nickname'}
                    label={'Nickname'}
                    description={'Enter your nickname'}
                    icon={<span>@</span>}
                />
                <TextInput 
                    name="email"
                    type='email'
                    placeholder={'example@example.com'}
                    label={'Email'}
                    description={'Enter your email'}
                />
                <RadioInputGroup title="Enter your gender">
                    <RadioInput 
                        name="gender"
                        value="male"
                        label={'Male'}
                    />
                    <RadioInput 
                        name="gender"
                        value="female"
                        label={'Female'}
                    />
                </RadioInputGroup>
                <TextInput 
                    name="password"
                    type='password'
                    placeholder={'Authentication password'}
                    label={'Password'}
                    description={'Enter your password'}
                />
                <TextInput 
                    name="password-repeat"
                    type='password'
                    placeholder={'Authentication password'}
                    label={'Password repeat'}
                    description={'Repeat your password'}
                />
                <button type='submit' style={{"marginTop": "15px"}}>Sign up</button>
            </form>
        </>
  )
}