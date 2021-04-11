import Grid from "@material-ui/core/Grid";
import { GridSize } from "@material-ui/core/Grid";

interface GridItemProps {
  xs?: boolean | GridSize;
  sm?: boolean | GridSize;
  md?: boolean | GridSize;
  lg?: boolean | GridSize;
  xl?: boolean | GridSize;
}
const GridItem: React.FC<GridItemProps> = ({ children, ...rest }) => {
  return (
    <Grid item {...rest}>
      {children}
    </Grid>
  );
};

export default GridItem;
