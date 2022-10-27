const RANDOM_GAME_NFT_CONTRACT_ADDRESS =
  "0xC52365299D483843C77f69837Cc1707eA45edAe0";
const abi = [
  {
    type: "constructor",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "OnlyCoordinatorCanFulfill",
    inputs: [
      {
        type: "address",
        name: "have",
        internalType: "address",
      },
      {
        type: "address",
        name: "want",
        internalType: "address",
      },
    ],
    outputs: [],
  },
  {
    type: "event",
    name: "GameEnded",
    inputs: [
      {
        type: "uint256",
        name: "gameId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "winner",
        indexed: false,
        internalType: "address",
      },
      {
        type: "bytes32",
        name: "requestId",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "GameStarted",
    inputs: [
      {
        type: "uint256",
        name: "gameId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint8",
        name: "maxPlayers",
        indexed: false,
        internalType: "uint8",
      },
      {
        type: "uint256",
        name: "entryFee",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferRequested",
    inputs: [
      {
        type: "address",
        name: "from",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        type: "address",
        name: "from",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "PlayerJoined",
    inputs: [
      {
        type: "uint256",
        name: "gameId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "player",
        indexed: false,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RequestFulfilled",
    inputs: [
      {
        type: "uint256",
        name: "requestId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256[]",
        name: "randomWords",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RequestSent",
    inputs: [
      {
        type: "uint256",
        name: "requestId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint32",
        name: "numWords",
        indexed: false,
        internalType: "uint32",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "fallback",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "acceptOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "fee",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "gameId",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "gameStarted",
    inputs: [],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRequestStatus",
    inputs: [
      {
        type: "uint256",
        name: "_requestId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "fulfilled",
        internalType: "bool",
      },
      {
        type: "uint256[]",
        name: "randomWords",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "joinGame",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "keyHash",
    inputs: [],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "lastRequestId",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "players",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "rawFulfillRandomWords",
    inputs: [
      {
        type: "uint256",
        name: "requestId",
        internalType: "uint256",
      },
      {
        type: "uint256[]",
        name: "randomWords",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "requestIds",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "s_requests",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "fulfilled",
        internalType: "bool",
      },
      {
        type: "bool",
        name: "exists",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "startGame",
    inputs: [
      {
        type: "uint8",
        name: "_maxPlayers",
        internalType: "uint8",
      },
      {
        type: "uint256",
        name: "_entryFee",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "vrfCoordinator",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "receive",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
];

export { abi, RANDOM_GAME_NFT_CONTRACT_ADDRESS };
