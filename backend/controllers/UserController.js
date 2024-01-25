const User = require("../models/UserModel");

module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user =  await User.findOne({ email });
    if (user) {
      return res.json({ msg: "success", movies: user.likedMovies });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching movies." });
  }
};

module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);

      if (!movieAlreadyLiked) {
        const updatedUser = await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );

        return res.json({ msg: "Movie successfully added to liked list.", user: updatedUser });
      } else {
        return res.json({ msg: "Movie already added to the liked list." });
      }
    } else {
      const newUser = await User.create({ email, likedMovies: [data] });
      return res.json({ msg: "Movie successfully added to liked list.", user: newUser });
    }
  } catch (error) {
    return res.json({ msg: "Error adding movie to the liked list" });
  }
};


module.exports.removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const movies = user.likedMovies;
      const movieIndex = movies.findIndex(({ id }) => id === movieId);

      if (movieIndex !== -1) {
        movies.splice(movieIndex, 1);

        const updatedUser = await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: movies,
          },
          { new: true }
        );

        return res.json({ msg: "Movie successfully removed.", movies: updatedUser.likedMovies });
      } else {
        return res.status(404).json({ msg: "Movie not found." });
      }
    } else {
      return res.status(404).json({ msg: "User with given email not found." });
    }
  } catch (error) {
    return res.json({ msg: "Error removing movie from the liked list" });
  }
};
