import { addTask } from "./tasks.js";
            
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    // It will run after the HTML is fully loaded.
    const tasksarray=[];

    function addtasks(tkName,dateVal){
        this.tkName=tkName;
        this.dateVal=dateVal;
    }
    const taskkdef= new addtasks('Make that thing','23/13/9999');
    tasksarray.push(taskkdef);
    console.log(tasksarray);
            const dialog=document.querySelector('.dialog');
            const tab=document.createElement('div');
            tab.classList.add('tab');
            dialog.appendChild(tab);
            const tabSelec=document.querySelector('.tab');
            const form=document.createElement('form');
            const namelabel=document.createElement('label')
            namelabel.textContent="Task Name";
            const nameinput=document.createElement('input');
            nameinput.setAttribute('type','text');
            nameinput.setAttribute('name','taskName');
            const datelabel=document.createElement('label')
            datelabel.textContent="Deadline";
            const date=document.createElement('input')
            date.setAttribute('type','date');
            date.setAttribute('name','date');
            const submitbutton=document.createElement('button')
            submitbutton.classList.add('submitButton');
            submitbutton.textContent="Add Task";
            submitbutton.setAttribute('type', 'submit');
            form.appendChild(namelabel);
            form.appendChild(nameinput);
            form.appendChild(datelabel); 
            form.appendChild(date);
            form.appendChild(submitbutton);
            tabSelec.appendChild(form);
            const projectAdd=document.querySelector('.butt')
            const formProjName=document.querySelector('.project')

    projectAdd.addEventListener('click',function(event){
        event.preventDefault();
        const projectName=formProjName.value;
        formProjName.value="";
        const projectList=document.querySelector('.allProjects')
        const newProj=document.createElement('div')
        newProj.classList.add('newProj');   
        newProj.textContent=projectName;
        projectList.appendChild(newProj);
        const newProjSelect=document.querySelector('.newProj');


        newProjSelect.addEventListener('click',function(event){
            const taskDispSel=document.querySelector('.taskCont');
            taskDispSel.innerHTML="";
        });
           
                
    });
            const addTk=document.querySelector('.addTask');
            addTk.addEventListener('click',()=>{
            const dialog=document.querySelector('.dialog');
            dialog.showModal();
                    
            })    
            const submitButton2=document.querySelector('.submitButton');
            submitButton2.addEventListener('click',function(event){
                event.preventDefault();
                dialog.close();
                const tkName=nameinput.value;
                const dateVal=date.value;
                const newTask= new addtasks(tkName,dateVal);
                tasksarray.push(newTask);
                console.log(tasksarray);
                nameinput.value='';
                date.value='';
                const taskDisplay=document.querySelector('.taskCont');
                const taskInd=document.createElement('div');
                taskInd.classList.add('taskInd');
                const taskNamLab=document.createElement('p');
                taskNamLab.textContent=`Task: ${newTask.tkName}`;
                const taskTimLab=document.createElement('p');
                taskTimLab.textContent=`Deadline:${newTask.dateVal} `;
                taskInd.appendChild(taskNamLab);
                taskInd.appendChild(taskTimLab);
                taskDisplay.appendChild(taskInd);
                
                })
});
