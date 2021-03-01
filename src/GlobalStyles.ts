import { createGlobalStyle } from 'styled-components';
import Jalnan from './fonts/Jalnan.ttf';

export default createGlobalStyle`
  *::-webkit-scrollbar {
    display: none;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif; 
    box-sizing: border-box;
    font-weight: 300;
  }

  * {
    box-sizing: inherit;    
  }

  html, body {
    height: 100%;
    overflow-x: hidden;
  }

  svg {
    cursor: pointer;
  }

  button,
  input,
  optgroup,
  select,
  textarea,html input[type="button"],
  input[type="reset"],
  input[type="submit"],button[disabled],
  html input[disabled],button::-moz-focus-inner,
  input::-moz-focus-inner, input[type="checkbox"],
  input[type="radio"], input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button, input[type="search"], input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoratio {
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  @font-face {
    font-family: "Jalnan";
    src: url(${Jalnan}) format('truetype');
  }
`;
