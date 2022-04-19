import SearchIcon from '@mui/icons-material/Search';
import { makeStyles, InputBase, Box } from "@material-ui/core";

const useStyle = makeStyles({
  search: {
    borderRadius: 2,
    marginLeft: "4%",
    marginTop: 10,
    width: "38%",
    backgroundColor: "#fff",
    display: "flex",
  },
  searchIcon: {
    marginLeft: "auto",
    padding: 5,
    display: "flex",
    color: "grey",
    background: "#EBEFF2",
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%",
    background: "#EBEFF2",
  },
  inputInput: {
    paddingLeft: 20,
    width: "100%",
  },
});

export const Searchbar = () => {
  const classes = useStyle();

  return (
    <div className={classes.search}>
      <div className={classes.SearchIcon}>
        <SearchIcon />
      </div>

      <InputBase
        placeholder="Search for products, brands and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};