import { Formik} from "formik"
import * as Yup from 'yup'
import Link from 'next/link'

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

    const handleSubmit = async (values, context) => {
        console.log(context)
    }

    return(
        <>
            <div className="form-page">
                <div className="form-container">
                    <h1>Signup</h1>
                    <Formik
                    initialValues={{
                        fullname: "",
                        email: "",
                        password: "",
                    }}
                    validationSchema={SignupSchema()}
                    onSubmit={handleSubmit}
                    >
                    {({
                        errors,
                        touched,
                        values,
                        isSubmitting,
                        isValid,
                        getFieldProps,
                    }) => (
                        <form>
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
                            <p>Sudah punya akun? <Link href="/login"><a>Log In</a></Link></p>
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