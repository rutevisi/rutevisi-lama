import { Formik} from "formik"
import * as Yup from 'yup'
import Link from 'next/link'
import { useState } from 'react'
import { register } from '../redux/actions/authAction'
import { connect } from 'react-redux'
import Head from 'next/head'
import { Eye, EyeOff } from 'react-feather'
import Input from '../components/form/Input'
import Field from '../components/form/Field'
import Label from "../components/form/Label";
import Button from '../components/form/Button'

const SignupSchema = () =>
    Yup.object().shape({
        fullname: Yup.string().required("Required"),
        email: Yup.string().email("Email is not valid").required("Required"),
        password: Yup.string().min(8, "Password is too short").required("Required"),
});

function Daftar({register, currentUser}){
    const errorMsg = currentUser.errorMessage
    const isLoading = currentUser.loading
    const [ passVisible, setPassVisible ] = useState(false)

    return(
        <>
            <Head>
                <title>Daftar - Personalitika.com</title>
            </Head>
            <div className="form-page">
                <div className="form-container">
                    <h1>Signup</h1>
                    {
                        errorMsg ? (
                            <div className="form-message">
                                {errorMsg ? errorMsg : ''}
                            </div>
                        ) : ''
                    }
                    <Formik
                    initialValues={{
                        fullname: "",
                        email: "",
                        password: "",
                    }}
                    validationSchema={SignupSchema()}
                    onSubmit={(values, { setSubmitting }) => {
                        register(values)
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
                                <Label htmlFor="fullname" error={touched.fullname && errors.fullname} ></Label>
                                <Input
                                type="text"
                                name="fullname"
                                id="fullname"
                                placeholder="Full Name"
                                {...getFieldProps("fullname")}
                                />
                            </Field>
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
                                Signup
                            </Button>
                            <p>Sudah punya akun? <Link href="/masuk"><a>Log In</a></Link></p>
                        </form>
                    )}
                    </Formik>
                </div> 
                </div>
                <style jsx>{`
                .input-icon{
                    position: absolute;
                    bottom: 7px;
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
                    padding: .3rem .5rem;
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

export default connect(state => state, {register})(Daftar);