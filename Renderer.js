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

  pokemonRender(pokemon) {
    let pokemonSource = $('#pokemon-template').html();
    let pokemonTemplate = Handlebars.compile(pokemonSource);
    let pokemonHTML = pokemonTemplate(pokemon);
    $('.pokemon-container').append(pokemonHTML);
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
    let textHTML = textTemplate(text[0]);
    $('.meat-container').append(textHTML);
  }
}
