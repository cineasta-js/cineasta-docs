import { css } from 'glamor'

const textColor = '#333'

export const container = css({
  backgroundColor: '#FFF',
  color: textColor,
  fontSize: '16px',
  fontFamily: 'Verdana, Geneva, sans-serif',
  margin: '0 auto',
  maxWidth: '800px',

  '& img': {
    height: '250px',
  },
})

export const nav = css({
  padding: '10px 0 0 0',
  textAlign: 'center',

  '& a': {
    color: textColor,
    display: 'inline-block',
    fontWeight: 'bold',
    margin: '0 10px',
  },
})

export const link = css({
  color: textColor,
})
