import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import styled from 'styled-components'
import imgB from '../images/DSC_3252.JPG'
import projectToDoImg from '../images/todo-app3.png'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { FaGithub, FaReact } from 'react-icons/fa'

const Projects = () => {
  const ProjectPage = {
    Wrapper: styled.section`
      background-image: linear-gradient(
          rgba(109, 132, 197, 0.9),
          rgba(0, 0, 0, 0.9)
        ),
        url(${(props) => props.img});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-attachment: fixed;

      overflow: hidden;
      max-width: 100%;
      overflow-x: hidden;
      height: 100vh;

      padding: 1.5em 1em;

      color: var(--color-foreground);

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      font-size: 10em;
      z-index: 1;

      @media only screen and (max-width: 60em) {
        ${({ display }) =>
          display &&
          `
               display: flex !important;
        `}

        font-size: 5em;
        padding: 70% 0px;
      }
    `,
  }

  return (
    <AnimatedPage>
      <ProjectPage.Wrapper img={imgB}>
        {' '}
        <Card
          sx={{
            maxWidth: 600,
            border: '6px solid var(--color-foreground)',
            backgroundColor: 'var(--color-background)',
          }}
        >
          <CardMedia
            component='img'
            alt='green iguana'
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
      </ProjectPage.Wrapper>
    </AnimatedPage>
  )
}

export default Projects
