import React from 'react';
import { MdDelete } from 'react-icons/md';
import { Container, Selector, Cleaner } from './style';

function Filter() {
  const langs = [
    { name: 'JavaScript', count: 5, color: '#f1c40f' },
    { name: 'PHP', count: 55, color: '#95a5a6' },
    { name: 'ReactJs', count: 5, color: '#3498db' },
  ];

  const selectors = langs.map(({ name, count, color }) => (
    <Selector key={name.toLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>
        Limpar&nbsp;
        <MdDelete />
      </Cleaner>
    </Container>
  );
}

export default Filter;
