// Se encarga de la interacción de JS con html

import {formElements,getFormData} from './form'
import {createTeacher, readTeachers} from './repositorio'

export function listeners(){
    window.addEventListener('load', () => {
        listenFormSubmitEvent();
        listTeachers();
    });
}

function listenFormSubmitEvent(){
    formElements.form.addEventListener('submit', (event) => {
        event.preventDefault();
        createTeacher(getFormData()) 
        listTeachers()       
    });
}

function listTeachers(){
    const arrayTeachers = readTeachers();
    const tbody = document.querySelector('#tblTeachers tbody');
    tbody.innerHTML = ''; // Borre todo lo que haya por dentro

    arrayTeachers.forEach((teacher, index) => {
        // Creo la fila
        const row = document.createElement('tr');

        // Creo las columnas de la tabla 
        const colId = document.createElement('td');
        colId.textContent = index;

        const colName = document.createElement('td');
        colName.textContent = teacher.name;

        const colDescription = document.createElement('td');
        colDescription.textContent = teacher.description;

        const colEmail = document.createElement('td');
        colEmail.textContent = teacher.email;

        const colDate = document.createElement('td');
        colDate.textContent = teacher.date;

        const colButtons = document.createElement('td');
        

        // Agrego columnas a la fila 
        row.appendChild(colId)
        row.appendChild(colName)
        row.appendChild(colDescription)
        row.appendChild(colEmail)
        row.appendChild(colDate)
        row.appendChild(colButtons)

        // Agrego la fila al body
        tbody.appendChild(row)
    });
}
