import React, { useState } from "react";
import { Toolbar } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { Link, graphql, useStaticQuery, navigate } from "gatsby";
import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "../../redux/themes/themes.action";
import themes from "../../services/themes";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const Header = () => {
  const [value, setValue] = React.useState(
    localStorage.getItem("valueLocation") || ""
  );
  // useEffect(() => {
  //   if (!localStorage.getItem("valueLocation")) navigate("/");
  // }, []);

  const response = useStaticQuery(
    graphql`
      query {
        allContentfulOfficeLocation {
          nodes {
            location
          }
        }
      }
    `
  );
  const allViewLocation = { location: "View-All" };
  const locations = [].concat(
    allViewLocation,
    response.allContentfulOfficeLocation.nodes
  );
  const pathLocations = locations.map((locationObject) => {
    if (locationObject.location.indexOf(" ") !== -1)
      return locationObject.location.replace(" ", "-").toLowerCase();
    return locationObject.location.toLowerCase();
  });
  
  const dispatch = useDispatch();
  const [view, setView] = useState('dark');
  const handleChangeTheme = (event, nextView) =>
    {setView(nextView), dispatch(setTheme(themes[nextView]))};
 
  
  return (
    <>
      <Toolbar className={`header-container`}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <RadioGroup aria-label="gender" name="gender1" value={value}>
              {locations.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <Link
                      to={`/locations/${pathLocations[index]}`}
                      onClick={() => {
                        setValue(item.location),
                        localStorage.setItem("valueLocation", item.location);
                      }}
                    >
                      <FormControlLabel
                        value={item.location}
                        control={<Radio />}
                        label={item.location}
                      />{" "}
                    </Link>
                  </React.Fragment>
                );
              })}
            </RadioGroup>
          </FormLabel>
        </FormControl>
    
          <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChangeTheme}>
              <ToggleButton value="dark" aria-label="dark">
                  {'dark'}
              </ToggleButton>
              <ToggleButton value="light" aria-label="light">
                  {'light'}
              </ToggleButton>
              <ToggleButton value="custom" aria-label="custom">
                  {'custom'}
              </ToggleButton>
          </ToggleButtonGroup>
      </Toolbar>
    </>
  );
};

export default Header;
