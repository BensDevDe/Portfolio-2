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
      }
    `,

    WrapperH1: styled.h1`
      font-size: 8em;
      font-weight: 100;

      @media only screen and (max-width: 60em) {
        font-size: 4em;
        margin-bottom: -2em;
      }
    `,

    Wrapper: styled.section`
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      font-size: 10em;
      z-index: 1;

      @media only screen and (max-width: 60em) {
        font-size: 5em;
        padding: 2em 0.5em;
        flex-direction: column;
        align-items: space-around;
        height: 100%;
        gap: 5%;
      }
    `,
  }

  return (
    <AnimatedPage>
      <ProjectPage.WrapperMain display={openDrawerH} dark={isDark} img={imgB}>
        <ProjectPage.WrapperH1>Projects</ProjectPage.WrapperH1>

        <ProjectPage.Wrapper>
          {' '}
          <Card
            sx={{
              maxWidth: 600,
              border: '6px solid white',
              backgroundColor: 'var(--color-background)',
              marginBottom: '0.2em',
              marginRight: '0.2em',
            }}
          >
            <CardMedia
              component='img'
              alt='TO DO App'
              // height="140"
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
                sx={{ color: 'var(--color-foreground)', fontSize: '0.15em' }}
              >
                ...
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
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
              <Button>
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
              border: '6px solid white',
              backgroundColor: 'var(--color-background)',
              marginBottom: '0.2em',
              marginRight: '0.2em',
            }}
          >
            <CardMedia
              component='img'
              alt='Movie Search App'
              // height="140"
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
                sx={{ color: 'var(--color-foreground)', fontSize: '0.15em' }}
              >
                ...
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
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
              <Button>
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
              border: '6px solid white',
              backgroundColor: 'var(--color-background)',
            }}
          >
            <CardMedia
              component='img'
              alt='Portfolio Page'
              // height="140"
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
                sx={{ color: 'var(--color-foreground)', fontSize: '0.15em' }}
              >
                ...
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
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
              <Button>
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
