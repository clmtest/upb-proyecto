// Se encarga de la interacción de JS con html

import {formElements,getFormData} from './form'
import {createTeacher} from './repositorio'

export function listeners(){
    window.addEventListener('load', () => {
        listenFormSubmitEvent();
    });
}

function listenFormSubmitEvent(){
    formElements.form.addEventListener('submit', (event) => {
        event.preventDefault();
        createTeacher(getFormData())        
    });
}
