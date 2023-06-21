import { Recipe } from "./recipe.model"

const recipes: Array<Recipe> = [
    {
        pathlink: "../../assets/recipe1.jpg",
        title: "MARGARITAS",
        compo: ["2 ounces blanco tequila","1/2 ounce orange liqueur","1 ounce lime juice, freshly squeezed",
    "1/2 ounce agave syrup","Garnish: lime wheel","Garnish: kosher salt (optional)"]
    },
    {
        pathlink: "../../assets/recipe2.png",
        title: "PINEAPPLE-BASIL VODKA",
        compo: ["1 1/2 cups chopped fresh pineapple","1 (750-ml) bottle vodka","1/2 cup fresh basil leaves, plus more for garnish"]
     }
    //,
    // {
    //     pathlink: "../../assets/margaritas.jpg",
    //     title: "MARGARITAS",
    //     compo: ["2 ounces blanco tequila","1/2 ounce orange liqueur","1 ounce lime juice, freshly squeezed",
    // "1/2 ounce agave syrup","Garnish: lime wheel","Garnish: kosher salt (optional)"]
    // }
]

export default recipes;