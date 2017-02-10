import { css } from 'glamor'

export const app = css({
  color: '#333',
  display: 'flex',
  flexFlow: 'row wrap',
  fontSize: '16px',
  fontFamily: 'Verdana, Geneva, sans-serif',
  height: '100%',
})

export const aside = css({
  backgroundColor: '#FAFAFA',
  borderRight: '1px solid #D0D0D0',
  flex: '1 6 20%',
})

export const article = css({
  backgroundColor: '#FFF',
  flex: '3 1 80%',
  order: '2',
  '> div': {
    backgroundColor: '#FFF',
    padding: '10px',
  }
})
