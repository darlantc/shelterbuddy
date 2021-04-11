import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { GridContainer, GridItem } from "../../components/Grid";
import CollapsibleList from "../../components/Collapse/CollapsibleList";
import RaisedButton from "../../components/Button/RaisedButton";
import AnimalPhoto from "../../components/Animal/AnimalPhoto";

import AnimalEntity from "../../entities/AnimalEntity";

import { blackColor, darkGrayColor } from "../../assets/styles/styles";
const useStyles = makeStyles({
  label: {
    fontWeight: 500,
    fontSize: 16,
    color: blackColor,
    "& span": {
      color: darkGrayColor,
    },
  },
});

interface AnimalsListAsCardProps {
  animalsList: AnimalEntity[];
  didWantToSeeDetails: (id: number) => () => void;
}
const AnimalsListAsCard: React.FC<AnimalsListAsCardProps> = ({
  animalsList,
  didWantToSeeDetails,
}) => {
  const classes = useStyles();

  const renderLabel = (key: string, value: string) => (
    <p className={classes.label}>
      <span>{key}:</span> {value}
    </p>
  );

  return (
    <div style={{ marginTop: 30 }}>
      <CollapsibleList
        items={animalsList.map((animal) => {
          return {
            id: animal.id,
            header: (
              <GridContainer alignItems="center">
                <GridItem>
                  <AnimalPhoto
                    id={animal.id}
                    alt={animal.name || animal.type}
                  />
                </GridItem>
                <GridItem xs>
                  <h2 className="animal-title">{animal.name || "-"}</h2>
                </GridItem>
              </GridContainer>
            ),
            details: (
              <GridContainer>
                <GridItem xs>
                  {renderLabel("Type", animal.type)}
                  {renderLabel("Breed", animal.breed)}
                  {renderLabel("Gender", animal.gender)}
                  {renderLabel("Color", animal.color)}
                  <RaisedButton
                    large
                    fullWidth
                    onClick={didWantToSeeDetails(animal.id)}
                  >
                    Details <ChevronRightIcon />
                  </RaisedButton>
                </GridItem>
              </GridContainer>
            ),
          };
        })}
      />
    </div>
  );
};

export default AnimalsListAsCard;
