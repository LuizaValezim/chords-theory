import axios from "axios";

async function accessTokenSim(){
  return await axios
  .get("https://enigmatic-bayou-56424.herokuapp.com/luizavap/token")
  .then((response) => {
    var token = response.data.token;
    console.log(token);
    return token;
  });
}

async function accessSim(token){
  return await axios
    .post("https://enigmatic-bayou-56424.herokuapp.com/luizavap/message", {"token": `${token}`})
    .then((response) => {
      var sim = response.data.mensagem;
      console.log(sim);
      return sim;
    })
}

export {accessTokenSim, accessSim};