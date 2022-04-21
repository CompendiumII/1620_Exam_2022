// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here


function loadContacts(contactList){
  for (const contact of contactList){
    console.log(contact)
  }
}

function contactsName(contactList){
  const nameList = []
  for (const contact of contactList){
    nameList.push(contact.name)
  }
  return nameList.sort()
}

function createNameCard(name){
  const selectNav = document.querySelector('#display_all_contacts')
  const div = document.createElement('div')
  div.className = 'nameCard'
  const imgURL = 'img/' + name + '.png'
  const img = document.createElement('img')
  img.src = imgURL
  div.appendChild(img)
  div.appendChild(document.createTextNode(name))
  selectNav.appendChild(div)
  
}
function createSingleCard(singleName){
  const selectNav = document.querySelectorAll('.nameCard')
  const insertNav = document.querySelector('#display_single_contact')
  for (const card of selectNav){
    if (card.innerHTML == singleName){
      insertNav.insertAdjacentHTML(afterbegin, `<img src= img/${singleName}.png></img>`)
    }
  }
}

function clearSingleContact(){
  const selectNav = document.querySelector('#display_single_contact')
  selectNav.innerHTML = ''
}

function clearAllContacts(){
  const selectNav = document.querySelector('#display_all_contacts')
  selectNav.innerHTML = ''
}

function makeCardButton(){
  const selectedCard = document.querySelector('display_all_contacts')
  selectedCard.addEventListener('click', createSingleCard)
}

function addToAllContacts(nameList){
  for (const name of nameList){
    createNameCard(name)
  }
}

addToAllContacts(contactsName(contactsList))

/*<img src="url" alt="alternatetext">*/