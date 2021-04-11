import Grid, {
  GridContentAlignment,
  GridDirection,
  GridItemsAlignment,
  GridJustification,
  GridSpacing,
} from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const HORIZONTAL_MARGIN = 96;

const useStyles = makeStyles({
  grid: {
    margin: 0,
    marginLeft: HORIZONTAL_MARGIN,
    marginRight: HORIZONTAL_MARGIN,
    width: `calc(100% - ${HORIZONTAL_MARGIN * 2}px)`,
  },
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
