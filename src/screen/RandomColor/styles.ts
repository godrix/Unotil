import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex:1;
`;

interface BoxColorProps{
  color:'red'|'blue'|'green'|'yellow';
  active?:boolean;
}

export const Line = styled.View`
  flex:2;
  flex-direction: row;
`;

export const BoxColor = styled.View<BoxColorProps>`
  background: ${({color})=>color};
  ${({active})=>active && 'border-color: white; border-width:5px'}
  
  flex:2;
`;