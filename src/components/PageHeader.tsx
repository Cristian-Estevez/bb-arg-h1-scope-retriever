import browser from 'webextension-polyfill'

import OpenInNewWndow from '../assets/icons/openInNewWindow'
import { PropsWithChildren } from 'react'
import IconButton from './ui/IconButton'

export default function PageHeader({ children }: PropsWithChildren) {
  const openInNewWindow = () => {
    ;(browser.windows || chrome.windows).create({
      url: browser.runtime.getURL('index.html'),
      type: 'popup',
      width: 600,
      height: 432
    })
  }

  return (
    <div className='flex justify-between w-full p-2'>
      <img
        src='/bbarg_logo.jpg'
        alt='HackerOne Scope Retriever Logo'
        width={134}
        height={70}
        className='rounded'
      />
      {children}
      <IconButton onClick={openInNewWindow}>
        <OpenInNewWndow />
      </IconButton>
    </div>
  )
}
