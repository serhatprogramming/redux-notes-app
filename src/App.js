import NewNote from "./component/NewNote";
import Notes from "./component/Notes";
import VisibilityFilter from "./component/VisibilityFilter";

import { useEffect } from "react";

import noteService from "./services/notes";
import { useDispatch } from "react-redux";
import { setNotes } from "./reducers/noteReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    noteService.getAll().then((notes) => dispatch(setNotes(notes)));
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
