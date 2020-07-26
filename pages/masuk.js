import { Formik} from "formik"
import * as Yup from 'yup'
import Link from 'next/link'
import { connect } from 'react-redux'
import { authenticate } from '../redux/actions/authAction'
import { Eye, EyeOff } from 'react-feather'

import Input from '../components/form/Input'
import Field from '../components/form/Field'
import Label from "../components/form/Label";
import Button from '../components/form/Button'
import { useState } from "react"

// Cek apakah input valid atau tidak menggunakan yup
const SignupSchema = () =>
    Yup.object().shape({
        email: Yup.string().email("Email is not valid").required("Required"),
        password: Yup.string().min(8, "Password is too short").required("Required"),
});

function Masuk({authenticate, currentUser}){
    const errorMsg = currentUser.errorMessage
    const isLoading = currentUser.loading
    const [ passVisible, setPassVisible ] = useState(false)

    return(
        <>
            <div className="form-page">
                <div className="form-container">
                    <h1>Login</h1>
                    {
                        errorMsg ? (
                            <div className="form-message">
                                {errorMsg ? errorMsg : ''}
                            </div>
                        ) : ''
                    }
                    <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={SignupSchema()}
                    onSubmit={(values, { setSubmitting }) => {
                        authenticate(values)
                    }}
                    >
                    {({
                        errors,
                        touched,
                        values,
                        isSubmitting,
                        handleSubmit,
                        isValid,
                        getFieldProps,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Field>
                                <Label htmlFor="email" error={touched.email && errors.email} ></Label>
                                <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                {...getFieldProps("email")}
                                />
                            </Field>
                            <Field>
                                <Label htmlFor="password" error={touched.password && errors.password} ></Label>
                                <Input
                                type={passVisible ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder="Password"
                                {...getFieldProps("password")}
                                />
                                <span className="input-icon" onClick={() => setPassVisible(!passVisible)}>{ passVisible ? <EyeOff className="svg"/> : <Eye className="svg"/> }</span>
                            </Field>
                            <Button
                            disabled={isLoading ? isLoading : false|| !isValid}
                            loading={isLoading ? isLoading.toString() : false.toString()}
                            >
                                Login
                            </Button>
                            <p>Belum punya akun? <Link href="/daftar"><a>Signup</a></Link></p>
                        </form>
                    )}
                    </Formik>
                </div> 
                </div>
                <style jsx>{`
                .input-icon{
                    position: absolute;
                    top: 10px;
                    right: 6px;
                    cursor:pointer;
                }
                p{
                    text-align: center;
                    color: #888;
                    font-size: .85rem;
                    margin-top: 1rem;
                }
                .form-button{
                    margin-top:1.5rem;
                }
                .form-page{
                    width:100%;
                    height:100vh;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
                a{
                    color:#000;
                    text-decoration:none;
                    font-weight:bold;
                }
                .form-container{
                    margin: 0 auto;
                    display:flex;
                    flex-direction:column;
                    padding:2.5rem 3rem;
                    border-radius:8px;
                    box-shadow:8px 8px 16px #ededed, 
                    -8px -8px 16px #ffffff;
                }
                .form-message{
                    background: #ffe2e6;
                    padding: .6rem .5rem;
                    border: 1px solid #ffa0a0;
                    font-size: .8rem;
                    text-align: center;
                    color: red;
                    border-radius: .3rem;
                    margin-top: 1rem;
                }
                form{
                    display: flex;
                    flex-direction: column;
                }
                h1{
                    margin:0 auto;
                }
                `}</style>
            <div/>
        </>
    )
}

export default connect(state => state, {authenticate})(Masuk);