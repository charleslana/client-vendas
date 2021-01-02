import React, {ChangeEvent, FormEvent, useCallback, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import api from "../../../../service/api";
import Notification from "../../Notification";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

interface InterfaceNotification {
    open: boolean;
    type: string;
    message: string;
}

export default function SignUp() {
    const {paper, avatar, form, submit} = useStyles();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }, [formData]);

    const [notification, setNotification] = useState<InterfaceNotification>({
        open: false,
        type: 'error',
        message: 'Error'
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback(async (event: FormEvent) => {
        event.preventDefault();

        setLoading(true);

        setNotification({...notification, open: false});

        const {firstName, email, password} = formData;

        const data = {
            name: firstName,
            email,
            password
        }

        await api.post('users', data).then(() => {
            return setNotification({
                open: true,
                type: 'success',
                message: 'Registration successfully Complete!'
            });
        }).catch((error) => {
            setLoading(false);
            if(error.response?.data.error === 'Bad Request') {
                return setNotification({
                    open: true,
                    type: 'error',
                    message: error.response.data.validation.body.message
                });
            }
            if(error.response?.data.status === 'error') {
                return setNotification({open: true, type: 'error', message: error.response.data.message});
            }
            if(error.response?.data.statusCode === 201) {
                return setNotification({open: true, type: 'error', message: error.response.data.message});
            }
            return setNotification({open: true, type: 'error', message: 'An error has occurred.'});
        });

    }, [formData, notification]);

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={paper}>
                    <Avatar className={avatar}>
                        <PersonAdd />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="current-confirm-password"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={submit}
                            disabled={loading}
                        >
                            {loading && <CircularProgress style={{marginRight: 5}} size={20} />}
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                Already have an account? Sign in
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
            {notification.open &&
            <Notification message={notification.message} type={notification.type} open={true}/>}
        </>
    );
}