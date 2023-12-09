import { showtasks } from "./tasks.js";
            
document.addEventListener('DOMContentLoaded', function() {

    const tasksarray=[];
    
    function addtasks(projName,tkName,dateVal){
        this.projName=projName;
        this.tkName=tkName;
        this.dateVal=dateVal;
    }
    const taskkdef= new addtasks("default","Cook","12/5/22");
    var projNamep="default";
    
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
    submitbutton.classList.add("addTaskSub");
    submitbutton.style.backgroundColor="#70035f"
    form.appendChild(namelabel);
    form.appendChild(nameinput);
    form.appendChild(datelabel); 
    form.appendChild(date);
    form.appendChild(submitbutton);
    tabSelec.appendChild(form);
    const projectAdd=document.querySelector('.butt')
    const formProjName=document.querySelector('.project')    

    const defaultsel=document.querySelector('.default');
    defaultsel.addEventListener('click',function(event){
        const taskDispSel=document.querySelector('.taskCont');
        taskDispSel.innerHTML="";
        projNamep="default";  
        console.log(projNamep);
        tasksarray.forEach(task => {
            if(task.projName==projNamep){
                const taskDisplay=document.querySelector('.taskCont');
                const taskInd=document.createElement('div');       
                taskInd.classList.add('taskInd');
                const taskNamLab=document.createElement('p');
                taskNamLab.textContent=`Task: ${task.tkName}`;
                const taskTimLab=document.createElement('p');
                taskTimLab.textContent=`Deadline:${task.dateVal} `;
                
                taskInd.appendChild(taskNamLab);
                taskInd.appendChild(taskTimLab);
                
                
                taskDisplay.appendChild(taskInd);
            }
        });
        });
    
            projectAdd.addEventListener('click',function(event){
        event.preventDefault();
        const projectName=formProjName.value;
        formProjName.value="";
        const projectList=document.querySelector('.allProjects')
        const newProj=document.createElement('div')
        newProj.classList.add('newProj');   
        newProj.textContent=projectName;
        projectList.appendChild(newProj);
       
        
        newProj.addEventListener('click',function(event){
            const taskDispSel=document.querySelector('.taskCont');
            taskDispSel.innerHTML="";
            projNamep=newProj.textContent;  
            console.log(projNamep);
            tasksarray.forEach(task => {
                if(task.projName==projNamep){
                    const taskDisplay=document.querySelector('.taskCont');
                    const taskInd=document.createElement('div');       
                    taskInd.classList.add('taskInd');
                    const taskNamLab=document.createElement('p');
                    taskNamLab.textContent=`Task: ${task.tkName}`;
                    const taskTimLab=document.createElement('p');
                    taskTimLab.textContent=`Deadline:${task.dateVal} `;
                    
                    taskInd.appendChild(taskNamLab);
                    taskInd.appendChild(taskTimLab);
                    
                    
                    taskDisplay.appendChild(taskInd);
                }
            });
            showtasks();
                              
            })
                
        }); 
        const addTk=document.querySelector('.addTask');
        addTk.addEventListener('click',()=>{
            const dialog=document.querySelector('.dialog');
            dialog.showModal();
            })       
            const submitButton2=document.querySelector('.submitButton');
            submitButton2.addEventListener('click',function(event){
                event.preventDefault();
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = 'myCheckbox';
                checkbox.value = 'checked';
                checkbox.classList.add("checkbox");
                
                
                const tkName=nameinput.value;
                const dateVal=date.value;
                const newTask= new addtasks(projNamep,tkName,dateVal);
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
                
                dialog.close();        
    });        
    

          
         
});
