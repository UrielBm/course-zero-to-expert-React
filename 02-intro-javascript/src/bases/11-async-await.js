const getGitHubUser = async (userName = "UrielBM") => {
  let data;
  try {
    const request = await fetch(`https://api.github.com/users/${userName}`);
    data = await request.json();
    const img = document.createElement("img");
    img.src = data.avatar_url;
    document.body.append(img);
  } catch (error) {
    console.warn(`User: ${userName} no found`);
    data = {
      userName: "no-found",
      id: undefined,
      urlImg: "nothing",
    };
  } finally {
    return data;
  }
};

console.log(await getGitHubUser());
