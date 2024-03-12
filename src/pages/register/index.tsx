import { FormHeader } from "../../components/formHeader"
import { RegistrationForm } from "../../components/registrationForm"

function Register() {
    return (
        <section className="centered-section-position medium-section-dimensions section-colors">
            <FormHeader pathTo={"/login"} linkText={"I already have an account"} formType={'Sign up'} message={"Don't have an account yet? Register here!"}/>
            <RegistrationForm />
        </section>
    )
}

export { Register }