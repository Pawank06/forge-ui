'use client'

import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodePreviewProps {
  code: string
  children: React.ReactNode
}

const CodePreview: React.FC<CodePreviewProps> = ({ code, children }) => {
  const [showCode, setShowCode] = useState(false)

  return (
    <>
    <div className='flex gap-4 py-2'>
        <button 
          onClick={() => setShowCode(false)}
          className={cn(!showCode ? 'font-bold underline' : 'font-semibold')}
        >
Preview
        </button>
        <button 
          onClick={() => setShowCode(true)}
          className={cn(showCode ? 'font-bold underline' : 'font-semibold')}
        >
          Code
        </button>
    </div>
    <div className="border rounded-lg overflow-hidden">
      <div className="px-2 py-2">
        {showCode && (
          <div className="max-h-[30rem] overflow-auto">
          <SyntaxHighlighter language="tsx" style={atomDark}>
            {code}
          </SyntaxHighlighter>
        </div>
        )}
      </div>
      {!showCode && <div className="h-[30rem] flex items-center justify-center">
        {children}
      </div>}
    </div>
    </>
  )
}

export default CodePreview