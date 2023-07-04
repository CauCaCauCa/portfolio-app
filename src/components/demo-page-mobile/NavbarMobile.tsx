
import React, { useContext } from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SourceRoundedIcon from '@mui/icons-material/SourceRounded';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useThemeContext } from '../../components/demo-page/ThemeContext'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ButtonExpand from '../demo-page/ButtonExpand';

type Props = {
    curPage: string,
    setCurPage: Function,
}

export default function NavbarMobile({ curPage, setCurPage }: Props) {
    const { theme, toggleTheme } = useThemeContext()!;

    const styleBtnSelect = {
        // 238,238,238
        backgroundColor: 'rgb(255,180,0)',
    }

    const styleBtnUnselect = {
        backgroundColor: theme === 'light' ? 'rgb(238,238,238)' : '#323232',
        color: theme === 'light' ? 'rgb(102,102,102)' : 'white',
    }

    const styleNavbar = {
        position: 'fixed' as 'fixed',
        bottom: '0',
        width: '80%',
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between',
        backgroundColor: theme === 'light' ? 'rgb(238,238,238)' : '#323232',
        zIndex: 100,
        padding: '.5rem 10%',
    }

    return (
        <>
            <ButtonExpand
                onClick={toggleTheme}
                child={
                    theme === 'light' ? <DarkModeIcon style={{ fontSize: '1.5rem', color: 'rgb(102,102,102)' }} />
                        : <LightModeIcon style={{ fontSize: '1.3rem', color: 'white' }} />
                }
                style={{ position: 'fixed', top: '1rem', right: '1.5rem', backgroundColor: 'transparent', zIndex: 1000 }}
            />
            <div id='navbar' style={styleNavbar}>
                <ButtonExpand
                    onClick={() => setCurPage('home')}
                    child={<HomeRoundedIcon style={{ fontSize: '1.3rem' }} />}
                    style={{
                        ...(curPage === 'home' ? styleBtnSelect : styleBtnUnselect),
                        height: '2.5rem',
                        width: '2.5rem',
                    }}
                    // titleExpand='home'
                    curPage={curPage}
                />
                <ButtonExpand
                    onClick={() => setCurPage('about')}
                    child={<PersonRoundedIcon style={{ fontSize: '1.3rem' }} />}
                    style={{
                        ...(curPage === 'about' ? styleBtnSelect : styleBtnUnselect),
                        height: '2.5rem',
                        width: '2.5rem',
                    }}
                    // titleExpand='about'
                    curPage={curPage}
                />
                <ButtonExpand
                    onClick={() => setCurPage('project')}
                    child={<SourceRoundedIcon style={{ fontSize: '1.3rem' }} />}
                    style={{
                        ...(curPage === 'project' ? styleBtnSelect : styleBtnUnselect),
                        height: '2.5rem',
                        width: '2.5rem',
                    }}
                    // titleExpand='project'
                    curPage={curPage}
                />
                <ButtonExpand
                    onClick={() => setCurPage('contact')}
                    child={<DraftsIcon style={{ fontSize: '1.3rem' }} />}
                    style={{
                        ...(curPage === 'contact' ? styleBtnSelect : styleBtnUnselect),
                        height: '2.5rem',
                        width: '2.5rem',
                    }}
                    // titleExpand='contact'
                    curPage={curPage}
                />
            </div>
        </>
    )
}
