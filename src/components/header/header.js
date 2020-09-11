import React, { useEffect, useState } from "react";
import { Toolbar } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { Link, graphql, useStaticQuery, navigate } from "gatsby";
import { useDispatch, useSelector } from "react-redux";
import { setNameTheme, setTheme } from "../../redux/themes/themes.action";
import themes from "../../services/themes";

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

  const nameCurrentTheme = useSelector(
    (state) => state.themes.nameCurrentTheme,
    []
  );
  const dispatch = useDispatch();
  const handleChangeTheme = (event, nextView) => {
    dispatch(setTheme(themes[nextView])), dispatch(setNameTheme(nextView)),
        localStorage.setItem("currentTheme", JSON.stringify(themes[nextView]));
        localStorage.setItem("nameCurrentTheme", nextView);
  };

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

        <FormControl component="fieldset">
          <FormLabel component="legend" />
          <RadioGroup
            aria-label="gender2"
            name="gender2"
            value={nameCurrentTheme}
            onChange={handleChangeTheme}
          >
            <FormControlLabel value="dark" control={<Radio />} label="dark" />
            <FormControlLabel value="light" control={<Radio />} label="light" />
            <FormControlLabel
              value="custom"
              control={<Radio />}
              label="custom"
            />
          </RadioGroup>
        </FormControl>
      </Toolbar>
    </>
  );
};

export default Header;
