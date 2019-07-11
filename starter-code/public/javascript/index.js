const charactersAPI = new APIHandler('http://localhost:8000');
event.preventDefault();

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = () => {
    charactersAPI.getFullList()
      .then((response) => {
        const container = document.getElementsByClassName('characters-container')[0];
        container.innerHTML = '';
        response.forEach((element) => {
          let cartoon = 'It is a Cartoon!';
          if (element.cartoon === false) {
            cartoon = 'It is not a Cartoon!';
          }
          container.innerHTML += `<div class="character-info">
            <div class="id">Id: ${element.id}</div>
            <div class="name">Name: ${element.name}</div>
            <div class="occupation">Occupation: ${element.occupation}</div>
            <div class="cartoon">Cartoon: ${cartoon}</div>
            <div class="weapon">Weapon: ${element.weapon}</div>
            </div>`;
        });
      })
      .catch(err => console.log(err));
  };

  document.getElementById('fetch-one').onclick = () => {
    const fetchId = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(fetchId)
      .then((response) => {
        const container = document.getElementsByClassName('characters-container')[0];
        container.innerHTML = '';
        let cartoon = 'It is a Cartoon!';
        if (response.cartoon === false) {
          cartoon = 'It is not a Cartoon!';
        }
        container.innerHTML += `<div class="character-info">
            <div class="id">Id: ${response.id}</div>
            <div class="name">Name: ${response.name}</div>
            <div class="occupation">Occupation: ${response.occupation}</div>
            <div class="cartoon">Cartoon: ${cartoon}</div>
            <div class="weapon">Weapon: ${response.weapon}</div>
            </div>`;
      })
      .catch(err => console.log(err));
  };

  document.getElementById('delete-one').onclick = () => {
    const fetchId = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI.deleteOneRegister(fetchId)
      .then(response => response)
      .catch(err => console.log(err));
  };

  document.getElementById('edit-character-form').onsubmit = () => {
    const fetchId = document.getElementsByName('chr-id')[0].value;
    const name = document.getElementsByName('name1')[0].value;
    const occupation = document.getElementsByName('occupation1')[0].value;
    const weapon = document.getElementsByName('weapon1')[0].value;
    const cartoon = document.getElementById('edit-cartoon').checked;
    charactersAPI.updateOneRegister(fetchId, name, occupation, weapon, cartoon);
  };

  document.getElementById('new-character-form').onsubmit = () => {
    const name = document.getElementsByName('name')[0].value;
    const occupation = document.getElementsByName('occupation')[0].value;
    const weapon = document.getElementsByName('weapon')[0].value;
    const cartoon = document.getElementById('is-a-cartoon').checked;
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon);
  };
});
