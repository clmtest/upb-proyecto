// Utilidad para realizar validaciones con JS

export function validateForm(fieldConfigurations) {
  let isValid = true;
  removeErrorMessageElement();

  fieldConfigurations.forEach((fieldConfig) => {
    fieldConfig.validations.forEach((validationConfig) => {
        const currentFieldIsValid = validateField(fieldConfig.input, validationConfig)
        isValid = isValid && currentFieldIsValid; // Esta validando con lo que ya había, si es valido o no
    });
  });

  return isValid;
}

export function validateField(input, validationConfig) {
  const { errorId, errorMessage, validationFunction } = validationConfig;
  const fieldIsValid = validationFunction(input.value);

  if (!fieldIsValid) {
    input.classList.add('is-invalid') // Para que busque a el mismo nivel haya un elemento con la clases invalid feedback, y le pone display block
    const errorMessageElement = createErrorMessageElement(
      errorId,
      errorMessage
    );
    input.insertAdjacentElement("afterend", errorMessageElement); // Inserta el mensaje debajo del campo
  }else{
    input.classList.add('is-valid');
  }

  return fieldIsValid;
}

/**
 * Crea un elemento de mensaje de error para ser insertado después de que un campo no es valido
 * @private
 * @param {string} errorId - El ID de elemento del mensaje de error
 * @param {string} errorMessage - El mensaje de error que se muestra al usuario
 * @returns {HTMLDivElement} Retorna el elemento que contiene el mensaje de error
 */
function createErrorMessageElement(errorId, errorMessage) {
  const errorMessageElement = document.createElement("div");
  errorMessageElement.classList.add("invalid-feedback", 'text-start');
  errorMessageElement.setAttribute("id", errorId);
  errorMessageElement.textContent = errorMessage;
  return errorMessageElement;
}

/**
 * Elimina todos los elementos de mensaje de error asociados a un input 
 * y restablece su estado visual (elimina la clase is-invalid que coloca el borde rojo).
 * la funcion continua eliminando los elementos mensaje de error que son adyacentes (hermanos)
 * mientras se encuentra la clase .invalid-feedback
 * @param {HTMLinputElement} input - el campo para el cual se eliminaran los mensajes de error. 
 */
export function removeErrorMessageElement() {
    const errorMessageElement = document.querySelectorAll('.invalid-feedback');
    errorMessageElement.forEach((element) => {
    element.remove();
});

    removeErrorClassNameFields('is-invalid');

}

export function removeErrorClassNameFields(className){
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach((input) => {
        input.classList.remove(className)
    });
}


export function removeInputErrorMessage(input) {

    let errorMessageElement = input.nextElementSibling;
    while(errorMessageElement && errorMessageElement.classList.contains('invalid-feedback')){
        errorMessageElement.remove();
        input.classList.remove('is-invalid');
        errorMessageElement = input.nextElementSibling
    }


}
