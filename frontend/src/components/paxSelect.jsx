import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { Box, Button, Typography } from '@mui/material';

export default function PaxSelect({ pax, setPax }) {
    return (
        <Box>
        <Typography variant="h6">Passengers</Typography>
        <Box>
            <Typography>Adults</Typography>
            <Button
            onClick={() => setPax({ ...pax, adults: pax.adults - 1 })}
            disabled={pax.adults === 1}
            >
            <RemoveIcon />
            </Button>
            <Typography>{pax.adults}</Typography>
            <Button onClick={() => setPax({ ...pax, adults: pax.adults + 1 })}>
            <AddIcon />
            </Button>
        </Box>
        <Box>
            <Typography>Children</Typography>
            <Button
            onClick={() => setPax({ ...pax, children: pax.children - 1 })}
            disabled={pax.children === 0}
            >
            <RemoveIcon />
            </Button>
            <Typography>{pax.children}</Typography>
            <Button onClick={() => setPax({ ...pax, children: pax.children + 1 })}>
            <AddIcon />
            </Button>
        </Box>
        </Box>
    );
    }

    
