import React from 'react'

export default function Loading({ isLoading }) {
  return (
    <>

      <div className="flex items-center justify-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>

    </>
  )
}
