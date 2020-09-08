import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CardCategory = ({ name, recruitment }) => {
  const [bigSize, setBigSize] = React.useState(false);
  const filterRecruitment = recruitment.filter(
    (item) => name === item.node.department
  );
  return (
    <Box className={`card-category__container`}>
      <Box component={"div"} className={"card-category__header"}>
        <Typography className={"card-category__title"} variant={`overline`}>
          {name}
        </Typography>{" "}
        <Typography
          className={"card-category__open-roles"}
          variant={`overline`}
        >{`${filterRecruitment.length} open roles`}</Typography>
        {(!bigSize && (
          <AddIcon
            className={"card-category__icon"}
            onClick={() => setBigSize(true)}
          />
        )) || (
          <RemoveIcon
            className={"card-category__icon"}
            onClick={() => setBigSize(false)}
          />
        )}
      </Box>
      {bigSize &&
        ((filterRecruitment.length &&
          filterRecruitment.map(
            (item, index) =>
              item.node && (
                <React.Fragment key={index}>
                  <Box
                    component={"div"}
                    className={"card-category__addition-block"}
                  >
                    <Typography
                      className={"card-category__number"}
                      variant={`overline`}
                    >
                      {index < 10 ? "0" + (index + 1) : index + 1}
                    </Typography>
                    <Box
                      component={"div"}
                      className={"card-category__description-block"}
                    >
                      <Typography
                        className={"card-category__description-block-header"}
                        variant={`overline`}
                      >{`${item.node.title} - ${item.node.location}`}</Typography>{" "}
                      <Typography
                        className={"card-category__description-block-main"}
                        variant={`overline`}
                      >{`${item.node.overview}`}</Typography>
                    </Box>
                  </Box>
                </React.Fragment>
              )
          )) || (
          <Typography
            className={"card-category__empty"}
            variant={`overline`}
          >{`Empty`}</Typography>
        ))}
    </Box>
  );
};

export default CardCategory;
