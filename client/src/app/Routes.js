import Home from "../components/Home";
import CharacterSheet from "../components/Character/CharacterSheet";

const Routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/createCharacter",
    component: CharacterSheet
  }
];

export default Routes;
