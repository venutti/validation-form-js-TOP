import Form from "./components/Form.js";
// Las clases Inputs las hago para tener organizado
// el código referente a eso.
// Para cada una necesito el id, y adentro
// busco el Input y el SpanError.
// En el evento focusout, valido el input y cambio
// el mensaje de error de ser necesario

// Tengo inputs que no pueden estar vacíos
// Otros que solo pueden tener letras
// Otros que solo pueden tener números
// Otros que tienen un tamaño definido
// Otros que tienen el formato de un email
// Otros que chequean contraseñas
// Y otros que chequean que las contraseñas sean iguales

/*
Email ->  *No puede estar vacío
          *Tiene el formato de un email ( @ | . )
          y letras entre esos caracteres (al menos 1)

Pais -> *No puede estar vacío
        *Solo puede tener letras

ZipCode ->  *No puede estar vacío
            *Solo puede tener números
            *Tiene un tamaño de 4 números

Password -> *No puede estar vacío
            *Tiene formato de contraseña
            (al menos un símbolo, una mayuscula. una minúscula y un número)

ConfirmPassword ->  *Tiene que ser igual a la anterior            
*/

/*
Creo clases Inputs, como 
InputMail, InputCountry, InputZipcode, InputPassword, InputConfirmPassword
Cuando instancio el form, le tengo que pasar id de los
inputs para crear su debida clase.
Tengo, entonces, Form.createInput[***]("#id")
Tambien tengo new Form("#id").
Y el mismo sabe que en submit chequea por la validez de todos los inputs
Y los inputs saben qué mensaje displayear cuando son
focusout si es inválido.
Form podría tener un array de inputs,
y los inputs podrían entender el mensaje isValid().
*/
const changeLayout = () => {
  const formElement = document.querySelector("#form");
  const highFiveElement = document.querySelector("#high-five");
  formElement.classList.add("hide");
  highFiveElement.classList.remove("hide");
};

const form = new Form("#form", changeLayout);
form.init();
form.addInputMail("#email", "#error-email");
form.addInputCountry("#country", "#error-country");
form.addInputZipcode("#zipcode", "#error-zipcode");
form.addInputPassword("#password", "#error-password");
form.addInputConfirmPassword(
  "#confirm-password",
  "#error-confirm-password",
  "#password"
);
