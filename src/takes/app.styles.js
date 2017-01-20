import { css } from 'glamor'

export const app = css({
  display: 'flex',
  flexFlow: 'row wrap',
  fontSize: '16px',
  fontFamily: 'Verdana, Geneva, sans-serif',
  height: '100%',
})

export const aside = css({
  backgroundColor: '#E2D9BA',
  flex: '1 auto',
})

export const header = css({
  alignItems: 'center',
  backgroundColor: '#D1C8A9',
  display: 'flex',
  flex: '1 100%',
  height: '150px',
  justifyContent: 'space-around',
})

export const logo = css({
  height: '100px',
})

export const article = css({
  backgroundColor: '#F3EACB',
  flex: '3 auto',
  height: 'calc(100% - 150px)',
  order: '2',
  '> div': {
    backgroundColor: '#F3EACB',
    padding: '10px',
  }
})
