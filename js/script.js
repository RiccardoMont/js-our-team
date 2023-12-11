console.log('eccoci');


const ourTeam = [

{
   name: 'Wayne Barnett',
   role:'Founder & CEO',
   image:'https://upload.wikimedia.org/wikipedia/en/5/50/Goofy_Duckipedia.png' 

},
{
    name: 'Angela Caroll',
    role:'Chief Editor',
    image:'angela-caroll-chief-editor.jpg' 
 
 },
 {
    name: 'Walter Gordon',
    role:'Office Manager',
    image:'walter-gordon-office-manager.jpg' 
 
 },
 {
    name: 'Angela Lopez',
    role:'Social Media Manager',
    image:'angela-lopez-social-media-manager.jpg' 
 
 },
 {
    name: 'Scott Estrada',
    role:'Developer',
    image:'scott-estrada-developer.jpg' 
 
 },
 {
    name: 'Barbara Ramos',
    role:'Graphic Designer',
    image:'barbara-ramos-graphic-designer.jpg' 
 
 }

]

console.log(ourTeam);

const row = document.querySelector('.row');



console.log(ourTeam[1].name);


for(let i = 0; i < ourTeam.length; i++){

    const member = ourTeam[i];
    const memberName = ourTeam[i].name;
    const memberRole = ourTeam[i].role;
    const memberImg = ourTeam[i].image;

    const cardMemberMarkup = `
    <div class='col-4'>
        <div class='card my-2 p-4'>
            <img class='card-img-top' src='${memberImg}' alt='' />
            <div class='card-body'>
                <h4>${memberName}</h4>
                <p>${memberRole}</p>
            </div>
        </div>
    </div>`;


    row.insertAdjacentHTML('beforeend', cardMemberMarkup);
    

    console.log(member);

}