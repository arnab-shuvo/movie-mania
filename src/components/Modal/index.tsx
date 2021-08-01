import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import { ModalWrap } from './styled';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: '#f7f7f9',
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: '10px',
	},
}));

interface IModal {
	open: boolean;
	handleClose: () => void;
	title: string;
}

const CustomModal: React.FC<IModal> = ({ children, open, handleClose, title }) => {
	const classes = useStyles();
	return (
		<Modal
			aria-labelledby='transition-modal-title'
			aria-describedby='transition-modal-description'
			className={classes.modal}
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}>
			<Fade in={open}>
				<div className={classes.paper}>
					<ModalWrap>
						<p className={'title'}>{title}</p>
						{children}
					</ModalWrap>
				</div>
			</Fade>
		</Modal>
	);
};

export default CustomModal;
