import React, { ChangeEvent, useState } from 'react'
import Title from '../Title'
import './ContactTitle.scss'
import SendMailButton from './SendMailButton';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import CallIcon from '@mui/icons-material/Call';
import { useThemeContext } from '@/components/demo-page/ThemeContext'
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
type Props = {
  isMobile?: boolean,
}

export default function ContactTitle({ isMobile }: Props) {
  const { theme } = useThemeContext()!;
  const [EMAIL, setEMAIL] = useState('');
  const [NAME, setNAME] = useState('');
  const [SUBJECT, setSUBJECT] = useState('');
  const [MESSAGE, setMESSAGE] = useState('');


  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEMAIL(event.target.value);
  };
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setNAME(event.target.value);
  };
  const handleChangeSubject = (event: ChangeEvent<HTMLInputElement>) => {
    setSUBJECT(event.target.value);
  };
  const handleChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMESSAGE(event.target.value);
  };

  const handleOnSubmit = () => {
    if (EMAIL === '' || NAME === '' || SUBJECT === '' || MESSAGE === '') {
      alert('Please fill in all fields');
      return;
    }
    // clear all fields
    setEMAIL('');
    setNAME('');
    setSUBJECT('');
    setMESSAGE('');
    var alertE = document.getElementById('alert')!;
    alertE.style.display = '';
    alertE.style.animation = 'slideInFromLeft .5s';
    setTimeout(() => {
      alertE.style.display = 'none';
      alertE.style.animation = '';
    }, 5000);
  }

  return (
    <div id='project-title'>
      <Title title='GET IN' titleHighlight='TOUCH' titleBehind='CONTACT' isMobile={isMobile} />
      <div id='body-project-page'
        style={{
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        {
          isMobile &&
          <div id='contact-info'
            style={{
              color: theme === 'dark' ? '#fff' : 'rgb(102,102,102)',
              textAlign: 'right',
              width: '96%',
              padding: '20% 2% 0 2%',
            }}
          >
            <h2>! DON&apos;T BE SHY</h2>
            <p
              style={{
                fontSize: '15px',
              }}
            >
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <br />
            <div>
              <div
                style={{
                  display: 'inline-block',
                }}
              >
                <h4 style={{
                  lineHeight: '.1rem',
                }}>MAIL ME</h4>
                <p
                  style={{
                    lineHeight: '.1rem',
                    fontSize: '14px',
                  }}
                >tiennt1242@gmail.com</p>
              </div>
              <MarkAsUnreadIcon
                style={{
                  fontSize: '2.5rem',
                  marginLeft: '2%',
                  color: 'rgb(255,180,0)',
                }}
              />
            </div>
            <div>
              <div
                style={{
                  display: 'inline-block',
                }}
              >
                <h4
                  style={{
                    lineHeight: '.1rem',
                  }}
                >CALL ME</h4>
                <p
                  style={{
                    lineHeight: '.1rem',
                    fontSize: '14px',
                  }}
                >0559330072</p>
              </div>
              <CallIcon
                style={{
                  fontSize: '2.5rem',
                  marginLeft: '2%',
                  color: 'rgb(255,180,0)',
                }} />
            </div>
          </div>
        }
        <div id='form'
          style={{
            width: isMobile ? '78%' : '45%',
            marginBottom: isMobile ? '20%' : '0',
          }}
        >
          {
            !isMobile &&
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2%',
            }}>
              <input
                type='email'
                style={{
                  // border: '1px solid #111',
                  background: theme === 'dark' ? '#252525' : '#f5f5f5',
                  color: theme === 'dark' ? '#fff' : '#000',
                  padding: '11px 26px',
                  borderRadius: '30px',
                  outline: 'none',
                  transition: '.3s',
                  width: '49%',
                }}
                value={EMAIL}
                onChange={handleChangeEmail}
                placeholder='YOUR EMAIL'
              />
              <input
                type='text'
                style={{
                  // border: '1px solid #111',
                  background: theme === 'dark' ? '#252525' : '#f5f5f5',
                  color: theme === 'dark' ? '#fff' : '#000',
                  padding: '11px 26px',
                  borderRadius: '30px',
                  outline: 'none',
                  transition: '.3s',
                  width: '49%',
                }}
                value={NAME}
                onChange={handleChangeName}
                placeholder='YOUR NAME'
              />
            </div>
          }
          {
            isMobile &&
            <>
              <input
                style={{
                  background: theme === 'dark' ? '#252525' : '#f5f5f5',
                  color: theme === 'dark' ? '#fff' : '#000',
                  padding: '11px 26px',
                  borderRadius: '30px',
                  outline: 'none',
                  transition: '.3s',
                  width: '92%',
                }}
                value={EMAIL}
                onChange={handleChangeEmail}
                placeholder='YOUR EMAIL'
              />
              <br />
              <br />
              <input
                style={{
                  background: theme === 'dark' ? '#252525' : '#f5f5f5',
                  color: theme === 'dark' ? '#fff' : '#000',
                  padding: '11px 26px',
                  borderRadius: '30px',
                  outline: 'none',
                  transition: '.3s',
                  width: '92%',
                }}
                value={NAME}
                onChange={handleChangeName}
                placeholder='YOUR NAME'
              />
              <br />
            </>
          }
          <br />
          <input
            style={{
              background: theme === 'dark' ? '#252525' : '#f5f5f5',
              color: theme === 'dark' ? '#fff' : '#000',
              padding: '11px 26px',
              borderRadius: '30px',
              outline: 'none',
              transition: '.3s',
              width: '92%',
            }}
            value={SUBJECT}
            onChange={handleChangeSubject}
            placeholder='YOUR SUBJECT'
          />
          <br />
          <br />
          <textarea
            value={MESSAGE}
            id="message"
            name="message"
            rows={4}
            cols={50}
            onChange={handleChangeMessage}
            placeholder='YOUR MESSAGE'
            style={{
              background: theme === 'dark' ? '#252525' : '#f5f5f5',
              color: theme === 'dark' ? '#fff' : 'rgb(120,120,120)',
              padding: '11px 26px',
              borderRadius: '30px',
              outline: 'none',
              transition: '.3s',
              width: '92%',
            }}
          />
          <br />
          <br />
          <div
            onClick={handleOnSubmit}
          >
            <SendMailButton  isMobile={isMobile}/>
          </div>
        </div>
        {
          !isMobile &&
          <div id='contact-info'
            style={{
              color: theme === 'dark' ? '#fff' : 'rgb(102,102,102)',
              textAlign: 'right',
              width: '25%',
              padding: '6% 0',
            }}
          >
            <h2>! DON&apos;T BE SHY</h2>
            <p
              style={{
                fontSize: '15px',
              }}
            >
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <br />
            <div>
              <div
                style={{
                  display: 'inline-block',
                }}
              >
                <h4 style={{
                  lineHeight: '.1rem',
                }}>MAIL ME</h4>
                <p
                  style={{
                    lineHeight: '.1rem',
                    fontSize: '14px',
                  }}
                >tiennt1242@gmail.com</p>
              </div>
              <MarkAsUnreadIcon
                style={{
                  fontSize: '2.5rem',
                  marginLeft: '2%',
                  color: 'rgb(255,180,0)',
                }}
              />
            </div>
            <div>
              <div
                style={{
                  display: 'inline-block',
                }}
              >
                <h4
                  style={{
                    lineHeight: '.1rem',
                  }}
                >CALL ME</h4>
                <p
                  style={{
                    lineHeight: '.1rem',
                    fontSize: '14px',
                  }}
                >0559330072</p>
              </div>
              <CallIcon
                style={{
                  fontSize: '2.5rem',
                  marginLeft: '2%',
                  color: 'rgb(255,180,0)',
                }} />
            </div>
          </div>
        }
      </div>
      <Alert onClose={() => {
        var alertE = document.getElementById('alert')!;
        alertE.style.display = 'none';
      }}
        id='alert'
        style={{
          position: 'fixed',
          top: '10%',
          display: 'none',
        }}
      ><span>Message send successfully check it out!</span></Alert>
    </div>
  )
}