import React from 'react';
import { PrimitiveValue } from './components';

export default function getValueExcerpt(value) {
  if (typeof value === 'string') {
    return <PrimitiveValue name="string">"{value}"</PrimitiveValue>
  }

  if (typeof value === 'boolean') {
    return <PrimitiveValue name="boolean">{value.toString()}</PrimitiveValue>;
  }

  if (typeof value === 'function') {
    return <PrimitiveValue name="function">{value.name || 'fn'}()</PrimitiveValue>;
  }

  if (Array.isArray(value)) {
    return <PrimitiveValue name="array">Array[{value.length}]</PrimitiveValue>;
  }

  if (value instanceof Object) {
    return <PrimitiveValue name="object">&#123;…&#125;</PrimitiveValue>;
  }

  if (!isNaN(value)) {
    return <PrimitiveValue name="number">{value}</PrimitiveValue>;
  }


  return 'null';
}