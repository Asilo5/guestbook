import React, { useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useStoreState, useStoreActions } from '../../hooks';
import Form from '../Form/Form';
import useStyles from './styles';

const Home: React.FC = () => {

    const { entries } = useStoreState((state) => state.guestbook);
    const getEntries = useStoreActions((state) => state.guestbook.getEntries);
    const classes = useStyles();

    useEffect(() => {
       getEntries();
    }, []);

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