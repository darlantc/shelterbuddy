import MaterialIconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/styles";
import { blueColor } from "../../assets/styles/styles";

const useStyles = makeStyles({
  root: {
    fontSize: 16,
    fontWeight: 600,
    backgroundColor: `${blueColor} !important`,
    color: "#fff !important",
    height: 40,
    width: 40,
    margin: 4,
  },
  secondaryColor: {
    backgroundColor: "#E0E7FD!important",
    color: `${blueColor} !important`,
  },
});

interface IconButtonProps {
  secondaryColor?: boolean;
  onClick: () => void;
}
const IconButton: React.FC<IconButtonProps> = ({
  secondaryColor,
  onClick,
  children,
}) => {
  const classes = useStyles();

  const buttonRootClass = secondaryColor
    ? `${classes.secondaryColor} ${classes.root}`
    : classes.root;

  return (
    <MaterialIconButton
      color="primary"
      onClick={onClick}
      classes={{ root: buttonRootClass }}
    >
      {children}
    </MaterialIconButton>
  );
};

export default IconButton;
