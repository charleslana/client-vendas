import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';

interface ErrorProps {
   message: string;
   type: any;
   open: boolean;
}

const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Notification(props: ErrorProps) {
    const [state, setState] = React.useState({
        open: props.open
    });

    const {open} = state;

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setState({ ...state, open: false });
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            onClose={handleClose}
            autoHideDuration={6000}
        >
            <Alert onClose={handleClose} severity={props.type}>
                {props.message}
            </Alert>
        </Snackbar>
    );
}