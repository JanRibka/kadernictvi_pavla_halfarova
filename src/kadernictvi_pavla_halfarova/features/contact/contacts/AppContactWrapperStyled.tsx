import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface IProps extends BoxProps {
  href: string | undefined;
  target: string | undefined;
}

const AppContactWrapperStyled = styled(({ className, ...props }: IProps) => (
  <Box {...props} className={className} />
))`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;   
  &:active {
    text-decoration: none;
  }

  // Telephone icon
  &.hvr-icon-ringing-bell {    
    transition: translate(-50%, -50%);
    &:hover {
      & .ringing-bell {        
        -webkit-animation: ring 2s ease infinite;
        animation: ring 2s ease infinite;
        transform-origin: 50% 0px initial;
      }
    }
  }

  // Email icon
  &.hvr-icon-email {
    &:hover {
      .top-side {
        transform: rotateX(0deg);
        z-index: 3;
        transition-delay: 0.3s;
      }
  
      .image {
        top: -70%;
        z-index: 3;
        transition-delay: 0.6s;
      }
    }    
  }
  
  // Place icon
  &.hvr-icon-bob {
    // // Improve performance on mobile/tablet devices
    // // Perspective reduces blurryness of text in Chrome
    // transform: perspective(1px) translateZ(0);  
  
    // // Improve aliasing on mobile/tablet devices
    // box-shadow: 0 0 1px rgba(0, 0, 0, 0);  
    
    // // Transforms need to be block-level to work
    // display: inline-block;
    // vertical-align: middle;
    
    transition-duration: .3s;

    .hvr-icon {
      transform: translateZ(0);      
    }

    &:hover {      
      .hvr-icon {        
        animation-name: icon-bob-float, icon-bob;
        animation-duration: .3s, 1.5s;
        animation-delay: 0s, .3s;
        animation-timing-function: ease-out, ease-in-out;
        animation-iteration-count: 1, infinite;
        animation-fill-mode: forwards;
        animation-direction: normal, alternate;        
      }
    }
  }

  // Keyframe pro ringing bell
  @-webkit-keyframes ring {
    0% {
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }
    2% {
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    4% {
      -webkit-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }
    6% {
      -webkit-transform: rotate(18deg);
      transform: rotate(18deg);
    }
    8% {
      -webkit-transform: rotate(-22deg);
      transform: rotate(-22deg);
    }
    10% {
      -webkit-transform: rotate(22deg);
      transform: rotate(22deg);
    }
    12% {
      -webkit-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }
    14% {
      -webkit-transform: rotate(18deg);
      transform: rotate(18deg);
    }
    16% {
      -webkit-transform: rotate(-12deg);
      transform: rotate(-12deg);
    }
    18% {
      -webkit-transform: rotate(12deg);
      transform: rotate(12deg);
    }
    20% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }
  @keyframes ring {
    0% {
      -webkit-transform: rotate(-15deg);
      -ms-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }
    2% {
      -webkit-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    4% {
      -webkit-transform: rotate(-18deg);
      -ms-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }
    6% {
      -webkit-transform: rotate(18deg);
      -ms-transform: rotate(18deg);
      transform: rotate(18deg);
    }
    8% {
      -webkit-transform: rotate(-22deg);
      -ms-transform: rotate(-22deg);
      transform: rotate(-22deg);
    }
    10% {
      -webkit-transform: rotate(22deg);
      -ms-transform: rotate(22deg);
      transform: rotate(22deg);
    }
    12% {
      -webkit-transform: rotate(-18deg);
      -ms-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }
    14% {
      -webkit-transform: rotate(18deg);
      -ms-transform: rotate(18deg);
      transform: rotate(18deg);
    }
    16% {
      -webkit-transform: rotate(-12deg);
      -ms-transform: rotate(-12deg);
      transform: rotate(-12deg);
    }
    18% {
      -webkit-transform: rotate(12deg);
      -ms-transform: rotate(12deg);
      transform: rotate(12deg);
    }
    20% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  // Keyframe pro icon place
  @-webkit-keyframes icon-bob {
    0% {
      transform: translateY(-6px);
    }
    50% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(-6px);
    }
  }
  
  @-webkit-keyframes icon-bob-float {
    100% {
      transform: translateY(-6px);
    }
  }
`;

export default AppContactWrapperStyled;
