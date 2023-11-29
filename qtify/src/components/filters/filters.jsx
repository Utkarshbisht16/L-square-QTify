import React from 'react';
import {Tabs,Tab} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './filters.module.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

export default function Filters({filters,selectedFilterIndex, setSelectedFilterIndex}){
    const handleChange = (event, newValue) =>{
        setSelectedFilterIndex(newValue);
    }
    function a11yProps(index){
        return {
            id : `sample-tab-${index}`,
            'aria-controls' : `simple-tabpanel-${index}`,
        }
    }
    return (
        <div>
            <Tabs value={selectedFilterIndex}
                onChange={handleChange}
                aria-label="basic tab example"
                TabIndicatorProps={{
                    style:{
                        backgroundColor:"var(--color-primary)",
                    },
                }}>
                {filters.map((ele,idx)=>(
                    <Tab className={styles.tab} label={ele.label} {...a11yProps(idx)}/>  
                ))}
            </Tabs>
        </div>
    )
}