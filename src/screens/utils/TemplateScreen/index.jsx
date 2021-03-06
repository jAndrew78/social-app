import React, { useState } from 'react';
import { 
  Container,
  Main,
  Background,
  StatusBar,
} from "./styles/TemplateScreen";

import BgImage from '../../../assets/SignInBg.png'
import { Text } from '../../components';

export default TemplateScreen = ({navigation}) => {
  return (
    <Container>
      
      <Main>
        <Text center title semi>
          Template Screen
        </Text>
      </Main>

      <Background source={BgImage}>
      </Background>
      
      <StatusBar barStyle="light-content" />
    </Container>
  );
}
