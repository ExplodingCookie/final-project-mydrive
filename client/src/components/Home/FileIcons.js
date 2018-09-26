import React from 'react'
import styled from 'styled-components'

const RowIcons = styled.div`
 display: flex;
 flex-flow: row;
 justify-content: flex-end;
 width: 15%;
 align-items: center;
`

const DOWNLOAD = 'fas fa-file-download fa-2x'
const TRASH = 'far fa-trash-alt fa-2x'

class FileIcons extends React.Component {
  render () {
    return (
      <RowIcons>
        <i
          style={{ marginRight: '25px' }}
          className={DOWNLOAD}
        />
        <i
          style={{ marginRight: '25px' }}
          className={TRASH}
        />
      </RowIcons>
    )
  }
}

export default FileIcons
