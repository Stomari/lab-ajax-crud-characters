class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(response => response.data)
      .catch(err => console.log(err));
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    const characterInfo = {
      name,
      occupation,
      weapon,
      cartoon,
    };
    axios.post(`${this.BASE_URL}/characters`, characterInfo)
      .then(response => response)
      .catch(err => console.log(err));
  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    const updateInfo = {
      name,
      occupation,
      weapon,
      cartoon,
    };
    axios.patch(`${this.BASE_URL}/characters/${id}`, updateInfo)
      .then(response => console.log(`Update successful: ${response}`))
      .catch(err => console.log(err));
  }

  deleteOneRegister(id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => console.log(`Character id=${id} deleted`))
      .catch(err => console.log(err));
  }
}
