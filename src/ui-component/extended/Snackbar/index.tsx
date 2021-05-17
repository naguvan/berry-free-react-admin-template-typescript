import * as React from 'react';

import {
  Alert,
  Button,
  Fade,
  Grow,
  IconButton,
  Slide
} from "@material-ui/core";
import MuiSnackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import {TransitionProps} from "@material-ui/core/transitions";
import {useSelector} from "../../../store/reducer";

const TransitionSlideLeft = (props: TransitionProps) => {
  return <Slide {...props} direction="left" />;
}
const TransitionSlideUp = (props: TransitionProps) => {
  return <Slide {...props} direction="up" />;
}
const TransitionSlideRight = (props: TransitionProps) => {
  return <Slide {...props} direction="right" />;
}
const TransitionSlideDown = (props: TransitionProps) => {
  return <Slide {...props} direction="down" />;
}
const GrowTransition = (props: TransitionProps) => {
  return <Grow {...props} />;
}
type Transition = React.ComponentType<
    TransitionProps & {
  children?: React.ReactElement<any, any>;
}>
const transition = {
  SlideLeft: TransitionSlideLeft as Transition,
  SlideUp: TransitionSlideUp as Transition,
  SlideRight: TransitionSlideRight as Transition,
  SlideDown: TransitionSlideDown as Transition,
  Grow: GrowTransition as Transition,
  Fade: Fade as Transition
};
const Snackbar = () => {
  const [open, setOpen] = React.useState(false);
  const snackbarInitial = useSelector(state => state.snackbar);
  const handleClose = (
      event: React.SyntheticEvent | React.MouseEvent,
      reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  React.useEffect(() => {
    setOpen(snackbarInitial.open);
  }, [snackbarInitial.action, snackbarInitial.open]);
  return (
    <React.Fragment>
      {snackbarInitial.variant === "default" && (
        <MuiSnackbar
          anchorOrigin={snackbarInitial.anchorOrigin}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={snackbarInitial.message}
          TransitionComponent={transition[snackbarInitial.transition]}
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      )}
      {snackbarInitial.variant === "alert" && (
        <MuiSnackbar
          TransitionComponent={transition[snackbarInitial.transition]}
          anchorOrigin={snackbarInitial.anchorOrigin}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            variant="filled"
            severity={snackbarInitial.alertSeverity}
            sx={{
              bgcolor: snackbarInitial.alertSeverity + ".dark",
              color:
                snackbarInitial.alertSeverity === "warning" ? "grey.900" : ""
            }}
            action={
              <React.Fragment>
                {snackbarInitial.actionButton && (
                  <Button color="secondary" size="small" onClick={handleClose}>
                    UNDO
                  </Button>
                )}
                {snackbarInitial.close && (
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                )}
              </React.Fragment>
            }
          >
            {snackbarInitial.message}
          </Alert>
        </MuiSnackbar>
      )}
    </React.Fragment>
  );
};
export default Snackbar;
