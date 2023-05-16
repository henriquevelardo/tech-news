import Input from "../Input/Input"

const Form = ({onSubmit}) => {

    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()

        const name = event.target[0].value
        const email = event.target[1].value

        onSubmit({name, email})
    }
    
    return <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20">
        <Input type="text" required placeholder="Informe seu nome..." />
        <Input type="email" required placeholder="Infome seu email..."/>
        <button type="submit" className="alura-button">Seguir</button>
    </form>
}

export default Form;