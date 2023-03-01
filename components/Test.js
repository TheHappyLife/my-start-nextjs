import { GlobalStatesContext } from "@/context/globalStates";
import { useContext } from "react";

export default function Test() {
  const { currentPage } = useContext(GlobalStatesContext);
  console.log("Test component: ", currentPage);

  return <h1>Test component</h1>;
}
