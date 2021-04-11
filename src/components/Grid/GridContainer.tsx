import Grid, {
  GridContentAlignment,
  GridDirection,
  GridItemsAlignment,
  GridJustification,
  GridSpacing,
} from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  grid: {},
});

interface GridContainerProps {
  justify?: GridJustification;
  alignItems?: GridItemsAlignment;
  alignContent?: GridContentAlignment;
  direction?: GridDirection;
  spacing?: GridSpacing;
}

const GridContainer: React.FC<GridContainerProps> = ({
  children,
  spacing = 2,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Grid container {...rest} spacing={spacing} className={classes.grid}>
      {children}
    </Grid>
  );
};

export default GridContainer;
