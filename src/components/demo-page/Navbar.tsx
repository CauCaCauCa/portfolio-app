
import React, { useContext } from 'react'
import ButtonExpand from './ButtonExpand'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SourceRoundedIcon from '@mui/icons-material/SourceRounded';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useThemeContext } from '../../components/demo-page/ThemeContext'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type Props = {
    curPage: string,
    setCurPage: Function,
}

export default function Navbar({ curPage, setCurPage }: Props) {
    const { theme, toggleTheme } = useThemeContext()!;

    const styleBtnSelect = {
        // 238,238,238
        backgroundColor: 'rgb(255,180,0)',
    }

    const styleBtnUnselect = {
        backgroundColor: theme === 'light' ? 'rgb(238,238,238)' : '#323232',
        color: theme === 'light' ? 'rgb(102,102,102)' : 'white',
    }

    return (
        <>
            <ButtonExpand
                onClick={toggleTheme}
                child={
                    theme === 'light' ? <DarkModeIcon style={{ fontSize: '1.5rem', color: 'rgb(102,102,102)' }} />
                        : <LightModeIcon style={{ fontSize: '1.5rem', color: 'white' }} />
                }
                style={{ position: 'fixed', top: '1rem', right: '1.5rem', backgroundColor: 'transparent', zIndex: 1000 }}
            />
            <div id='navbar' style={styleNavbar}>
                <ButtonExpand
                    onClick={() => setCurPage('home')}
                    child={<HomeRoundedIcon style={{ fontSize: '1.5rem' }} />}
                    style={{ ...(curPage === 'home' ? styleBtnSelect : styleBtnUnselect) }}
                    titleExpand='home'
                    curPage={curPage}
                />
                <ButtonExpand
                    onClick={() => setCurPage('about')}
                    child={<PersonRoundedIcon style={{ fontSize: '1.5rem' }} />}
                    style={{ ...(curPage === 'about' ? styleBtnSelect : styleBtnUnselect) }}
                    titleExpand='about'
                    curPage={curPage}
                />
                <ButtonExpand
                    onClick={() => setCurPage('project')}
                    child={<SourceRoundedIcon style={{ fontSize: '1.5rem' }} />}
                    style={{ ...(curPage === 'project' ? styleBtnSelect : styleBtnUnselect) }}
                    titleExpand='project'
                    curPage={curPage}
                />
                <ButtonExpand
                    onClick={() => setCurPage('contact')}
                    child={<DraftsIcon style={{ fontSize: '1.5rem' }} />}
                    style={{ ...(curPage === 'contact' ? styleBtnSelect : styleBtnUnselect) }}
                    titleExpand='contact'
                    curPage={curPage}
                />
            </div>
        </>
    )
}

const styleNavbar = {
    position: 'fixed' as 'fixed',
    top: '35%',
    right: '1.5rem',
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '1rem',
    // backgroundColor: 'red',
    zIndex: 100,
    // width: '10rem',
}