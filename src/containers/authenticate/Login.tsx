import { Form, Input, Checkbox, Button } from 'antd'
import React, { use, useRef } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
import { IAuth } from '../../models/Auths'
import { useSigninMutation } from '../../service/auth'

type Props = {}

const Login = (props: Props) => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    const [signin, result] = useSigninMutation()
    const { register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IAuth>()
    const onSubmit: SubmitHandler<IAuth> = async (user) => {
        await signin(user).unwrap().then((response: any) => {
            console.log(response);
            localStorage.setItem("user", JSON.stringify(response))
            console.log(localStorage.getItem("user"));

            const data = localStorage.getItem("user")
            // if (!data) {
            //     return navigate("/auth")
            // }
            // else {
            //     const datauser = JSON.parse(data)
            //     const role = datauser.user.role
            //     if (role == 1) {
            //         return navigate("/admin")
            //     } else {
            //         return navigate("/")
            //     }
            // }
        })
    }
    return (
        <div>
        <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="User name / Email" {...register("email")}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password" {...register("password")}/>
				</div>
				<button className="button login__submit">
					<span onClick={handleSubmit(onSubmit)} className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
        </div>
    )
}

export default Login