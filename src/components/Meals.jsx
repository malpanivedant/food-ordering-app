import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./UI/Error";

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp({url: "http://localhost:3000/meals",initialData:[]});

  if(isLoading){
    return <p className="center">Fetching meals...</p>;
  }

  if(error){
    return <Error title="Failed to fetch details." message={error} />
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal}></MealItem>;
      })}
    </ul>
  );
}
