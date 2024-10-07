import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavroitesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const { ids, removeFavorite } = useContext(FavroitesContext);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
