import { css } from 'glamor'

export const markdown = css({
  textAlign: 'justify',
  '& h1, h2, h3, h4, h5, h6, p, ol, ul': {
    lineHeight: '20px',
    margin: '20px 0',
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
    color: 'blue',
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
  '& pre, code': {
    backgroundColor: 'dimgray',
    color: '#B1D631',
    lineHeight: '20px',
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
  },
  '& pre': {
    fontSize: '14px',
    padding: '10px',
  },
})
