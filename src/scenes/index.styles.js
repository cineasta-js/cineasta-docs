import { css } from 'glamor'

export const content = css({
  margin: '0 auto',
  textAlign: 'justify',
  '& p, ol, ul, h1, h2, h3, h4, h5, h6': {
    lineHeight: '20px',
    margin: '35px 0',
  },
  '& h1': {
    fontSize: '36px',
    lineHeight: '54px',
  },
  '& h2': {
    fontSize: '32px',
    lineHeight: '40px',
  },
  '& h3': {
    fontSize: '30px',
    lineHeight: '38px',
  },
  '& h4': {
    fontSize: '28px',
  },
  '& h5': {
    fontSize: '26px',
  },
  '& h6': {
    fontSize: '24px',
  },
  '& a': {
    color: '#39C571',
  },
  '& img': {
    display: 'block',
    margin: '35px auto',
  },
  '& ul': {
    listStyle: 'disc',
  },
  '& li': {
    marginLeft: '25px',
  },
  '& blockquote': {
    borderLeft: '3px solid gray',
    fontStyle: 'italic',
    fontWeight: 'lighter',
    lineHeight: '30px',
    padding: '20px',
  },
  '& pre': {
    color: 'gray',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
  }
})
