#!/usr/bin/env node

import { question } from '../src/cli.js'
import { even } from '../src/brain-even.js'

console.log('Welcome to the Brain Games!')
const userName = question()
even(userName)