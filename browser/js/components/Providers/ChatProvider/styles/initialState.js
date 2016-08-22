

export const initialUX = {
  chatField: {
    value: ''
  },
  avatar: {
    defaultSize: 55,
    bigSize: 70,
    smallSize: 40
  }
}

export const initialStyles = {
  chatContainer: {
    background: 'url("/images/background/fractal-background.jpg") no-repeat center center fixed'
  },
  chat: {
    minHeight: '100vh',
    // minWidth: '500px',
    width: '30vw',
    //marginBottom: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '48px'
  },
  chatInput: {
    position: 'fixed',
    bottom: '0px',
    width: '100vw',
    backgroundColor: 'white',
    left: '50%',
    transform: 'translate(-50%, 0px)'
  },
  chatInputContainer: {
    position: 'fixed',
    bottom: '0px',
    width: '100vw',
    backgroundColor: 'white',
    paddingRight: '2vw',
    paddingLeft: '2vw',
  },
  chatInputSendButton: {
    float: 'right'
  },
  chatMessage: {
    display: 'inline-block',
    position: 'relative',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '-12px',
    width: '100%'
  }
}
