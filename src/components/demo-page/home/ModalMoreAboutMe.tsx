import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TransitEnterexitRoundedIcon from '@mui/icons-material/TransitEnterexitRounded';
import Title from '../Title';
import PersonalBoard from '../about/board-presentation/PersonalBoard';
import ExperienceBoard from '../about/board-presentation/ExperienceBoard';
import { useThemeContext } from '@/components/demo-page/ThemeContext';

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
                    <div
                        style={{
                            backgroundColor: theme === 'dark' ? 'rgb(30,30,30)' : 'white',
                            width: isMobile ? '96%' : '70%',
                            position: 'absolute',
                            top: '15%',
                            left: isMobile ? '2%' : '15%',
                            height: '30rem',
                            overflow: 'auto',
                        }}
                    >
                        <div
                        >
                            <Title title='ABOUT' titleHighlight='ME' titleBehind='RESUME' isMobile={true} />
                            <PersonalBoard style={{
                                marginTop: '10rem',
                            }}
                                isMobile={isMobile}
                            />
                            <ExperienceBoard isMobile={true} />
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div >
    );
}