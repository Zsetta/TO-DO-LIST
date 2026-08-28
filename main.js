const lista = document.querySelector(".lista");
const input = document.querySelector(".input");
const enviar = document.querySelector(".enviar");

const recorrer = () => {
    const deleteB = document.querySelectorAll(".deleteB");
    for(const del of deleteB)
    {
        del.addEventListener("click",(e)=>{
            e.target.parentElement.remove();
        });
    }
    for(const li of lista.children)
    {
    li.addEventListener("pointerdown",(e)=>{      
        e.target.classList.add("moving");
    });
    li.addEventListener("pointermove",(e)=>{
        e.preventDefault();
        let datos = e.target.getBoundingClientRect();
        let l = document.querySelector(".moving");
        
        if(e.clientY >= datos.y + datos.height/2)
        { 
            li.parentElement.insertBefore(l,e.target.nextElementSibling);
        }
        else
        {
            li.parentElement.insertBefore(l,e.target);
        }
    });
    li.addEventListener("pointerup",(e)=>{
        e.target.classList.remove("moving");
    });
    }
    
}

enviar.addEventListener("click",(e)=>{
    if(input.value.length > 0)
    {
        let li = document.createElement("LI");
        let deleteBtn = document.createElement("BUTTON");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.classList.add("deleteB");
        li.innerHTML = input.value;
        li.appendChild(deleteBtn);
        li.draggable = "true";
        lista.appendChild(li);
        input.value="";
        recorrer();
    }
});


recorrer();