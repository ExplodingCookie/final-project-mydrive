import React from 'react'
import styled from 'styled-components'

const RowIcons = styled.div`
 display: flex;
 flex-flow: row;
 justify-content: flex-end;
 width: 15%;
 align-items: center;
`

const DOWNLOAD_ICON = 'fas fa-file-download fa-2x'
const TRASH_ICON = 'far fa-trash-alt fa-2x'

class FileIcons extends React.Component {
  render () {
    return (
      <RowIcons>
        <i
          style={{ marginRight: '25px' }}
          className={DOWNLOAD_ICON}
        />
        <i
          style={{ marginRight: '25px' }}
          className={TRASH_ICON}
        />
      </RowIcons>
    )
  }
}

export default FileIcons
