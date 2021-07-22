import styled from 'styled-components/native';

const unoColor = {
  'red':'#D73600',
  'blue':'#0956BF',
  'green':'#379711',
  'yellow':'#ECD407',
}

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
  background: ${({color})=> unoColor[color]};
  ${({active})=>active && 'border-color: white; border-width:5px'}
  
  flex:2;
`;