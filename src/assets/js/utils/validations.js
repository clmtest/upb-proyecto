// Utilidad para realizar validaciones con JS

export function validateForm(fieldConfigurations) {
  let isValid = true;

  fieldConfigurations.forEach((fieldConfig) => {
    fieldConfig.validations.forEach((validationConfig) => {
        const currentFieldIsValid = validateField(fieldConfig.input, validationConfig)
        isValid = isValid && currentFieldIsValid; // Esta validando con lo que ya había, si es valido o no
    });
  });

  return isValid;
}

function validateField(input, validationConfig) {
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
  errorMessageElement.classList.add("invalid-feedback");
  errorMessageElement.setAttribute("id", errorId);
  errorMessageElement.textContent = errorMessage;
  return errorMessageElement;
}

function removeErrorMessageElement() {}

function removeInputErrorMessage(input) {}
