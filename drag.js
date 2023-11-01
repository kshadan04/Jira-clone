
const containers = document.querySelectorAll(".container");

const dragState = {
    drageElement : null,
    parentContainer : null
}


function onDragStart(event){
    const dragCard = event.target;

    dragState.drageElement = dragCard;
    dragState.parentContainer = dragCard.parentNode;
}

function onDragOver(event){
    const currentContainer = event.target.closest(".container");
    if(currentContainer.id === dragState.parentContainer.id){
        return;
    }
    event.preventDefault();

}

function onDrop(event){
   const dropContainer = event.target.closest(".container");
   dropContainer.appendChild(dragState.drageElement);
}

for(let i=0; i<containers.length; i++){
    containers[i].addEventListener("dragover",onDragOver);
    containers[i].addEventListener("drop", onDrop);
}

// 39 min jira 2