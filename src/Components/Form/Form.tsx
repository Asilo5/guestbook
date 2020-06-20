import React from 'react';

import TextField from '@material-ui/core/TextField';

const Form: React.FC = () => {

    return (
        <form noValidate>
            <TextField label='name' name='name ' />
        </form>
    )
};

export default Form;
