const { typeDefsGenre } = require('./genres/TypeDefsGenre')
const { typeDefsArtist } = require("./artists/TypeDefsArtist");
const { typeDefsBand } = require("./bands/TypeDefsBand");
const { typeDefsAlbum } = require("./albums/TypeDefsAlbum");
const { typeDefsTrack } = require("./tracks/TypeDefsTrack");
const { typeDefsUsers } = require("./users/TypeDefsUsers");
const { typeDefsFavourite } = require("./favourites/TypeDefsFavourites");

const typeDefs = [typeDefsGenre, typeDefsArtist, typeDefsBand, typeDefsAlbum, typeDefsTrack, typeDefsUsers, typeDefsFavourite]

module.exports = { typeDefs }
