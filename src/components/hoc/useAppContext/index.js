import { useContext } from 'react';
import { Context } from "../contextProvider";

const useAppContext = () => useContext(Context);

export default useAppContext;
