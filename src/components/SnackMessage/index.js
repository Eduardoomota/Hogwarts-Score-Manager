import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const SnackMessage = ({ open = false, setOpen }) => {
  const Alert = (props) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
  );

  const handleClose = (_event, reason) =>
    reason !== "clickaway" ? setOpen(false) : null;

  return (
    open && (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleClose}
      >
        <Alert severity="success" onClose={handleClose}>
          Congrats !!! Points updated with success
        </Alert>
      </Snackbar>
    )
  );
};

export default SnackMessage;
