import axios from "axios";

async function accessToken(){
    return await axios
    .post("https://api.hooktheory.com/v1/users/auth", {username: "luizavalezim", password:"luizavalezim123"}, {headers: {'Content-Type': 'application/json', 'Accept':'application/json'}})
    .then((response) => {
      var token = response.data.activkey;
      return token;
    });
}

async function accessChords(activkey, sufix){
    return await axios
      .get("https://api.hooktheory.com/v1/trends/" + sufix,
          {headers: {"Authorization": `Bearer ${activkey}`}})
      .then((response) => {
        var chords = response.data;
        return chords;
      })
}

export {accessToken, accessChords};