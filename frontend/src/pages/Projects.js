import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import NavContext from '../context/NavContext'

import DarkContext from '../context/DarkContext'

import AnimatedPage from '../components/AnimatedPage'
import styled from 'styled-components'
import imgB from '../images/DSC_3252.JPG'
import projectToDoImg from '../images/todo-app3.png'
import projectMovieSearch from '../images/IMG_6189.jpg'
import projectPortfolio from '../images/IMG_6188.jpg'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { FaGithub, FaReact } from 'react-icons/fa'
import { GiBottomRight3DArrow } from 'react-icons/gi'

const Projects = () => {
  const { openDrawerH } = useContext(NavContext)
  const { isDark } = useContext(DarkContext)
  const { t } = useTranslation('common')
  const ProjectPage = {
    WrapperMain: styled.section`
      background-image: ${({ dark }) =>
        dark
          ? `linear-gradient(
          rgba(109, 132, 197, 0.9),
          rgba(0, 0, 0, 0.9)
  ),
  url(${imgB})`
          : `linear-gradient(
            rgba(255, 255, 255, 0.9),
    rgba(69,139,116, 0.9)
  ),
  url(${imgB})`};

      overflow: hidden;
      max-width: 100%;
      overflow-x: hidden;
      height: 100vh;

      padding: 1.5em 1em;

      color: var(--color-foreground);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      z-index: 1;

      @media only screen and (max-width: 60em) {
        ${({ display }) =>
          display &&
          `
               display: flex !important;
        `}
        height: 100%;
        padding: 1.5em 0.1em;
      }
    `,

    WrapperH1: styled.h1`
      font-size: 8em;
      font-weight: 100;
      margin-bottom: 0.8em;

      @media only screen and (max-width: 60em) {
        font-size: 5em;
        margin-bottom: 1em;
        font-weight: bold;
      }
    `,

    Wrapper: styled.section`
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      font-size: 10em;
      z-index: 1;

      @media only screen and (max-width: 80em) {
        font-size: 2em;
        flex-direction: column;
        align-items: space-around;
        height: 100%;
        margin-bottom: 30px;
      }
    `,
  }

  return (
    <AnimatedPage>
      <ProjectPage.WrapperMain display={openDrawerH} dark={isDark} img={imgB}>
        <ProjectPage.WrapperH1>
          Projects <GiBottomRight3DArrow />
        </ProjectPage.WrapperH1>

        <ProjectPage.Wrapper>
          {' '}
          <Card
            sx={{
              maxWidth: 600,
              border: '3px solid white',
              backgroundColor: 'var(--color-background)',
              marginBottom: '0.8em',
              marginRight: '0.8em',
              marginLeft: '0.8em',
              borderRadius: '25px',
              position: 'relative',
            }}
          >
            <CardMedia
              component='img'
              alt='TO DO App'
              height='300'
              image={projectToDoImg}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h2'
                component='div'
                sx={{ fontWeight: 'bold', color: 'var(--color-foreground)' }}
              >
                TODO App
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{
                  color: 'var(--color-foreground)',
                  fontSize: '0.15em',
                  height: '7em',
                  overflow: 'auto',
                }}
              >
                ...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                style={{
                  position: 'absolute',
                  bottom: 0,
                }}
              >
                {' '}
                <a
                  style={{
                    color: 'var(--color-foreground)',
                    fontSize: '2em',
                    backgroundColor: 'var(--color-background)',
                  }}
                  target='_blank'
                  href='https://github.com/BensDevDe/To-Do-App'
                  rel='noreferrer'
                >
                  <FaGithub />
                  <span
                    style={{
                      marginLeft: '10px',
                    }}
                  >
                    GitHub
                  </span>
                </a>
              </Button>
              <Button
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '40%',
                }}
              >
                {' '}
                <a
                  style={{
                    color: 'var(--color-foreground)',
                    fontSize: '2em',
                    backgroundColor: 'var(--color-background)',
                  }}
                  target='_blank'
                  href='https://xenodochial-mahavira-e4828c.netlify.app/'
                  rel='noreferrer'
                >
                  <span
                    style={{
                      marginLeft: '10px',
                    }}
                  >
                    Visit
                  </span>
                </a>
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 600,
              border: '3px solid white',
              backgroundColor: 'var(--color-background)',
              marginBottom: '0.8em',
              marginRight: '0.8em',
              marginLeft: '0.8em',
              borderRadius: '25px',
              position: 'relative',
            }}
          >
            <CardMedia
              component='img'
              alt='Movie Search App'
              height='300'
              image={projectMovieSearch}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h2'
                component='div'
                sx={{ fontWeight: 'bold', color: 'var(--color-foreground)' }}
              >
                MOVIE SEARCH
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{
                  color: 'var(--color-foreground)',
                  fontSize: '0.15em',
                  height: '7em',
                  overflow: 'auto',
                }}
              >
                ...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                style={{
                  position: 'absolute',
                  bottom: 0,
                }}
              >
                {' '}
                <a
                  style={{
                    color: 'var(--color-foreground)',
                    fontSize: '2em',
                    backgroundColor: 'var(--color-background)',
                  }}
                  target='_blank'
                  href='https://github.com/BensDevDe/Movie-Search'
                  rel='noreferrer'
                >
                  <FaGithub />
                  <span
                    style={{
                      marginLeft: '10px',
                    }}
                  >
                    GitHub
                  </span>
                </a>
              </Button>
              <Button
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '40%',
                }}
              >
                {' '}
                <a
                  style={{
                    color: 'var(--color-foreground)',
                    fontSize: '2em',
                    backgroundColor: 'var(--color-background)',
                  }}
                  target='_blank'
                  href='https://clever-hypatia-95f748.netlify.app/'
                  rel='noreferrer'
                >
                  <span
                    style={{
                      marginLeft: '10px',
                    }}
                  >
                    Visit
                  </span>
                </a>
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 600,
              border: '3px solid white',
              backgroundColor: 'var(--color-background)',
              marginRight: '0.8em',
              marginLeft: '0.8em',
              borderRadius: '25px',
              position: 'relative',
            }}
          >
            <CardMedia
              component='img'
              alt='Portfolio Page'
              height='300'
              image={projectPortfolio}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h2'
                component='div'
                sx={{ fontWeight: 'bold', color: 'var(--color-foreground)' }}
              >
                PORTFOLIO
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{
                  color: 'var(--color-foreground)',
                  fontSize: '0.15em',
                  height: '7em',
                  overflow: 'auto',
                }}
              >
                ...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                style={{
                  position: 'absolute',
                  bottom: 0,
                }}
              >
                {' '}
                <a
                  style={{
                    color: 'var(--color-foreground)',
                    fontSize: '2em',
                    backgroundColor: 'var(--color-background)',
                  }}
                  target='_blank'
                  href='https://github.com/BensDevDe/Portfolio-2'
                  rel='noreferrer'
                >
                  <FaGithub />
                  <span
                    style={{
                      marginLeft: '10px',
                    }}
                  >
                    GitHub
                  </span>
                </a>
              </Button>
              <Button
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '40%',
                }}
              >
                {' '}
                <a
                  style={{
                    color: 'var(--color-foreground)',
                    fontSize: '2em',
                    backgroundColor: 'var(--color-background)',
                  }}
                  target='_blank'
                  href='https://webogies.com'
                  rel='noreferrer'
                >
                  <span
                    style={{
                      marginLeft: '10px',
                    }}
                  >
                    Visit
                  </span>
                </a>
              </Button>
            </CardActions>
          </Card>
        </ProjectPage.Wrapper>
      </ProjectPage.WrapperMain>
    </AnimatedPage>
  )
}

export default Projects
