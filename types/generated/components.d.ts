import type { Schema, Attribute } from '@strapi/strapi';

export interface CardProjectCard extends Schema.Component {
  collectionName: 'components_card_project_cards';
  info: {
    displayName: 'project_card';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface QnAQnA extends Schema.Component {
  collectionName: 'components_qn_a_qn_as';
  info: {
    displayName: 'QnA';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface TextAboutusText extends Schema.Component {
  collectionName: 'components_text_aboutus_texts';
  info: {
    displayName: 'aboutus_text';
  };
  attributes: {
    para1: Attribute.Text;
    para2: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.project-card': CardProjectCard;
      'qn-a.qn-a': QnAQnA;
      'text.aboutus-text': TextAboutusText;
    }
  }
}
