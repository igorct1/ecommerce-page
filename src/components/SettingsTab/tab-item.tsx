'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ title, value, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative mt-12 px-1 pb-12 font-medium text-zinc-500 hover:text-orange
      data-[state=active]:text-orange"
    >
      <span>{title}</span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-orange"
        />
      )}
    </Tabs.Trigger>
  )
}
