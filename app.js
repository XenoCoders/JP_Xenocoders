//ELEMENTS//
let elements = document.querySelectorAll(".btn2");

//EVENTS//
 elements.forEach((element) => {
    element.addEventListener('click', () => {
        let comd = element.dataset['element'];

         if(comd == "createLink" || comd == "insertImage" ){
            let url = prompt("Enter the Link here", 'https://');
            document.execCommand(comd, false, url);
        }
        else{
            document.execCommand(comd, false, null);
        } 

    });
}); 