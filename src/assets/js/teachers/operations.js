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

    if (arrayTeachers.length > 0){

    arrayTeachers.forEach((teacher) => {

        //Destructuracion: Convertir un Objeto en variables

        const {id, name, description, email, date} = teacher;

        // Creo la fila
        const row = document.createElement('tr');
        row.classList.add('align-middle')

        // Creo las columnas de la tabla 
        const colId = document.createElement('td');
        colId.textContent = id;

        const colName = document.createElement('td');
        colName.textContent = name;
        colId.classList.add('text-center'); // Class list: para agregar lista de clases 

        const colDescription = document.createElement('td');
        colDescription.textContent = description;

        const colEmail = document.createElement('td');
        colEmail.textContent = email;

        const colDate = document.createElement('td');
        colDate.textContent = date;

        const colButtons = document.createElement('td');
        colButtons.classList.add('text-center');

        //Botón editar
        const editButton = document.createElement('button');
        editButton.classList.add('btn', 'btn-primary', 'btn-edit', 'm-1');
        editButton.dataset.id = id;
        editButton.setAttribute('title', 'Editar')

        const editIcon = document.createElement('em');
        editIcon.classList.add('fa', 'fa-pencil');
        editButton.appendChild(editIcon);

        colButtons.appendChild(editButton);

        //Botón delete
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn','btn-danger','btn-delete', 'm-1');
        editButton.dataset.id = id;
        deleteButton.setAttribute('title', 'Eliminar')

        const deleteIcon = document.createElement('em');
        deleteIcon.classList.add('fa','fa-trash');
        deleteButton.appendChild(deleteIcon);
     
        colButtons.appendChild(deleteButton);

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

    } else {
        const rowEmpty = document.createElement('tr');
        const colEmpty = document.createElement('td');
        colEmpty.setAttribute('colspan', '6'); // Significa que el td va tomas las 6 posiciones
        colEmpty.textContent = 'No se encuentran registros disponibles';
        colEmpty.classList.add('text-center');
        rowEmpty.appendChild(colEmpty);

        tbody.appendChild(rowEmpty); // Agregamos al body
    }
    
}
