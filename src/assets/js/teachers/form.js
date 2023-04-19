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

export function getFormData(){

    const teacher = {
        name : formElements.fields.name.value,
        description : formElements.fields.description.value,
        email : formElements.fields.email.value,
        date : formElements.fields.date.value,
    };
    return teacher;
    
}