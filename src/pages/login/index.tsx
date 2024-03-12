import { FormHeader } from "../../components/formHeader"
import { LogInForm } from "../../components/loginForm"

function LogIn() {
    return (
        <section className="centered-section-position medium-section-dimensions section-colors">
            <FormHeader pathTo={"/register"} linkText={"I want to create an account"} formType={'Log in'} message={"Already have an account? Sign in here!"}/>
            <LogInForm />
        </section>
    )
}

export { LogIn }