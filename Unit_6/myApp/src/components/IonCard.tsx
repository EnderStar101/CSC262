import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent } from '@ionic/react';

import './IonCard.css';

const Card1: React.FC = () => {
    return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>CSC 262 Card</IonCardTitle>
          <IonCardSubtitle>card 1</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
        text/content of anything I like.
        </IonCardContent>
      </IonCard>
    );
  }
  export default Card1;