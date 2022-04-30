const api = new APIManager();
const renderer = new Renderer();

const loadUser = () => {
  api.apiUser();
  api.apiQuotes();
  api.apiPokemon();
  api.apiText();
};

const displayUser = () => {
  renderer.userRender(api.data.users);
  renderer.friendsRender(api.data.users);
  renderer.quoteRender(api.data.quote);
  renderer.pokemonRender(api.data.pokemon);
  renderer.textRender(api.data.text);
};
