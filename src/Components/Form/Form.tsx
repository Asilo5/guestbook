import React from 'react';

import TextField from '@material-ui/core/TextField';
import useStyles from './styles';

const Form: React.FC = () => {

  const classes = useStyles(); 

    return (
        <form noValidate className={classes.formContainer}>
            <TextField label='Name' name='name ' fullWidth />
            <TextField label='Content' name='content ' fullWidth multiline rows={3} />
        </form>
    )
};

export default Form;
