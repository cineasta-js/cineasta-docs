import { css } from 'glamor'

export const app = css({
  display: 'flex',
  flexFlow: 'row wrap',
  height: '100%',
})

export const article = css({
  backgroundColor: '#F3EACB',
  flex: '3 auto',
  height: 'calc(100% - 100px)',
  order: '2',
  padding: '10px',
})

export const aside = css({
  backgroundColor: '#E2D9BA',
  flex: '1 auto',
})

export const header = css({
  backgroundColor: '#D1C8A9',
  flex: '1 100%',
  height: '100px',
})
