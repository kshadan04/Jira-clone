const createIssue = document.getElementById("create-issue");
const issueInput = document.getElementById("issue-input");
createIssue.addEventListener("click", onCreateClick);

issueInput.addEventListener("blur",onBlurCreateIssueInput);
issueInput.addEventListener("keyup",onEnterInput);

const todo = document.getElementById("todo");


function toggleCreateIssueOption(){
    createIssue.classList.toggle("hide");
    issueInput.classList.toggle("hide");

   // if text area is visible to the user
    if(!issueInput.classList.contains("hide")){
          // for blinking the cursor in textArea
        issueInput.focus();
    }
}
function onCreateClick(){
    toggleCreateIssueOption();
}

function onBlurCreateIssueInput(){
    toggleCreateIssueOption();
}




function onEnterInput(e){
    if(e.keyCode === 13){
        const issueName = issueInput.value;
        if(!issueName){
            return;
        }

        /*
        <div class="card">
                <span>UI for excalidraw</span>
                <span class="material-icons">delete</span>
            </div>
        */

        const issueCard = document.createElement("div");
        issueCard.className = "card";

        issueCard.innerHTML = `
                <span>${issueName}</span>
                <span class="material-icons" onClick="deleteCard(this)">delete</span>
        `;

        // make sure to the card is draggable
        issueCard.draggable = true;
        issueCard.addEventListener("dragstart", onDragStart);

        issueInput.value = "";
        todo.appendChild(issueCard);
        issueInput.blur();
    }
}

function deleteCard(deleteBtn){
    const card = deleteBtn.parentNode;
    card.remove();
}