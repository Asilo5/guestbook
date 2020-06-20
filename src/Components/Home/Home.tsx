import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useStoreState } from '../../hooks';
import Form from '../Form/Form';

const Home: React.FC = () => {

    const { entries } = useStoreState((state) => state.guestbook);
    
    return (
        <section>
            <Form />

            {entries.map((entry) => (
                <Card>
                    <CardContent>
                        <Typography variant='h2'>
                           {entry.name}
                        </Typography>
                        <Typography variant='body1'>
                           {entry.content}
                        </Typography>
                        <Typography variant='caption'>
                           {entry.submitted.toLocaleDateString()}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </section>
    )
};

export default Home;