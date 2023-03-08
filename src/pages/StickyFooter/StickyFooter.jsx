import React from 'react'
import styled from 'styled-components'

export default function StickyFooter() {
  return (
    <Container>
      <header>
        <h1>헤드라인</h1>
      </header>
      <main>
        <div>메인파트</div>
      </main>
      <footer>
        <div>푸터</div>
      </footer>
    </Container>
  )
}

const Container = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100svh;
  min-height: 100dvh;
  min-height: 100vh;
`

/**
 * flex

const Container = styled.section`
  display: flex;
  flex-flow: column wrap;
  min-height: 100svh;
  min-height: 100dvh;
  min-height: 100vh;`
  & > main {
    flex: 1;
  }
`

*/