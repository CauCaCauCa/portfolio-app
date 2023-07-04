import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TransitEnterexitRoundedIcon from '@mui/icons-material/TransitEnterexitRounded';
// import '../page.scss'


type Props = {
    isMobile?: boolean,
}
export default function ModalMoreAboutMe({ isMobile }: Props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isMobile ? '70%' : 1000,
        height: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    function handleOnMouseOver() {
        const btnMoreAboutMe = document.getElementById('btn-more-about-me')!;
        btnMoreAboutMe.style.width = '14rem';
    }

    function handleOnMouseOut() {
        const btnMoreAboutMe = document.getElementById('btn-more-about-me')!;
        btnMoreAboutMe.style.width = '1px';
    }


    return (
        <div id='modal-more-about-me'
            style={{
                textAlign: isMobile ? 'center' : 'right',
                ...(isMobile
                    ? {
                        display: 'flex',
                        justifyContent: 'center', /* Horizontally center */
                        alignItems: 'center' /* Vertically center */
                    }
                    : {})
            }}

        >
            <div
                onMouseOver={handleOnMouseOver}
                onMouseOut={handleOnMouseOut}
                style={{
                    borderRadius: '10rem',
                    border: '1px solid rgb(255,180,0)',
                    width: isMobile ? '12rem' : '14rem',
                    overflow: 'hidden',
                    float: isMobile ? 'none' : 'right',

                }}
            >
                <b style={{
                    fontSize: '.8rem',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    userDrag: 'none',
                    position: 'absolute',
                    right: isMobile ? '' : '5rem',
                    left: isMobile ? '-2rem' : '',
                    zIndex: 5,
                    padding: isMobile ? '1rem' : '1.3rem 0',
                    width: isMobile ? '100%' : 'auto',  
                    textAlign: 'center',

                } as any}
                >MORE ABOUT ME</b>
                <Button
                    id='btn-more-about-me'
                    onClick={handleOpen}
                    style={{
                        backgroundColor: 'rgb(255,180,0)',
                        width: '1px',
                        height: isMobile ? '3rem' : '3.6rem',
                        minWidth: '0',
                        transition: 'all 0.25s',
                        float: isMobile ? 'right' : 'none',
                    }}
                >
                    <TransitEnterexitRoundedIcon
                        style={{
                            backgroundColor: 'rgb(255,180,0)',
                            position: 'absolute',
                            right: '0',
                            borderRadius: '50%',
                            padding: isMobile ? '.5rem' : '.85rem',
                            fontWeight: 'bold',
                            rotate: '225deg',
                            color: 'white',
                            fontSize: '2rem',
                            textAlign: 'center',
                        }}
                    />
                </Button>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>

                    </Box>
                </Fade>
            </Modal>
        </div >
    );
}