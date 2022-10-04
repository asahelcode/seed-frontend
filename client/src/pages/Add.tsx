import React, { FormEvent, useEffect, useState } from 'react'
import { Container, Paper, TextField, InputLabel, Select, MenuItem, Button, SelectProps } from '@material-ui/core'
import { Stack, Typography } from '@mui/material'
import useStyle from '../styles'
import File from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { postBlog } from '../action/Blog'
import { createBook } from '../action/Book'
import { createProject } from '../action/Project'

const Add = () => {
  const classes = useStyle()

  const [blogState, setblogState] = useState({ title: "", tags: [""], description: "" })
  const [project, setproject] = useState({ name: "", github: "", url: "", technologies: [""], img: "", description: "" })
  const [book, setbook] = useState({ cover: "", name: "", genre: "", publisher: "", author: "", rating: 0, review: "", url: "", pages: 0 })
  const [category, setcategory] = useState("")


  const dispatch = useDispatch();


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (category === 'project') {
      if (project) {
        dispatch(createProject(project))
      }
    } else if (category === 'book') {
      if (book) {
        dispatch(createBook(book))
      }
    } else {
      if (blogState) {
        dispatch(postBlog(blogState));
      }
    }

    window.location.reload();
  }

  return (
    <Container maxWidth='sm'>
      <Paper elevation={3} className={classes.form}>
        <form action="" onSubmit={handleSubmit}>
          <Stack direction='row' justifyContent='center'>
            <Typography textTransform='capitalize' variant='h4' mb={3}>{category}</Typography>
          </Stack>
          {category === 'blog' ?
            <>
              <Stack gap={2}>
                <TextField type='text' variant='outlined' label='Title' fullWidth value={blogState.title}
                  onChange={(e) => { setblogState({ ...blogState, title: e.target.value }) }} />
                <TextField type='text' variant='outlined' label='Tags, comma separated' fullWidth value={blogState.tags}
                  onChange={(e) => { setblogState({ ...blogState, tags: e.target.value.split(',') }) }} />
                <Stack>
                  <textarea maxLength={1000} placeholder="Start blogging" style={{ height: '20vh', padding: '10px' }}
                    value={blogState.description}
                    onChange={(e) => { setblogState({ ...blogState, description: e.target.value }) }}
                    className={classes.textArea}
                  />
                </Stack>
              </Stack>
            </>
            : ""}
          {category === 'project' ?
            <Stack gap={2}>
              <TextField type='text' variant='outlined' label='Project name' fullWidth value={project.name}
                onChange={(e) => { setproject({ ...project, name: e.target.value }) }} />
              <TextField type='url' variant='outlined' label='Github url' fullWidth value={project.github}
                onChange={(e) => { setproject({ ...project, github: e.target.value }) }} />
              <TextField type='url' variant='outlined' label='website url' fullWidth value={project.url}
                onChange={(e) => { setproject({ ...project, url: e.target.value }) }} />
              <TextField type='text' variant='outlined' label='Technologies, comma separated' fullWidth value={project.technologies}
                onChange={(e) => { setproject({ ...project, technologies: e.target.value.split(',') }) }} />
              <Stack>
                <textarea maxLength={1000} placeholder="Enter project description" style={{ height: '20vh', padding: '10px' }}
                  value={project.description}
                  onChange={(e) => { setproject({ ...project, description: e.target.value }) }}
                  className={classes.textArea}
                />
              </Stack>
              <File multiple={false} onDone={({ base64 }) => { setproject({ ...project, img: base64 }) }} />
            </Stack>
            : ""
          }

          {category === 'book' ?
            <Stack gap={2}>
              <TextField type='text' variant='outlined' label='Book name' fullWidth value={book.name}
                onChange={(e) => { setbook({ ...book, name: e.target.value }) }} required />
              <TextField type='url' variant='outlined' label='Image link' fullWidth value={book.cover}
                onChange={(e) => { setbook({ ...book, cover: e.target.value }) }} required />
              <TextField type='text' variant='outlined' label='Genre' fullWidth value={book.genre}
                onChange={(e) => { setbook({ ...book, genre: e.target.value }) }} />
              <TextField type='text' variant='outlined' label='Author' fullWidth value={book.author}
                onChange={(e) => { setbook({ ...book, author: e.target.value }) }} required />
              <TextField type='text' variant='outlined' label='Publisher' fullWidth value={book.publisher}
                onChange={(e) => { setbook({ ...book, publisher: e.target.value }) }} />
              <input type='number' min='1' max='5' placeholder='Rating (1-5)' className={classes.rating} value={book.rating}
                onChange={(e) => { setbook({ ...book, rating: (e.target.value as any) as number }) }} />
              <TextField type='url' variant='outlined' label='Download link' fullWidth value={book.url}
                onChange={(e) => { setbook({ ...book, url: e.target.value }) }} required />
              <TextField type='number' variant='outlined' label='Page' fullWidth value={book.pages}
                onChange={(e) => { setbook({ ...book, pages: (e.target.value as any) as number }) }} />
              <Stack>
                <textarea maxLength={250} placeholder="Review" style={{ height: '20vh', padding: '10px' }}
                  value={book.review}
                  onChange={(e) => { setbook({ ...book, review: e.target.value }) }} className={classes.textArea} />
              </Stack>
            </Stack>
            : ""
          }
          <Stack direction='row' justifyContent='flex-start' alignItems='center' gap={2}>
            <InputLabel id="demo-simple-select-filled-label">Select category</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={category}
              onChange={(e: SelectProps) => { setcategory(e.target.value) }}
            >
              <MenuItem value="project">Project</MenuItem>
              <MenuItem value="blog">Blog</MenuItem>
              <MenuItem value="book">Book</MenuItem>
            </Select>
          </Stack>
          <Stack direction='row' mt={3} justifyContent='center'>
            <Button variant='contained' type='submit'>
              Submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container >
  )
}

export default Add