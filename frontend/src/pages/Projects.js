import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

import NavContext from '../context/NavContext'

import DarkContext from '../context/DarkContext'

import { motion } from 'framer-motion'

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
  const [showIt, setShowIt] = useState(false)
  const [showIt1, setShowIt1] = useState(false)

  console.log(showIt, showIt1)

  const zoomInOut = () => {
    if (showIt === false) {
      setShowIt(true)
      setShowIt1(false)
    } else {
      setShowIt(false)
    }
  }
  const zoomInOut1 = () => {
    if (showIt1 === false) {
      setShowIt1(true)
      setShowIt(false)
    } else {
      setShowIt1(false)
    }
  }

  const variants = {
    open: {
      opacity: 1,
      x: '40%',
      y: '5%',
      scale: 1.8,
      transition: { duration: 1 },
    },
    closed: {
      opacity: 0.7,
      x: '0%',
      y: '0%',
      scale: 1,
      transition: { duration: 2 },
    },
  }

  const ProjectPage = {
    WrapperMain: styled.section`
      background-image: ${({ dark }) =>
        dark
          ? `linear-gradient(
          rgba(109, 132, 0, 0.9),
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
      height: 100%;

      padding: 1.5em 1em;

      color: var(--color-foreground);

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

    H1: styled.h1`
      font-size: 7em;
      font-weight: 100;
      margin-bottom: 0.8em;

      padding: 1em 0em 0em 1.5em;

      @media only screen and (max-width: 60em) {
        font-size: 5em;
        margin-bottom: 1em;
        font-weight: bold;
      }
    `,

    Wrapper: styled.section`
      display: flex;
      flex-direction: column;

      z-index: 1;

      @media only screen and (max-width: 80em) {
      }
    `,

    BoxMainLink: styled.a``,

    Box: styled.div`
      /* min-width: 120em;
      max-width: 50em; */
      min-height: 50em;

      padding: 10px 15px 10px 50px;

      position: relative;

      display: flex;
      justify-content: space-between;

      &:hover {
      }
    `,

    BoxHead: styled.figure`
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-around;
    `,

    BoxImage: styled.img`
      width: 100%;
      border: 1px solid var(--color-foreground);
      box-shadow: 5px 5px var(--color-foreground);

      cursor: ${({ show, show1 }) =>
        (show || show1) === true ? `zoom-out` : `zoom-in`};

      &:hover {
        box-shadow: -5px -5px var(--color-foreground);
      }
    `,
    BoxImageCaption: styled.figcaption`
      font-size: 3em;
      font-weight: bold;
      position: absolute;
      bottom: 6%;
      left: 0.3em;
      color: white;

      padding-left: 30px;
    `,

    BoxText: styled.p`
      width: 100%;
      min-height: 10em;
      padding: 20px 40px;
      margin-bottom: 20px;
      font-size: 1.7em;

      border-bottom: none;
    `,

    BoxLink: styled.div`
      width: calc(100% - 25px);
      display: flex;
      justify-content: flex-end;
      align-items: center;

      padding: 10px 0;

      position: absolute;
      bottom: 5%;
    `,

    Link: styled.a`
      color: white;
      font-size: 2em;

      &:last-child {
        margin-right: 2em;
        margin-left: 2em;
      }
    `,
  }

  return (
    <AnimatedPage>
      <ProjectPage.WrapperMain display={openDrawerH} dark={isDark} img={imgB}>
        <ProjectPage.H1>Projects</ProjectPage.H1>

        <ProjectPage.Wrapper>
          <ProjectPage.Box showIt={showIt}>
            <motion.button
              style={{ backgroundColor: 'transparent', border: 'none' }}
              show={showIt}
              animate={showIt ? 'open' : 'closed'}
              variants={variants}
              onClick={zoomInOut}
            >
              <ProjectPage.BoxHead>
                {' '}
                <ProjectPage.BoxImage src={projectToDoImg} show={showIt} />
                <ProjectPage.BoxImageCaption>
                  To-Do App
                </ProjectPage.BoxImageCaption>
                <ProjectPage.BoxLink dark={isDark} img={imgB}>
                  <ProjectPage.Link
                    target='_blank'
                    href='https://github.com/BensDevDe/To-Do-App'
                    rel='noreferrer'
                  >
                    {' '}
                    <FaGithub />
                  </ProjectPage.Link>
                  <ProjectPage.Link
                    target='_blank'
                    href='https://xenodochial-mahavira-e4828c.netlify.app/'
                    rel='noreferrer'
                  >
                    Visit
                  </ProjectPage.Link>
                </ProjectPage.BoxLink>
              </ProjectPage.BoxHead>

              <ProjectPage.BoxText>test text</ProjectPage.BoxText>
            </motion.button>
          </ProjectPage.Box>{' '}
          <ProjectPage.Box>
            <motion.button
              style={{ backgroundColor: 'transparent', border: 'none' }}
              animate={showIt1 ? 'open' : 'closed'}
              variants={variants}
              onClick={zoomInOut1}
            >
              <ProjectPage.BoxHead>
                {' '}
                <ProjectPage.BoxImage src={projectToDoImg} show={showIt1} />
                <ProjectPage.BoxImageCaption>
                  To-Do App
                </ProjectPage.BoxImageCaption>
                <ProjectPage.BoxLink dark={isDark} img={imgB}>
                  <ProjectPage.Link
                    target='_blank'
                    href='https://github.com/BensDevDe/To-Do-App'
                    rel='noreferrer'
                  >
                    {' '}
                    <FaGithub />
                  </ProjectPage.Link>
                  <ProjectPage.Link
                    target='_blank'
                    href='https://xenodochial-mahavira-e4828c.netlify.app/'
                    rel='noreferrer'
                  >
                    Visit
                  </ProjectPage.Link>
                </ProjectPage.BoxLink>
              </ProjectPage.BoxHead>

              <ProjectPage.BoxText>test text</ProjectPage.BoxText>
            </motion.button>
          </ProjectPage.Box>{' '}
          {/* <Card
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
          </Card> */}
        </ProjectPage.Wrapper>
      </ProjectPage.WrapperMain>
    </AnimatedPage>
  )
}

export default Projects
