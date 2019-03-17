import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import Resizer from './Resizer'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`

const Layout = styled.div`
  display: flex;
`

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`

const Sidebar = styled(Block)`
  background-color: darkolivegreen;
  flex-grow: 0;
  flex-shrink: 0;
`

const Content = styled(Block)`
  background-color: papayawhip;
`

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Layout>
        <Resizer sides={['right', 'bottom']}>
          {({ ref, sideElements }) => (
            <Sidebar className="cy-sidebar" ref={ref}>
              {sideElements}
              Sidebar
            </Sidebar>
          )}
        </Resizer>

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
