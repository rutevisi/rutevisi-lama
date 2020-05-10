import { Formik, Form} from "formik"
import * as Yup from 'yup'

import Input from '../components/form/Input'
import Field from '../components/form/Field'
import Label from "../components/form/Label";
import Button from '../components/form/Button'

const SignupSchema = () =>
  Yup.object().shape({
    username: Yup.string().min(3, "Username is too short").required("Required"),
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
                        username: "",
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
                                <Label htmlFor="username" error={touched.username && errors.username} >Username</Label>
                                <Input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                {...getFieldProps("username")}
                                />
                            </Field>
                            <Field>
                                <Label htmlFor="email" error={touched.email && errors.email} >Email</Label>
                                <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                {...getFieldProps("email")}
                                />
                            </Field>
                            <Field>
                                <Label htmlFor="password" error={touched.password && errors.password} >Password</Label>
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
                        </form>
                    )}
                    </Formik>
                </div> 
                </div>
                <style jsx>{`
            
                .form-page{
                    width:100%;
                    height:100vh;

                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
                .form-container{
                    margin: 0 auto;
                    display:flex;
                    flex-direction:column;
                }
                h1{
                    margin:0 auto;
                }
                `}</style>
            <div/>
        </>
    )
}
