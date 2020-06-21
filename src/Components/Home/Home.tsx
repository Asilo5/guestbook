import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useStoreState } from '../../hooks';
import Form from '../Form/Form';
import useStyles from './styles';

const Home: React.FC = () => {

    const { entries } = useStoreState((state) => state.guestbook);
    const classes = useStyles();

    return (
        <section>
            <Form />

            {entries.map((entry) => (
                <Card key={entry.id} className={classes.entryCard} >
                    <CardContent>
                        <Typography variant='h2'> 
                           {entry.name}
                        </Typography>
                        <Typography variant='body1'>
                           {entry.content}
                        </Typography>
                        <Typography variant='caption'>
                           {entry.submitted ? entry.submitted.toLocaleDateString() : ''} 
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </section>
    )
};

export default Home;