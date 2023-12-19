import { showtasks } from "./tasks.js";
            
document.addEventListener('DOMContentLoaded', function() {

    const tasksarray=[];
    
    function addtasks(projName,tkName,dateVal){
        this.projName=projName;
        this.tkName=tkName;
        this.dateVal=dateVal;
    }
    var projNamep="default";
    
    
    
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

    
    function displayProjects(){
        const projectList=document.querySelector('.allProjects');
        console.log(projectList);

        const storedProjects=JSON.parse(localStorage.getItem("projects"));
        if (storedProjects){
            storedProjects.forEach((project) => {
                const newProj=document.createElement('div')
                newProj.classList.add('newProj');   
                newProj.textContent=project;
                projectList.appendChild(newProj);
                
                
                newProj.addEventListener('click',function(event){
                const taskDispSel=document.querySelector('.taskCont');
                taskDispSel.innerHTML="";
                projNamep=newProj.textContent;  
                console.log(projNamep);
                displayTasks(projNamep);
                                            
            })
            });
        }
    }    
    function loadfromLocal(){
        
        const storedProjects = JSON.parse(localStorage.getItem("projects"));
        if (storedProjects) {
            displayProjects();
        }
        const storedtasks=JSON.parse(localStorage.getItem("tasks"));
        
        if (storedtasks){
            
            tasksarray.push(...storedtasks);
            console.log(tasksarray);
            displayTasks(projNamep);
           
        }

    }
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
            displayTasks(projNamep);
                                          
            })
            const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
            storedProjects.push(projectName);
            localStorage.setItem("projects", JSON.stringify(storedProjects));    
                
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
                
                localStorage.setItem("tasks",JSON.stringify(tasksarray));
                
                
                nameinput.value='';
                date.value='';
                displayTasks(projNamep);
                
                dialog.close();        
    });
    function displayTasks(projNamep){ 
        const taskDispSel=document.querySelector('.taskCont');
        taskDispSel.innerHTML="";       
        tasksarray.forEach((task,index) => {
            if(task.projName==projNamep){
                
                const taskDisplay=document.querySelector('.taskCont');
                const taskInd=document.createElement('div');       
                taskInd.classList.add('taskInd');
                const taskNamLab=document.createElement('p');
                taskNamLab.textContent=`Task: ${task.tkName}`;
                const taskTimLab=document.createElement('p');
                taskTimLab.textContent=`Deadline:${task.dateVal} `;
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = `taskCheckbox`;
                checkbox.value = 'checked';
                checkbox.classList.add('checkbox');
                const deleteButton=document.createElement('button');
                
                deleteButton.classList.add('deleteButton');
                deleteButton.innerHTML = '<i class="fa fa-trash" style="font-size:20px;color:red;" aria-hidden="true"></i> ';
                deleteButton.addEventListener('click',()=>{
                    removeTask(index);
                })
                checkbox.addEventListener('change', function() {
                if (this.checked) {
                    // Apply styling when checkbox is checked
                    taskNamLab.style.textDecoration = 'line-through';
                    taskTimLab.style.textDecoration = 'line-through';
                } else {
                    // Remove styling when checkbox is unchecked
                    taskNamLab.style.textDecoration = 'none';
                    taskTimLab.style.textDecoration = 'none';
                }
            });
            
                taskInd.appendChild(checkbox);
                taskInd.appendChild(taskNamLab);
                taskInd.appendChild(taskTimLab);
                taskInd.appendChild(deleteButton);
                
                taskDisplay.appendChild(taskInd);
            }
        });
    }
    function removeTask(index){
        tasksarray.splice(index,1);
        console.log(tasksarray);
        localStorage.setItem("tasks", JSON.stringify(tasksarray));
        displayTasks(projNamep);
    }
    const defaultsel=document.querySelector('.default');
    defaultsel.addEventListener('click',function(event){
        const taskDispSel=document.querySelector('.taskCont');
        taskDispSel.innerHTML="";
        projNamep="default";  
        console.log(projNamep);
        displayTasks(projNamep);
        });
    
    displayTasks(projNamep);
    
    loadfromLocal();      
    //localStorage.clear();
});
