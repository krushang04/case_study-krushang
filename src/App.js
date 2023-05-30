import { useContext } from "react";
import { Grid } from "@material-ui/core";
import Loader from "./components/Loader";
import ProfileCard from "./components/ProfileCard";
import Context from "./store/context";
import "./App.css";

function App() {
  const ctx = useContext(Context);
  return (
    <>
      {ctx.isLoading ? (
        <Loader />
      ) : (
        <Grid className="rootDiv" container spacing={2}>
          {ctx.data.map((user) => (
            <ProfileCard data={user} key={user.id} />
          ))}
        </Grid>
      )}
    </>
  );
}

export default App;
