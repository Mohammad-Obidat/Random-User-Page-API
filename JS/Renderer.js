class Renderer {
  constructor() {}

  clear = () => {
    $('.user-container').empty();
    $('.friends-container').empty();
    $('.quote-container').empty();
    $('.pokemon-container').empty();
    $('.meat-container').empty();
  };

  userRender(user) {
    this.clear();
    let userSource = $('#users-template').html();
    let userTemplate = Handlebars.compile(userSource);
    let userHTML = userTemplate(user[0]);
    $('.user-container').append(userHTML);
  }

  friendsRender(users) {
    let friend = $('#friends-template').html();
    let friendTemplate = Handlebars.compile(friend);
    for (let i = 1; i < users.length; i++) {
      let friendHTML = friendTemplate(users[i]);
      $('.friends-container').append(friendHTML);
    }
  }

  quoteRender(quote) {
    let quoteSource = $('#quote-template').html();
    let quoteTemplate = Handlebars.compile(quoteSource);
    let quoteHTML = quoteTemplate(quote);
    $('.quote-container').append(quoteHTML);
  }

  pokemonImageRender(img) {
    let pokemonImageSource = $('#pokemon-img-template').html();
    let pokemonImageTemplate = Handlebars.compile(pokemonImageSource);
    let pokemonImageHTML = pokemonImageTemplate({ img });
    $('.pokemon-container').append(pokemonImageHTML);
  }

  properCasePokemonName(name) {
    let pokemonNameSource = $('#pokemon-name-template').html();
    let pokemonNameTemplate = Handlebars.compile(pokemonNameSource);
    let pokemonName = name.charAt(0).toUpperCase() + name.slice(1);
    let pokemonNameHTML = pokemonNameTemplate({ pokemonName });
    $('.pokemon-container').append(pokemonNameHTML);
  }

  textRender(text) {
    let textSource = $('#meat-template').html();
    let textTemplate = Handlebars.compile(textSource);
    let textHTML = textTemplate(text);
    $('.meat-container').append(textHTML);
  }

  loadUser(users) {
    this.clear();
    let lastUser = users.slice(-1)[0];
    this.userRender(lastUser.users);
    this.friendsRender(lastUser.users);
    this.quoteRender(lastUser.quote);
    this.pokemonImageRender(lastUser.pokemon.img);
    this.properCasePokemonName(lastUser.pokemon.name);
    this.textRender(lastUser.text);
  }
}
