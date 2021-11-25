import { Layout } from 'antd'
import { FC, ReactElement } from 'react'

const { Header, Content, Footer } = Layout

const MainLayout: FC<{  }> = (): 
ReactElement => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default MainLayout
