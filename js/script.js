
const ourTeam = [

{
   name: 'Wayne Barnett',
   role:'Founder & CEO',
   //image: 'wayne-barnett-founder-ceo.jpg'
   image:'https://upload.wikimedia.org/wikipedia/en/5/50/Goofy_Duckipedia.png' 

},
{
    name: 'Angela Caroll',
    role:'Chief Editor',
    //image:'angela-caroll-chief-editor.jpg' 
    image: 'https://www.topolino.it/wp-content/uploads/2019/11/amelia_intera.png'
 
 },
 {
    name: 'Walter Gordon',
    role:'Office Manager',
    //image:'walter-gordon-office-manager.jpg' 
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png'
 
 },
 {
    name: 'Angela Lopez',
    role:'Social Media Manager',
    //image:'angela-lopez-social-media-manager.jpg' 
    image: 'https://www.topolino.it/wp-content/uploads/2019/12/paperinaintera.png'
 
 },
 {
    name: 'Scott Estrada',
    role:'Developer',
    //image:'scott-estrada-developer.jpg' 
    image: 'https://it.wikifur.com/w/images/thumb/6/6f/Donald_Duck.png/362px-Donald_Duck.png'
 
 },
 {
    name: 'Barbara Ramos',
    role:'Graphic Designer',
    //image:'barbara-ramos-graphic-designer.jpg' 
    image: 'https://www.topolino.it/wp-content/uploads/2019/12/nonna_papera_intera.png'
 
 }

]


const row = document.querySelector('.row');


function creaCard(memberName, memberRole, memberImg){

   const cardMemberMarkup = `
    <div class='col-4'>
        <div class='card d-flex align-items-center my-2 bg-secondary opacity-50'>
            <img class='p-4' src='${memberImg}' alt='' style='height:250px'/>
            <div class='card-body w-100'>
                <h4>${memberName}</h4>
                <p>${memberRole}</p>
            </div>
        </div>
    </div>
    `;

    row.insertAdjacentHTML('beforeend', cardMemberMarkup);


}



for(let i = 0; i < ourTeam.length; i++){

   const member = ourTeam[i];
   const memberName = ourTeam[i].name;
   const memberRole = ourTeam[i].role;
   const memberImg = ourTeam[i].image;

   creaCard(memberName, memberRole, memberImg);


   //SEZIONE TOGGLE COLORE DI SFONDO CARD

   const card = document.getElementsByClassName('card');

    card[i].addEventListener('click', function () {

      card[i].classList.toggle('bg-warning');
      card[i].classList.toggle('opacity-50');

    })
   

   //SEZIONE TEXT-END SUI NOMI E RUOLI


   const h4 = document.getElementsByTagName('h4');
   const p = document.getElementsByTagName('p'); 


   if(i % 2 === 0){

      p[i].classList.add('text-end');


   } else {

      h4[i].classList.add('text-end');

   }

}