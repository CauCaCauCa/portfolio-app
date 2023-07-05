import React from 'react'
import './_board.scss'
import CircleProgress from '../CircleProgress'
import ModalDownloadCV from '../ModalDownloadCV'
import { useThemeContext } from '@/components/demo-page/ThemeContext'

type Props = {
    style?: React.CSSProperties,
    isMobile?: boolean

}

export default function PersonalBoard({ style, isMobile }: Props) {
    const { theme } = useThemeContext()!;
    const stylePersonalBoard = {
        ...style,
    }
    return (
        <div style={stylePersonalBoard} className='personal-board'>
            {!isMobile &&
                <div className='progress-skill'>
                    <CircleProgress title={'JS/TS'} value={90} />
                    <CircleProgress title={'HTML/CSS'} value={80} />
                    <CircleProgress title={'React'} value={85} />
                    <CircleProgress title={'Java'} value={80} />
                </div>
            }
            <div className='infomation'
            >
                {
                    !isMobile ?
                        <>
                            <div className='title'
                                style={{
                                    color: theme === 'light' ? 'rgb(102,102,102)' : 'white',
                                }}
                            >PERSONAL INFOS</div>
                        </>
                        :
                        <>
                            <div className='title'
                                style={{
                                    color: theme === 'light' ? 'rgb(102,102,102)' : 'white',
                                    fontSize: '1.2rem',
                                    marginBottom: '2rem',
                                    textAlign: 'right'
                                }}
                            >PERSONAL INFOS</div>
                        </>
                }
                <div className='info'
                >
                    <div className='item'
                        style={{
                            color: theme === 'light' ? 'rgb(102,102,102)' : 'white',
                        }}
                    >Ng Trong <span style={{ color: theme === 'light' ? 'rgb(133,133,133)' : 'rgba(224, 219, 219, 0.916)', fontWeight: '400' }}>:Last Name</span></div>
                    <div className='item'
                        style={{
                            color: theme === 'light' ? 'rgb(102,102,102)' : 'white',
                        }}
                    >Tien <span style={{ color: theme === 'light' ? 'rgb(102,102,102)' : 'white', fontWeight: '400' }}>:First Name</span></div>
                    <div className='item'
                        style={{
                            color: theme === 'light' ? 'rgb(102,102,102)' : 'white',
                        }}
                    >VietNam <span style={{ color: theme === 'light' ? 'rgb(102,102,102)' : 'white', fontWeight: '400' }}>:Nationality</span></div>
                    <div className='item'
                        style={{
                            color: theme === 'light' ? 'rgb(102,102,102)' : 'white',
                        }}
                    >21 <span style={{ color: theme === 'light' ? 'rgb(102,102,102)' : 'white', fontWeight: '400' }}>:Age</span></div>
                    <div className='item'
                        style={{
                            color: theme === 'light' ? 'rgb(102,102,102)' : 'white',
                        }}
                    >tiennt1242@gmail.com <span style={{ color: theme === 'light' ? 'rgb(102,102,102)' : 'white', fontWeight: '400' }}>:Email</span></div>
                    <div className='item'
                        style={{
                            color: theme === 'light' ? 'rgb(102,102,102)' : 'white',
                        }}
                    >+84 559330072 <span style={{ color: theme === 'light' ? 'rgb(102,102,102)' : 'white', fontWeight: '400' }}>:Phone</span></div>
                    <div className='item'
                        style={{
                            color: theme === 'light' ? 'rgb(102,102,102)' : 'white',
                        }}
                    >
                        <a href='https://www.facebook.com/tiennt.fu/' target='blank' style={{ color: '#2bc42b' }}>tiennt.fu</a>
                        <span style={{ color: theme === 'light' ? 'rgb(102,102,102)' : 'white', fontWeight: '400' }}> :Facebook</span>
                    </div>
                    <div className='item'
                        style={{
                            color: theme === 'light' ? 'rgb(102,102,102)' : 'white',
                        }}
                    >
                        <a href='https://github.com/NT-Tien' target='blank' style={{ color: '#2bc42b' }}>NT-Tien</a>
                        <span style={{ color: theme === 'light' ? 'rgb(102,102,102)' : 'white', fontWeight: '400' }}> :Github</span>
                    </div>
                </div>
                <div className='btn-custom-2' style={{ marginTop: '1rem', float: 'right' }}>
                    <div className='icon' style={{ position: 'absolute', right: '14.51rem' }}>
                        <i className="fa-solid fa-download fa-2xl" style={{ scale: '.7' }}></i>
                    </div>
                    <div className='detail' style={{ position: 'absolute', right: '14.51rem' }} />
                    {/* <h5 style={{ position: 'relative', top: '-.3rem', left: '-4.5rem', userSelect: 'none' }}>DOWNLOAD CV</h5> */}
                    <ModalDownloadCV isMobile={isMobile}  />
                </div>
            </div>
            {isMobile &&
                <>
                    <p style={{ textAlign: 'left', marginLeft: '-2rem', lineHeight: '0', color: theme === 'light' ? 'rgb(102,102,102)' : 'white' }}>MY SKILLS</p>
                    <div className='progress-skill'>
                        <CircleProgress title={'JS/TS'} value={90} isMobile={true} />
                        <CircleProgress title={'HTML/CSS'} value={80} isMobile={true} />
                        <CircleProgress title={'React'} value={85} isMobile={true} />
                        <CircleProgress title={'Java'} value={80} isMobile={true} />
                    </div>
                </>
            }
        </div>
    )
}