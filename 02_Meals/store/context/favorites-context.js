import { createContext, useState } from "react";

export const FavroitesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const addFavorite = (id) => {
    setFavoriteMealIds((prevFavIds) => [...prevFavIds, id]);
  };
  const removeFavorite = (id) => {
    setFavoriteMealIds((prevFavIds) =>
      prevFavIds.filter((favId) => favId !== id)
    );
  };
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavroitesContext.Provider value={value}>
      {children}
    </FavroitesContext.Provider>
  );
};

export default FavoritesContextProvider;
