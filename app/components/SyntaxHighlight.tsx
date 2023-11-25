"use client"
import React, { useEffect } from 'react'
import Prism from 'prismjs'
import parse from "html-react-parser";
import 'prism-themes/themes/prism-one-light.min.css';

export default function SyntaxHighlight({ content }: { content: any }) {

    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div>
            {parse(content)}
        </div>
    )
}
