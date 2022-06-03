/**
 * @generated SignedSource<<493816814b029c029f69bec214d5bb8e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type matchsQuery$variables = {};
export type matchsQuery$data = {
  readonly matches: ReadonlyArray<{
    readonly id: string;
    readonly players: ReadonlyArray<{
      readonly id: string;
      readonly shortname: string;
    }>;
    readonly winner: {
      readonly id: string;
    };
    readonly startTime: string;
    readonly endTime: string;
  }>;
};
export type matchsQuery = {
  variables: matchsQuery$variables;
  response: matchsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Match",
    "kind": "LinkedField",
    "name": "matches",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Player",
        "kind": "LinkedField",
        "name": "players",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "shortname",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Player",
        "kind": "LinkedField",
        "name": "winner",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "startTime",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endTime",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "matchsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "matchsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "aabe7e317d5d2f5316151fc42c0db70c",
    "id": null,
    "metadata": {},
    "name": "matchsQuery",
    "operationKind": "query",
    "text": "query matchsQuery {\n  matches {\n    id\n    players {\n      id\n      shortname\n    }\n    winner {\n      id\n    }\n    startTime\n    endTime\n  }\n}\n"
  }
};
})();

(node as any).hash = "7b1e5e1bd697cca27542e9c1b49d27c0";

export default node;
