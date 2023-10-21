import { addTask } from "./tasks.js";
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    // It will run after the HTML is fully loaded.

    const projectAdd=document.querySelector('.butt')
    const formProjName=document.querySelector('.project')

    projectAdd.addEventListener('click',function(event){
        event.preventDefault();
        const projectName=formProjName.value;
        formProjName.value="";
    });
    const addTk=document.querySelector('.addTask');
    addTk.addEventListener('click',()=>{
        addTask();
    })
});
