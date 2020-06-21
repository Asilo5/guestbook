import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'; 
import * as yup from 'yup';

import useStyles from './styles';
import { useForm } from "react-hook-form";
import GuestBookEntry from '../../interfaces/GuestBookEntry';

const GuestBookEntrySchema = yup.object().shape({
   name: yup.string().trim().required(),
   content: yup.string().trim().min(10).max(200).required()
}); 

const Form: React.FC = () => {

  const classes = useStyles(); 
  const { register, handleSubmit, errors  } = useForm<GuestBookEntry>({
      validationSchema: GuestBookEntrySchema
  });

  const submitForm = (data: GuestBookEntry): void => {
     console.log(data);
  };
  console.log(errors )
    return (
        <form onSubmit={handleSubmit(submitForm)} noValidate className={classes.formContainer}>
            <TextField 
               inputRef={register} 
               label='Name' 
               name='name ' 
               fullWidth 
            />
            <TextField 
               label='Content' 
               name='content ' 
               fullWidth 
               multiline 
               rows={3} 
               variant='outlined' 
               inputRef={register}
            />
            <Box display='flex' justifyContent='center'>
                <Button 
                  type='submit' 
                  variant="contained" 
                  color='primary'
                > 
                  Submit 
                </Button>
            </Box>
        </form>
    )
};

export default Form;
