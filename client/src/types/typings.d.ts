// declare module "abc" {
//   namespace abc {
//     interface somepath {
//       vergil: string;
//     }
//   }

//   const abc: abc.somepath;
//   export default abc;
// }

declare module '*.svg' {
  import React = require('react');
  const src: string;
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default src;
}

interface Window {
  ethereum: any;
}