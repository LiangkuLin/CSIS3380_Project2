

let contact_item_cf= document.getElementsByClassName("contact-item cf");
let contact_list= document.getElementsByClassName("contact-list");
let paginationLink= document.getElementsByClassName("pagination");
let anchorElement= document.getElementsByClassName("anchorElement");


// 1. According to the size of array, we can count how many pages should we have  
var studentsData= [...contact_item_cf]; 


let dataSize= studentsData.length;
let pageNumbers= Math.floor(dataSize/10)+1;


// 2. Set up pagination links
let linkElementHTML= "";
for (let i=0;i<pageNumbers;i++){
    linkElementHTML+=`<li><a class='anchorElement' onclick='displayData(${i})'>${i+1}</a></li>`;
}
paginationLink[0].innerHTML=linkElementHTML;

// 3. set up default display of this page: 
displayDefaultData();





/**
 * This is the function to display the page when user just login this page 
 */

function displayDefaultData(){
    if (dataSize<10){
        contact_list[0].innerHTML="";
        for (student of studentsData){
            contact_list[0].innerHTML+= student.outerHTML;
        }
    } else {
        contact_list[0].innerHTML="";
        for (let i=0 ; i< 10; i++){
            contact_list[0].innerHTML+= studentsData[i].outerHTML;
        }
    }
}
/**
 * This is the onclick function when user click the pagination links. Data will be displayed in order according to the page.
 */
function displayData(location){

    let displayLocaionIndex=location*10;
    let count = 0; 
    
    if (location+1==pageNumbers){
        let remaningData= dataSize%10; 
        contact_list[0].innerHTML="";
        while(count<remaningData){
            console.log(studentsData.length);
            contact_list[0].innerHTML += studentsData[displayLocaionIndex++].outerHTML;
            count++
        }
    } else {
        contact_list[0].innerHTML="";
        while(count<10){
            contact_list[0].innerHTML+= studentsData[displayLocaionIndex++].outerHTML;
            count++;
        }
   }
}






