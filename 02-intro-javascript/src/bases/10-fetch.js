const ApiKey = ``; //No es necesaria en una Api publica en este caso Github Api  link https://docs.github.com/en/free-pro-team@latest/rest/users/users?apiVersion=2022-11-28#get-a-user

const request = fetch(`https://api.github.com/users/Urielbm`);

request
  .then((resp) => resp.json())
  .then(({ avatar_url }) => {
    const img = document.createElement("img");
    img.src = avatar_url;
    document.body.append(img);
  })
  .catch(console.warn);
