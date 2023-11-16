import * as Tabs from '@radix-ui/react-tabs'

import { useState } from 'react'
import { TabItem } from './tab-item'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="flex w-full items-center gap-8 ">
        <TabItem
          title="Collections"
          value="collections"
          isSelected={currentTab === 'collections'}
        />
        <TabItem title="Men" value="men" isSelected={currentTab === 'men'} />
        <TabItem
          title="Woman"
          value="woman"
          isSelected={currentTab === 'woman'}
        />
        <TabItem
          title="About"
          value="about"
          isSelected={currentTab === 'about'}
        />
        <TabItem
          title="Contact"
          value="contact"
          isSelected={currentTab === 'contact'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
