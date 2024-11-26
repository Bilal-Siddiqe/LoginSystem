import { mainContext } from "../contexts/DataProvider";
import { useContext } from "react";

function useData() {
    return useContext(mainContext)
}
export default useData;