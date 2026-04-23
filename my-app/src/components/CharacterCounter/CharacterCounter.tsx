import {useState, usestate } from 'react'
import { CharacterCounterProps,TextStats } from '../../types';

function CharacterCounter({
    minWords = 0,
    maxWords = 100,
    targetReadingTime = 1
}: CharacterCounterProps) {\
    const [text, setText] = useState('');
    const [stats, setStats] = useState<TextStats>({
        characterCount: 0,
        wordCount: 0,
        readingTime: 0
    });