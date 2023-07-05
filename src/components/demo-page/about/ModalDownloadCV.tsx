import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TransitEnterexitRoundedIcon from '@mui/icons-material/TransitEnterexitRounded';
// import '../page.scss'
import { useThemeContext } from '@/components/demo-page/ThemeContext'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type Props = {
    isMobile?: boolean,
}

export default function ModalMoreAboutMe({ isMobile }: Props) {
    const { theme } = useThemeContext()!;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleOnMouseOver() {
        const btnMoreAboutMe = document.getElementById('btn-more-about-me')!;
        btnMoreAboutMe.style.width = '14rem';
    }

    function handleOnMouseOut() {
        const btnMoreAboutMe = document.getElementById('btn-more-about-me')!;
        btnMoreAboutMe.style.width = '1px';
    }

    const styleIsMobile = {
        textAlign: 'right' as 'right',
    }
    return (
        <div id='modal-more-about-me'
            style={isMobile ? { ...styleIsMobile } : {}}
        >
            <div
                onMouseOver={handleOnMouseOver}
                onMouseOut={handleOnMouseOut}
                style={{
                    borderRadius: '10rem',
                    border: '1px solid rgb(255,180,0)',
                    width: '14rem',
                    float: 'right',
                    overflow: 'hidden',
                }}
            >
                <b style={{
                    fontSize: '.8rem',
                    // marginRight: '1.2rem',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    userDrag: 'none',
                    position: 'absolute',
                    right: isMobile ? '35%' : '21.5%',
                    zIndex: 5,
                    padding: '1.3rem 0',
                    color: theme === 'light' ? 'rgb(102,102,102)' : 'white',
                } as any}
                >DOWNLOAD CV</b>
                <Button
                    id='btn-more-about-me'
                    onClick={handleOpen}
                    style={{
                        backgroundColor: 'rgb(255,180,0)',
                        // borderRadius: '20rem',   
                        width: '1px',
                        height: '3.6rem',
                        minWidth: '0',
                        transition: 'all 0.25s',
                    }}
                >
                    <TransitEnterexitRoundedIcon
                        style={{
                            backgroundColor: 'rgb(255,180,0)',
                            position: 'absolute',
                            right: '0',
                            borderRadius: '50%',
                            padding: '.85rem',
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
        </div>
    );
}