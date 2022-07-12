const { resolversGenre } = require('./genres/ResolversGenre')
const { resolversArtist } = require("./artists/ResolversArtist");
const { resolversBand } = require("./bands/ResolversBand");
const { resolversAlbum } = require("./albums/ResolversAlbum");
const { resolversTrack } = require("./tracks/ResolversTrack");
const { resolversUser } = require("./users/ResolversUsers");
const { resolversFavorite } = require("./favourites/ResolversFavourites");

const resolvers = [resolversGenre, resolversArtist, resolversBand, resolversAlbum, resolversTrack, resolversUser, resolversFavorite]

module.exports = { resolvers: resolvers }
