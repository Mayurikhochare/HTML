
import './App.css';


const Student=(props)=>{
  return(
  <><div class="personal"><h1>{props.name}</h1>
  <h2>{props.designation}</h2>
  </div>
  
  </>

  );
}
function education(educ){
   return(
    <h3>{educ.edu} in {educ.trade} from {educ.college} with {educ.percent} CGPA in {educ.year}</h3>
   )
}
const educ={
  edu:"B.Tech" ,
  trade:"Computer Engineering",
  college:"Jaywant College of Engineering and Management",
  percent:"9.03",
  year:"2022"

}

const contact={
  Address:"Karad,Satara,Maharashtra",
  Phone:"9999999999",
  Email:"khocharemayuri@ivycomptech.com",
  languages:"Core Java,SQL,HTML,CSS,Javascript",
  Tools:"Eclipse,IntelliJIdea,V S Code,SQL Plus",
  Hobbies:"Cooking,Traveling",
  OperatingSystem:"Windows,Linus"
}
let head=<h1><ins>Contact</ins></h1>
function App() {
  
  
return (
  <>
  <div id="all">
  <Student name="Mayuri Dattatray Khochare" designation="Trainee Software Engineer" />
  <div id="all1">
    <table><th id="th1">
  <table id="table2">
  <tr><h1><ins>Career Objective:</ins></h1></tr>
  
  <tr><h3>To enhance and utilize my technical knowledge and skills in an organization with considerable advancements opportunities</h3></tr>
  <tr><h1><ins>Academics Details:</ins></h1></tr>
  
  <tr><h3>{education(educ)}</h3></tr>
  



  </table>
  </th>
  <th id="th2">
  <table id="table1">
  <tr>{head}</tr>
  <tr>Address:{contact.Address}</tr>
  <tr>Phone:{contact.Phone}</tr>
  <tr>Email:{contact.Email}</tr>
  <tr><h1><ins>Skills</ins></h1></tr>
  <tr>languages:{contact.languages}</tr>
  <tr>Tools:{contact.Tools}</tr>
  <tr>OperatingSystem:{contact.OperatingSystem}</tr>
  <tr><h1><ins>hobbies</ins></h1></tr>
  <tr>{contact.Hobbies}</tr>
  
  </table>
  </th>
  </table>
  </div>
  
  </div>
  </>
  
);
}


export default App;
