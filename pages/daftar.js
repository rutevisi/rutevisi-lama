import { Formik} from "formik"
import * as Yup from 'yup'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

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

export default () => {
    const [errorMsg, setErrorMsg] = useState();
    const router = useRouter();

    return(
        <>
            <div className="form-page">
                <div className="form-container">
                    <h1>Signup</h1>
                    {
                        errorMsg ? (
                            <div className="form-message">
                                {errorMsg}
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
                        axios.post(`/api/user/add`, values)
                            .then(res => {
                                router.push('/')
                            })
                            .catch(err => setErrorMsg(err.response.data.msg))

                        setSubmitting(false)
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
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                {...getFieldProps("password")}
                                />
                            </Field>
                            <Button
                            disabled={isSubmitting || !isValid}
                            loading={isSubmitting.toString()}
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