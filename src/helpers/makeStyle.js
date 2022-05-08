export const makeStyle = (status) => {
  if (status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green'
    }
  } else if (status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red'
    }
  } else {
    return {
      background: '#59bfff',
      color: 'white'
    }
  }
}
