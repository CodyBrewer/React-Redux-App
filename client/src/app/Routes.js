import Home from "../components/Home";
import CharacterForm from "../components/Character/CharacterForm";
import ClassList from "../components/Classes/ClassList";

const Routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/createCharacter",
    component: CharacterForm
  },
  {
    path: "/selectClass",
    component: ClassList
  }
];

export default Routes;
