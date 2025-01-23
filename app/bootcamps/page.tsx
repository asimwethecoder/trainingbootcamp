'use client'

import React from 'react'
import FeaturesBootcamps from '@/components/bootcamps/FeaturesBootcamps'
import HeaderBootcamps from '@/components/bootcamps/HeaderBootCamps'
import HeroBootcamps from '@/components/bootcamps/HeroBootcamps'





const BootcampsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <HeaderBootcamps />
      <HeroBootcamps />
      <FeaturesBootcamps />
    </div>
  )
}

export default BootcampsPage