import Navbar from './components/navbar/navbar'
import Content from './components/content/content'

import memeData from '@/memeData.js'

import { useState } from 'react'

import './App.css'


export default function App() {
  let idMeme = Math.floor(Math.random() * memeData.data.memes.length);
  let meme = memeData.data.memes[idMeme];
  return(
    <div className="app">
      <Navbar />
      <Content meme={meme} />
    </div>
  )
}