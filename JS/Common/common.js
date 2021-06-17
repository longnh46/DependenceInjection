
document.addEventListener("DOMContentLoaded", function(event) { 
    var index = new Index();
  });
class Index {
    constructor() {
        this.InitEvent();
        this.LoadData();
    }
    InitEvent(){
        document.querySelector("#addStudent").addEventListener("click",this.Test);
    }

    ReloadEvent(){
        document.querySelector(".btnEdit").addEventListener("click",this.Test);
    }

    Test(){
        console.log("haha");
    }
    

    LoadData() {
        data = [{"Id":"1","Name":"Nguyễn Hữu Long","MathScores":"9.5","PhysicsPoints":"9.5","ChemistryScore":"9.5","Avg":"9.5"}];
        let property = document.querySelectorAll('th[property]');
        let tbody = document.querySelector("#main-table tbody");
        tbody.innerHTML = "";
         let table =  document.getElementById('main-table' );
         data.forEach(function(item) {
             let row =tbody.insertRow();
             row.setAttribute("recordId",item["Id"]);
             property.forEach(function(element,index){
                 let propertyName = element.getAttribute("property");
                 let newCell = row.insertCell();
                 let value = document.createTextNode(item[propertyName]);
                 if(propertyName == "STT"){
                    let stt = index+1;
                    value = document.createTextNode(stt);
                 }
                newCell.appendChild(value);
             });
             let cellNew = row.insertCell();
             let buttonEdit = document.createElement("button");
             buttonEdit.innerHTML ="Edit";
             buttonEdit.setAttribute("class","btnEdit");
             let buttonDelete = document.createElement("button");
             buttonDelete.innerHTML = "Delete";
             buttonDelete.setAttribute("class","btnDelete");
             cellNew.appendChild(buttonEdit);
             cellNew.appendChild(buttonDelete);
         });
         this.ReloadEvent();
    }
    
}

var data=[];