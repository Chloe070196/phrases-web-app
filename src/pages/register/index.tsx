import { FormHeader } from "../../components/form-header"
import { RegistrationForm } from "../../components/registration-form"

function Register() {
    return (
        <section className="centered-section-position medium-section-dimensions section-colors">
            <FormHeader pageLinkText={"I already have an account"} formType={'Sign up'} message={"Don't have an account yet? Register here!"}/>
            <RegistrationForm />
        </section>
    )
}

export { Register }