import ruRu from 'antd/lib/locale/ru_RU'
import { ConfigProvider } from 'antd'

import MainLayout from './components/MainLayout'

export function App() {
  return (
    <>
      <ConfigProvider locale={ruRu}>
        <MainLayout />
      </ConfigProvider>
    </>
  )
}
