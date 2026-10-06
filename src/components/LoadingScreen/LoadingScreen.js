import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import './LoadingScreen.css';
import { CircularProgress } from '@mui/material';
import { ToggleContext } from '../../ToggleContext';
import { useContext } from "react";



export default function LoadingScreen() {
	const [open] = React.useState(true);
	const { toggle, setToggle } = useContext(ToggleContext);

	/*  const handleClose = () => {
    setOpen(false);
  }; */


  
	return (
		<div>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1,
				opacity: 1, background: 'white'}}
				open={open}
				//onClick={handleClose}
			>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<div class="loader" >
				</div>
				<p className='text-center' style={{fontWeight: 'bold', color: '#0097B2', marginTop:10}}>
					{toggle ? "Por favor espera un momento. Puede tardar unos segundos..." : 'Please hold on. It may take a few seconds...'}
				</p> 

				
  
               </div>
			</Backdrop>
		</div>
	);
}
