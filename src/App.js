import React from 'react'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'

const Layout = styled.div`
  display: flex;
`

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 30px;
`

const Sidebar = styled(Block)`
  background-color: darkolivegreen;
`

const Content = styled(Block)`
  background-color: papayawhip;
`

function App() {
  return (
    <>
      <Normalize />
      <Layout>
        <Sidebar>Sidebar</Sidebar>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          magnam incidunt quis mollitia similique sapiente laborum, culpa nisi
          aliquam alias aut placeat enim eaque in illo expedita dolor fuga quae.
        </Content>
      </Layout>
    </>
  )
}

export default App
