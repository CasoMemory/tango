import React from 'react';
import { IconButton, InputCode } from '@music163/tango-ui';
import { BlockOutlined } from '@ant-design/icons';

export default {
  title: 'UI/InputCode',
};

const context = {
  stores: {
    foo: {
      loading: false,
      action: () => {},
    },
  },
  services: {
    list: () => {},
    get: () => {},
  },
};

export function Basic() {
  return (
    <InputCode
      suffix={<IconButton icon={<BlockOutlined />} />}
      autoCompleteContext={{ tango: context }}
    />
  );
}

const code = `
function foo() {
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
}
`;

export function Readonly() {
  return <InputCode shape="inset" readOnly value={code} />;
}

export function Inset() {
  return <InputCode shape="inset" />;
}
