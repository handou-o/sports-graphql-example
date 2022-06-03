/**
 * @generated SignedSource<<b6329afbd17840a5703eaf239b2431ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Sex = "MAN" | "WOMAN" | "%future added value";
export type playersQuery$variables = {};
export type playersQuery$data = {
  readonly players: ReadonlyArray<{
    readonly id: string;
    readonly shortname: string;
    readonly sex: Sex;
    readonly firstname: string;
    readonly lastname: string;
    readonly picture: {
      readonly url: string;
    };
    readonly country: {
      readonly picture: {
        readonly url: string;
      };
    };
    readonly stats: {
      readonly rank: number;
      readonly points: number;
      readonly weight: number;
      readonly height: number;
      readonly age: number;
    };
  }>;
};
export type playersQuery = {
  variables: playersQuery$variables;
  response: playersQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "Picture",
  "kind": "LinkedField",
  "name": "picture",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Player",
    "kind": "LinkedField",
    "name": "players",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "shortname",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sex",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstname",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastname",
        "storageKey": null
      },
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Stats",
        "kind": "LinkedField",
        "name": "stats",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rank",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "points",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "weight",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "height",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "age",
            "storageKey": null
          }
        ],
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
    "name": "playersQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "playersQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0b8d01766c2ea772c81fd5deb0757985",
    "id": null,
    "metadata": {},
    "name": "playersQuery",
    "operationKind": "query",
    "text": "query playersQuery {\n  players {\n    id\n    shortname\n    sex\n    firstname\n    lastname\n    picture {\n      url\n    }\n    country {\n      picture {\n        url\n      }\n    }\n    stats {\n      rank\n      points\n      weight\n      height\n      age\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4426f20b8e634cb5de00ace3fd622e3b";

export default node;
