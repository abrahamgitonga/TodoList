const taskInput =document.querySelector(".new-task #addTask");




let editId,
isEditedTask =false;

fetch( 'https://jsonplaceholder.typicode.com/todos').then((response)=>{
                // console.log(data);

                return response.json();

            }).then((data)=>{
                
                let data1 = ''

                // Completed data
                let completeData = data.filter((todo)=>todo.completed === true)
                completeData.map((values)=>{
                    data1+=`
                            <div class="completed-container">
                                <div class="content">
                                    <h4 class="completedTask">${values.title}</h4>
                                    <p class="task-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A obcaecati ipsam voluptate, excepturi sed animi ab rem eveniet nesciunt est officia eius quam tenetur ad accusantium perferendis id deserunt voluptates.</p>
                                </div>
                                <div class="actions">
                                    <button class="checkbox"><input type="checkbox" name="Completed" id=""></button>
                                    <div class="action-btns">
                                        <button class="delete"><img class="delete-img" src="/delete.png"></button>
                                        <button class="edit"><img class="edit-img" src="/edit.png"></button>
                                    </div>
                                </div>
                            </div>
                        `
                });
                document.getElementById("completeCON").innerHTML=data1;


                let data2 = ''
                // Incomplete data
                let incompleteData = data.filter((todo)=>todo.completed === false)
                incompleteData.map((values)=>{
                    data2+=`
                            <div class="incomplete-cont">
                                <div class="content">
                                    <h4 class="new-task">${values.title}</h4>
                                    <p class="task-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A obcaecati ipsam voluptate, excepturi sed animi ab rem eveniet nesciunt est officia eius quam tenetur ad accusantium perferendis id deserunt voluptates.</p>
                                </div>
                                <div class="actions">
                                    <button class="checkbox"><input type="checkbox" name="Completed" id=""></button>
                                    <div class="action-btns">
                                        <button class="delete"><img class="delete-img" src="/delete.png"></button>
                                        <button class="edit"><img class="edit-img" src="/edit.png"></button>
                                    </div>
                                </div>   
                            
                            </div>                          
                            
                            `
                });
                document.getElementById("tasks").innerHTML=data2;
                
            }).catch((err)=>{
                console.log(err)
})
       

// Function to display elements 
const disp = (element)=>{
    if(element.id=='add'){
        document.getElementById('newTask').style.display = 'flex'
        document.getElementById('tasks').style.display = 'none'
        document.getElementById('completeCON').style.display ='none'
    } else if(element.id=='comp'){
        document.getElementById('completeCON').style.display ='flex'
        document.getElementById('newTask').style.display = 'none'
        document.getElementById('tasks').style.display = 'none'

    } else if(element.id == 'incomp'){
        document.getElementById('tasks').style.display = 'flex'
        document.getElementById('newTask').style.display = 'none'
        document.getElementById('completeCON').style.display ='none'
    }
}
