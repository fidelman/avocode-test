import React from 'react'
import styled from 'styled-components'

const isSideHorizontal = (side) => side === 'right' || side === 'left'

const Side = styled.div`
  position: absolute;
  cursor: ${({ side }) =>
    isSideHorizontal(side) ? 'col-resize' : 'row-resize'};
  width: ${({ side }) => (isSideHorizontal(side) ? '2px' : '100%')};
  height: ${({ side }) => (isSideHorizontal(side) ? '100%' : '2px')};
  top: ${({ side }) =>
    isSideHorizontal(side) ? 0 : side === 'top' ? '-1px' : 'auto'};
  bottom: ${({ side }) => (side === 'bottom' ? '-1px' : 'auto')};
  left: ${({ side }) =>
    !isSideHorizontal(side) ? 0 : side === 'left' ? '-1px' : 'auto'};
  right: ${({ side }) => (side === 'right' ? '-1px' : 'auto')};
`

class Resizer extends React.Component {
  state = {
    activeSide: '',
    initialHeight: 0,
    initialWidth: 0
  }

  handleMouseMove = (event) => {
    const { activeSide, initialHeight, initialWidth } = this.state
    const { clientX, clientY } = event
    let side = ''
    let size = 0
    if (activeSide === 'right') {
      side = 'width'
      size = clientX - this.container.offsetLeft
    } else if (activeSide === 'bottom') {
      side = 'height'
      size = clientY - this.container.offsetTop
    } else if (this.activeSide === 'left') {
      side = 'width'
      size = initialWidth - clientX + this.container.offsetLeft
    } else if (activeSide === 'top') {
      side = 'height'
      size = initialHeight - clientY + this.container.offsetTop
    }
    this.container.style[side] = `${size}px`
  }

  setRef = (container) => (this.container = container)

  handleMouseUp = () => {
    this.setState({ activeSide: '' })
    console.log('up')
    document.removeEventListener('mousemove', this.handleMouseMove)
  }

  componentDidMount() {
    this.setState({
      initialHeight: this.container.offsetHeight,
      initialWidth: this.container.offsetWidth
    })
    this.container.style.position = 'relative'
    document.addEventListener('mouseup', this.handleMouseUp)
  }

  render() {
    const sideElements = this.props.sides.map((side) => {
      const handleMouseDown = () => {
        this.setState({ activeSide: side })
        console.log('down')
        document.addEventListener('mousemove', this.handleMouseMove)
      }
      return <Side side={side} onMouseDown={handleMouseDown} key={side} />
    })

    return this.props.children({ ref: this.setRef, sideElements })
  }
}

export default Resizer
