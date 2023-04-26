// Encargado de la interacción y configuración del formulario

/**
 * Este objeto contiene las referencias a los elementos clave del formulario
 */
export const formElements = {
    form: document.getElementById('teachersForm'),
    fields:{
        name: document.getElementById('txtName'),
        description: document.getElementById('txtDescription'),
        email: document.getElementById('txtEmail'),
        date: document.getElementById('txtDate'),
    }
};

/**
 * Array de objetos que contiene información para las validaciones
 * cada objeto contiene una referencia a cada campo, un array de objetos
 * de validaciones que tendrá, el ID del error, el mensaje y la función de validaciones.
 * Las validaciones se van a generar de forma dinámica 
 */

export const fieldConfigurations = [
    {
        input: formElements.fields.name,
        validations: [
            {
                errorId: `${formElements.fields.name.id}Required`,
                errorMessage: 'El nombre es obligatorio',
                // Las validaciones retornaran un False cuando debe mostrar el mensaje de error 
                // True cuando no debe mostrar el mensaje de error
                validationFunction: (value) => {
                    return value.trim() !== '';
                }

            }
        ]
    },

    {
        input: formElements.fields.description,
        validations: [
            {
                errorId: `${formElements.fields.description.id}Required`,
                errorMessage: 'Es obligatoria una descripción',
                // Las validaciones retornaran un False cuando debe mostrar el mensaje de error 
                // True cuando no debe mostrar el mensaje de error
                validationFunction: (value) => {
                    return value.trim() !== '';
                }

            }
        ]
    },

    {
        input: formElements.fields.email,
        validations: [
            {
                errorId: `${formElements.fields.email.id}Required`,
                errorMessage: 'Es correo electrónico es obligatorio',
                // Las validaciones retornaran un False cuando debe mostrar el mensaje de error 
                // True cuando no debe mostrar el mensaje de error
                validationFunction: (value) => {
                    return value.trim() !== '';
                }

            }
        ]
    },

    {
        input: formElements.fields.email,
        validations: [
            {
                errorId: `${formElements.fields.email.id}Pattern`,
                errorMessage: 'El correo electrónico no cumple con el formato correcto',
                // Las validaciones retornaran un False cuando debe mostrar el mensaje de error 
                // True cuando no debe mostrar el mensaje de error
                validationFunction: (value) => {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
                }

            }
        ]
    },

    {
        input: formElements.fields.date,
        validations: [
            {
                errorId: `${formElements.fields.date.id}Required`,
                errorMessage: 'La fecha es obligatoria',
                // Las validaciones retornaran un False cuando debe mostrar el mensaje de error 
                // True cuando no debe mostrar el mensaje de error
                validationFunction: (value) => {
                    return value.trim() !== '';
                }

            }
        ]
    },

];

export function getFormData(){

    /**
     * const formData = new FormData(formElements.form);
     * return Object.fromEntries(formData.entries());
     */

    const teacher = {
        id: new Date().getTime(), 
        name : formElements.fields.name.value,
        description : formElements.fields.description.value,
        email : formElements.fields.email.value,
        date : formElements.fields.date.value,
    };
    return teacher;
};

export function resetForm(){ // función para resetear el form cada vez que ingreso un profesor
    formElements.form.reset();
}

