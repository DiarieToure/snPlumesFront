const ValidationsRegister=(values)=> {
 let errors={}
    if (!values.name) {
        errors.name='nom requis'
}

if (!values.email) {
    errors.email='email requis'
}else if(
    !/\S+@\S+\.\S+/.test(values.email)){
    errors.email='email non valid'
}
if (!values.password) {
    errors.password='mot de passe requis'
}else if (values.password.lenght<5) {
    errors.password='saisir au moins 6 caracteres'
}
if (!values.confirm_password===values.password) {
    errors.confirm_password='mot de passe non conformes'

}
if (!values.tel) {
    errors.tel='numero requis'

}else if(!values.tel==='0-9'){
    errors.tel="Veuillez mettre des chiffres"

}
if (!values.adresse) {
    errors.adresse='adresse requis'

}
return errors;
}
export default ValidationsRegister;

