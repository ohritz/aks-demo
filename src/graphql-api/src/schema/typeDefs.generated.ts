import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":5,"end":10}},"interfaces":[],"directives":[],"fields":[],"loc":{"start":0,"end":10}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":24,"end":29}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"categories","loc":{"start":34,"end":44}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Category","loc":{"start":47,"end":55}},"loc":{"start":47,"end":55}},"loc":{"start":46,"end":56}},"directives":[],"loc":{"start":34,"end":56}}],"loc":{"start":12,"end":58}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Category","loc":{"start":65,"end":73}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":78,"end":80}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":82,"end":84}},"loc":{"start":82,"end":84}},"loc":{"start":82,"end":85}},"directives":[],"loc":{"start":78,"end":85}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name","loc":{"start":88,"end":92}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":94,"end":100}},"loc":{"start":94,"end":100}},"loc":{"start":94,"end":101}},"directives":[],"loc":{"start":88,"end":101}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"products","loc":{"start":104,"end":112}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Product","loc":{"start":115,"end":122}},"loc":{"start":115,"end":122}},"loc":{"start":114,"end":123}},"directives":[],"loc":{"start":104,"end":123}}],"loc":{"start":60,"end":125}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":131,"end":136}},"interfaces":[],"directives":[],"fields":[],"loc":{"start":126,"end":136}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":150,"end":155}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"product","loc":{"start":160,"end":167}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":168,"end":170}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":172,"end":174}},"loc":{"start":172,"end":174}},"loc":{"start":172,"end":175}},"directives":[],"loc":{"start":168,"end":175}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Product","loc":{"start":178,"end":185}},"loc":{"start":178,"end":185}},"directives":[],"loc":{"start":160,"end":185}}],"loc":{"start":138,"end":187}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Product","loc":{"start":194,"end":201}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":206,"end":208}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":210,"end":212}},"loc":{"start":210,"end":212}},"loc":{"start":210,"end":213}},"directives":[],"loc":{"start":206,"end":213}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name","loc":{"start":216,"end":220}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":222,"end":228}},"loc":{"start":222,"end":228}},"loc":{"start":222,"end":229}},"directives":[],"loc":{"start":216,"end":229}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"category","loc":{"start":232,"end":240}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Category","loc":{"start":242,"end":250}},"loc":{"start":242,"end":250}},"loc":{"start":242,"end":251}},"directives":[],"loc":{"start":232,"end":251}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"subCategory","loc":{"start":254,"end":265}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":267,"end":273}},"loc":{"start":267,"end":273}},"loc":{"start":267,"end":274}},"directives":[],"loc":{"start":254,"end":274}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdOn","loc":{"start":277,"end":286}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":288,"end":294}},"loc":{"start":288,"end":294}},"loc":{"start":288,"end":295}},"directives":[],"loc":{"start":277,"end":295}}],"loc":{"start":189,"end":297}}],"loc":{"start":0,"end":298}} as unknown as DocumentNode