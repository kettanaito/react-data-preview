import React from 'react';
import styled from 'styled-components';
import List from './List';
import renderData from '../renderData';

const NodeContainer = styled.li`
position: relative;
padding-left: .9rem;

cursor: pointer;
list-style: none;

&:not(:last-child) {
  margin-bottom: .25rem;
}
`;

const NodeArrow = styled.span`
position: absolute;
top: 4px;
left: 3px;
display: inline-block;
margin: auto .3rem auto 0;
height: 0;

border-style: solid;
border-width: 5px;
border-color: rgba(255, 255, 255, .2) transparent transparent;

transform: rotate(${({ isExpanded }) => isExpanded ? 0 : -90}deg);
transform-origin: center;

${({ isExpanded}) => isExpanded && `
  top: 7px;
  left: 0;
`}
`;

const NodeName = styled.span`
color: #7AD9ED;
`;

const NodeValue = styled.span`
color: #FF8B6E;
`;

const getValueExcerpt = (data) => {
  if (typeof data === 'string') return `"${data}"`;
  if (typeof data === 'boolean') return `${data}`;
  if (Array.isArray(data)) return `Array[${data.length}]`;
  if (data instanceof Object) return '{…}';
  if (!isNaN(data)) return data;

  return 'null';
}

export default class Node extends React.PureComponent {
  state = {
    isExpanded: false
  }

  handleClick = (event) => {
    event.stopPropagation();
    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }));
  }

  render() {
    const { isExpanded } = this.state;
    const { name, data } = this.props;
    const isExpandable = (Array.isArray(data)) || (data instanceof Object);

    return (
      <NodeContainer onClick={ this.handleClick }>
        { isExpandable && (<NodeArrow isExpanded={ isExpanded } />) }
        <NodeName>{ name }: </NodeName>
        <NodeValue>{ getValueExcerpt(data) }</NodeValue>
        { isExpanded && (
          <List>{ renderData(data) }</List>
        ) }
      </NodeContainer>
    );
  }
}