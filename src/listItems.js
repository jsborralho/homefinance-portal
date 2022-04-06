import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PaymentIcon from '@mui/icons-material/Payment';




export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <AllInclusiveIcon />
      </ListItemIcon>
      <ListItemText primary="Overall" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TrendingUpIcon />
      </ListItemIcon>
      <ListItemText primary="Income" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="Expenses" />
    </ListItemButton>
  </React.Fragment>
);

